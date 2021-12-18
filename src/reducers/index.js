const initialState = {
	menu: [],
	isLoaded: false,
	isError: false,
	items: [],
	totalPrice: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "MENU_LOADED":
			return {
				...state,
				menu: action.payload,
				isLoaded: true,
				isError: false,
			};
		case "MENU_REQUESTED":
			return {
				...state,
				menu: state.menu,
				isLoaded: false,
				isError: false,
			};
		case "MENU_ERROR":
			return {
				...state,
				menu: state.menu,
				isLoaded: false,
				isError: true,
			};
		case "ITEM_ADD_TO_CART":
			const id = action.payload;
			const itemInd = state.items.findIndex((item) => item.id === id);
			if (itemInd !== -1) {
				const itemInState = state.items.find((item) => item.id === id);
				const newItem = {
					...itemInState,
					qtty: ++itemInState.qtty,
				};
				return {
					...state,
					items: [...state.items.slice(0, itemInd), newItem, ...state.items.slice(itemInd + 1)],
					totalPrice: state.totalPrice + newItem.price,
				};
			}
			const item = state.menu.find((item) => item.id === id);
			const newItem = {
				title: item.title,
				price: item.price,
				url: item.url,
				id: item.id,
				qtty: 1,
			};
			return {
				...state,
				items: [...state.items, newItem],
				totalPrice: state.totalPrice + newItem.price,
			};
		case "ITEM_REMOVE_FROM_CART":
			const idx = action.payload;
			const itemIndex = state.items.findIndex((item) => item.id === idx);
			const price = state.items[itemIndex].price * state.items[itemIndex].qtty;
			return {
				...state,
				items: [...state.items.slice(0, itemIndex), ...state.items.slice(itemIndex + 1)],
				totalPrice: state.totalPrice - price,
			};
		default:
			return state;
	}
};

export default reducer;
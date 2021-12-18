import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import "./menu-list.scss";
import WithRestoService from "../hoc";
import { menuLoaded, menuRequested, menuError, addedToCart } from "../../actions";
import Error from "../error";
import Spinner from "../spinner";

class MenuList extends Component {
	componentDidMount() {
		this.props.menuRequested();
		const { RestoService } = this.props;
		RestoService.getMenuItems()
			.then((res) => this.props.menuLoaded(res))
			.catch((error) => this.props.menuError());
	}
	render() {
		const { menuItems, isLoaded, isError, addedToCart } = this.props;
		if (isError) {
			return <Error />;
		}
		if (!isLoaded) {
			return <Spinner />;
		}
		const items = menuItems.map((menuItem) => {
			return <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={() => addedToCart(menuItem.id)} />;
		});

		return <View items={items} />;
	}
}

const View = ({ items }) => {
	return <ul className="menu__list">{items}</ul>;
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		isLoaded: state.isLoaded,
		isError: state.isError,
	};
};

const mapDispatchToProps = {
	menuLoaded: menuLoaded,
	menuRequested,
	menuError,
	addedToCart,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));

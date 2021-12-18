import React from "react";
import "./menu-list-item.scss";
const MenuListItem = ({ menuItem, onAddToCart }) => {
	const { title, price, url, category } = menuItem;
	return (
		<li className="menu__item">
			<div className="menu__icon">
				<SvgComp category={category}></SvgComp>
			</div>
			<div className="menu__title">{title}</div>
			<img className="menu__img" src={url} alt="Cesar salad"></img>
			<div className="menu__category">
				Category: <span>{category}</span>
			</div>
			<div className="menu__price">
				Price: <span>{price}$</span>
			</div>
			<button
				onClick={(e) => {
					e.preventDefault();
					onAddToCart();
				}}
				className="menu__btn">
				Add to cart
			</button>
		</li>
	);
};

const SvgComp = ({ category }) => {
	if (category === "pizza") {
		return (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="pizza-slice"
				className="svg-inline--fa fa-pizza-slice fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512">
				<path
					fill="currentColor"
					d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path>
			</svg>
		);
	} else if (category === "meat") {
		return (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="drumstick-bite"
				className="svg-inline--fa fa-drumstick-bite fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512">
				<path
					fill="currentColor"
					d="M462.8 49.57a169.44 169.44 0 0 0-239.5 0C187.82 85 160.13 128 160.13 192v85.83l-40.62 40.59c-9.7 9.69-24 11.07-36.78 6a60.33 60.33 0 0 0-65 98.72C33 438.39 54.24 442.7 73.85 438.21c-4.5 19.6-.18 40.83 15.1 56.1a60.35 60.35 0 0 0 98.8-65c-5.09-12.73-3.72-27 6-36.75L234.36 352h85.89a187.87 187.87 0 0 0 61.89-10c-39.64-43.89-39.83-110.23 1.05-151.07 34.38-34.36 86.76-39.46 128.74-16.8 1.3-44.96-14.81-90.28-49.13-124.56z"></path>
			</svg>
		);
	}
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="carrot"
			className="svg-inline--fa fa-carrot fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512">
			<path
				fill="currentColor"
				d="M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z"></path>
		</svg>
	);
};

export default MenuListItem;

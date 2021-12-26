import React from "react";
import salads_icon from "./salads_icon.svg";
import meat_icon from "./meat_icon.svg";
import pizza_icon from "./pizza_icon.svg";

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
    return (<img src={pizza_icon}/>);
  } else if (category === "meat") {
    return (<img src={meat_icon}/>);
  } else if (category === "salads") {
    return (<img src={salads_icon}/>);
  }
};

export default MenuListItem;

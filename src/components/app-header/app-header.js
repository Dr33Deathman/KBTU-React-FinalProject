import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const AppHeader = ({ totalPrice }) => {
  return (
    <header className="header">
      <Link className="header__link" to="/menu">
        Menu
      </Link>
      <Link className="header__link" to="/contacts">
        Contacts
      </Link>
      <Link className="header__link" to="/about">
        About Us
      </Link>
      <Link className="header__link" to="/cart">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {totalPrice} $
      </Link>
    </header>
  );
};

const mapStateToProps = ({ totalPrice }) => {
  return {
    totalPrice,
  };
};

export default connect(mapStateToProps)(AppHeader);

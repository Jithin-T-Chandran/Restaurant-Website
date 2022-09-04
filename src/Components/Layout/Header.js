import React, { Fragment } from "react";
import classes from  "./Header.module.css";
import mealsImage from "../../asserts/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  );
}

export default Header;

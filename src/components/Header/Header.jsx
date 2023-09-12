import React from "react";

import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

import cx from "../../styles/Header.module.css";
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

const Header = () => {
    return (
        <div className={cx.header}>
            <div className={cx.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="logo"></img>
            </Link>
            </div>

            <div className={cx.info}>
                <div className={cx.user}>
                    <div className={cx.avatar} style={{ backgroundImage: `url(${AVATAR})`}}></div>
                <div className={cx.username}>Guest</div>
                </div>
                <form className={cx.form}>
                    <div className={cx.icon}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}></use>
                        </svg>
                    </div>
                    <div className={cx.imput}>
                        <imput 
                            type="search" 
                            name="search" 
                            placeholder="Search for anything..."
                            autoComplete="off"
                            onChange={() => {}}
                            value=""
                        />
                    </div>

                    {false &&  <div className={cx.box}></div>}
    
                </form>
                <div className={cx.account}>
                    <Link to={ROUTES.HOME} className={cx.favourites}>
                    <svg className={cx["icon-fav"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}></use>
                        </svg>
                    </Link>
                    <Link to={ROUTES.CART} className={cx.cart}>
                    <svg className={cx["icon-cart"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}></use>
                        </svg>
                        <span className={cx.count}>2</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Header;
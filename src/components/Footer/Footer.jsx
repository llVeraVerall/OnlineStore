import React from "react";

import cx from "../../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";

const Footer = () => {
    return (
    <section className={cx.footer}>
         <div className={cx.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="logo"></img>
            </Link>
            </div>
            <div className={cx.rights}>
                Developed by VeraVera
            </div>
        <div className={cx.socials}>
            <a href="https://github.https://github.com/llVeraVerall/tamkovich-yana/stuff/tree/master/src/utils">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}></use>
                </svg>
            </a>
            <a href="https://github.https://github.com/llVeraVerall/tamkovich-yana/stuff/tree/master/src/utils">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}></use>
                </svg>
            </a>
            <a href="https://github.https://github.com/llVeraVerall/tamkovich-yana/stuff/tree/master/src/utils">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}></use>
                </svg>
            </a>
        </div>
    </section>
    )
};

export default Footer;
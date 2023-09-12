import React from "react";
import cx from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <section className={cx.sidebar}>
            <div className={cx.title}>CATEGORIES</div>
            <nav>
                <ui className={cx.menu}>
                    <li>
                        <NavLink>
                            Link
                        </NavLink>
                    </li>
                </ui>
            </nav>
            <div className={cx.footer}>
                <a href="/help" target="_blank" className={cx.link}>Help</a>
                <a href="/terms" target="_blank" className={cx.link} style={{ textDecoration: "underline" }}>Terms</a>
            </div>
        </section>
    )
};

export default Sidebar;
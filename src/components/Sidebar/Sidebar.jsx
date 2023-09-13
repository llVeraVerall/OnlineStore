import React from "react";
import cx from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { list } = useSelector(({ categories }) => categories);

    return (
        <section className={cx.sidebar}>
            <div className={cx.title}>CATEGORIES</div>
            <nav>
                <ui className={cx.menu}>
                    {list.map(({ id, name }) => (
                         <li key={id}>
                         <NavLink 
                            className={({ isActive }) => `${cx.link} ${isActive ? cx.active : ""}`}
                            to={`/categories/${id}`}>{name}</NavLink>
                     </li>
                    ))}
                </ui>
            </nav>
            <div className={cx.footer}>
                <a 
                    href="/help" 
                    target="_blank" 
                    className={cx.link}>
                        Help
                </a>
                <a 
                    href="/terms" 
                    target="_blank" 
                    className={cx.link} style={{ textDecoration: "underline" }}>
                        Terms
                </a>
            </div>
        </section>
    )
};

export default Sidebar;
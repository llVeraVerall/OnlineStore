import React from "react";

import cx from "../../styles/Categories.module.css";
import { Link } from "react-router-dom";

const Categories = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className={cx.section}>
            <h2>{ title }</h2>
            <div className={cx.list}>
                {list.map(({ id, name, image }) => (
                    <Link to={`/categories/${id}`} key={id} className={cx.item}>
                        <div className={cx.image} style={{ backgroundImage: `url(${image})` }}></div>
                        <h3 className={cx.title}>{name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Categories;
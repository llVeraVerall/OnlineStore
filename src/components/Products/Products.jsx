import React from "react";

import cx from "../../styles/Products.module.css";
import { Link } from "react-router-dom";

const Products = ({ title, style = {}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className={cx.products} style={style}>
          {title && <h2>{title}</h2>}
            <div className={cx.list}>
                {list.map(({ id, images, title, category: { name: cat }, price }) => (
                    <Link to={`/products/${id}`} key={id} className={cx.product}>
                        <div className={cx.image} style={{ backgroundImage: `url(${images[0]})` }}></div>
                        <div className={cx.wrapper}>
                            <h3 className={cx.title}>{title}</h3>
                            <div className={cx.cat}>{cat}</div>
                            <div className={cx.info}>
                                <div className={cx.prices}>
                                <div className={cx.price}>{price}$</div>
                                <div className={cx.oldPrice}>
                                    {Math.floor(price * 0.8)}$
                                </div>
                                </div>
                            <div className={cx.purchases}>
                                {Math.floor(Math.random() * 20 + 1)} purchased
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
          </div>
        </section>
    )
};

export default Products;

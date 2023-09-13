import React from "react";

import cx from "../../styles/Home.module.css";
import BG from "../../images/computer.png";

const Poster = () => {
    return (
        <section className={cx.home}>
            <div className={cx.title}>BIG SALE</div>
            <div className={cx.product}>
                <div className={cx.subtitle}>the bestseller of 2022</div>
                <h1 className={cx.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
                <button className={cx.button}>Shop Now</button>
            </div>
            <div className={cx.image}>
                <img src={BG} alt="" />
            </div>
        </section>
    )
}

export default Poster;
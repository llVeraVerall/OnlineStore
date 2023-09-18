import React from "react";

import cx from "../../styles/Home.module.css";

import bannerImg from "../../images/banner.png";

const Banner = () => (
  <section className={cx.banner}>
    <div className={cx.left}>
      <p className={cx.content}>
        NEW YEAR
        <span>SALE</span>
      </p>
      <button className={cx.more}>See more</button>
    </div>

    <div
      className={cx.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <p className={cx.discount}>
        save up to <span>50%</span> off
      </p>
    </div>
  </section>
);

export default Banner;
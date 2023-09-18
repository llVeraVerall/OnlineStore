import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTES } from "../../utils/routes";

import cx from "../../cx/Product.module.css";

import { addItemToCart } from "../../features/user/userSlice";

const SIZES = [4, 4.5, 5];

const Product = (item) => {
  const { title, price, images, description } = item;

  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <section className={cx.product}>
      <div className={cx.images}>
        <div
          className={cx.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={cx["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={cx.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={cx.info}>
        <h1 className={cx.title}>{title}</h1>
        <div className={cx.price}>{price}$</div>
        <div className={cx.color}>
          <span>Color:</span> Green
        </div>
        <div className={cx.sizes}>
          <span>Sizes:</span>

          <div className={cx.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${cx.size} ${
                  currentSize === size ? cx.active : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={cx.description}>{description}</p>

        <div className={cx.actions}>
          <button
            onClick={addToCart}
            className={cx.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button className={cx.favourite}>Add to favourites</button>
        </div>

        <div className={cx.bottom}>
          <div className={cx.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;


import React, { useState } from "react";
import chevron from "../../public/img/icons/chevron_down.svg";
import styled from "styled-components";
import Image from "next/image";

import { useAppContext } from "../../context/ProductsContext";

export default function MobileSliderGallery() {
  const context = useAppContext();

  let thisProduct = {};
  if (!!context.store.products && !!context.store.activeProduct)
    thisProduct = context.store.products.filter(
      (item) => item.friendlyUrl === context.store.activeProduct
    );

  let assets = [];
  if (!!context.store.products) {
    assets = thisProduct[0].img;
  }

  const [viewer, setViewer] = useState(0);

  const handleSlide = (direction) => {
    if (direction === "left") {
      viewer === 0 ? setViewer(assets.length - 1) : setViewer(viewer - 1);
    } else if (direction === "right") {
      viewer === assets.length - 1 ? setViewer(0) : setViewer(viewer + 1);
    }
  };

  const MobileGallery = styled.div`
    overflow: hidden;
    top: 0;
    left: 0;
    max-width: 100%;
    height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    @media (min-width: 992px) {
      display: none;
    }

    .mobile-gallery-filter {
      background: linear-gradient(180deg, #3d1db10f 60%, #3d1db1cf 100%);
    }
    .mobile-slider-gallery img {
      min-height: 100%;
      max-width: 100vw;
    }

    .mobile-slider-gallery .slide-icon {
      height: 64px;
      width: 64px;
    }

    .mobile-gallery-filter,
    .navigator-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .slide-icon.right {
      animation: floatingRight 3s infinite;
      margin-right: 8px;
    }
    .slide-icon.left {
      animation: floatingLeft 3s infinite;
      margin-left: 8px;
    }

    @keyframes floatingLeft {
      0% {
        transform: translate(-0px) rotate(90deg);
      }
      33% {
        transform: translate(8px) rotate(90deg);
      }
      67% {
        transform: translate(-8px) rotate(90deg);
      }
      100% {
        transform: translate(-0px) rotate(90deg);
      }
    }
    @keyframes floatingRight {
      0% {
        transform: translate(-0px) rotate(-90deg);
      }
      33% {
        transform: translate(-8px) rotate(-90deg);
      }
      67% {
        transform: translate(8px) rotate(-90deg);
      }
      100% {
        transform: translate(-0px) rotate(-90deg);
      }
    }

    .product-description-section {
      @media (max-width: 767px) {
      }
    }

    .product-mobile-cta {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: white;
      padding: 0px 16px 16px;
    }

    .product-mobile-cta h4 {
      font-size: 21px;
    }
    .product-mobile-cta .pricing-section {
      padding: 4px 12px;
    }
    .product-mobile-cta .pricing-section .price {
      font-size: 32px;
      font-weight: 700;
    }
  `;

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (context.store.cart.filter((i) => i === thisProduct.id).length < 1) {
      context.dispatch({
        type: types.addToCart,
        payload: thisProduct.id,
      });
      !localStorage.getItem("cart")
        ? localStorage.setItem("cart", JSON.stringify([thisProduct.id]))
        : localStorage.setItem(
            "cart",
            JSON.stringify([
              ...JSON.parse(localStorage.getItem("cart")),
              thisProduct.id,
            ])
          );
    }
  };
  return (
    <MobileGallery className="mobile-slider-gallery">
      <Image
        src={assets[viewer]}
        alt="power bra"
        className="product-big-photo"
        width={848}
        height={1600}
        objectFit="none"
      />
      <div className="mobile-gallery-filter"></div>
      <div className="navigator-slide p-d-flex p-jc-between p-ai-center">
        <div className="">
          <Image
            src={chevron}
            onClick={() => {
              handleSlide("left");
            }}
            alt=""
            className="slide-icon left"
            width={48}
            height={48}
          />
        </div>
        <div className="">
          <Image
            src={chevron}
            onClick={() => {
              handleSlide("right");
            }}
            alt=""
            className="slide-icon right"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="product-mobile-cta">
        <h4 className="col-12">{thisProduct[0].name}</h4>
        <div className="pricing-section col-12 p-d-flex p-jc-between p-ai-center">
          <span className="price">${thisProduct[0].price}</span>
          <span>{thisProduct[0].stock} en stock</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="btn btn-cta col-6 offset-3 p-py-3"
        >
          Comprar
        </button>
      </div>
    </MobileGallery>
  );
}

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useAppContext } from "../../context/ProductsContext";
import { v4 as uuid } from "uuid";
export default function Gallery() {
  const context = useAppContext();

  let thisProduct = {};
  if (!!context.store.products)
    thisProduct = context.store.products.filter(
      (item) => item.friendlyUrl === context.store.activeProduct
    );

  /**Assets
   * Recomended qty assets ) 1 or 3 or 6 in array
   */

  const ProductGallery = styled.div`
    .gallery-item-container {
      display: none;
    }
    @media (min-width: 768px) {
      .gallery-item-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        max-height: 600px;
        margin-bottom: 16px;
      }
    }

    .gallery-item-container img {
      max-width: 100%;
    }

    .product-gallery-section {
      display: none;
      @media (min-width: 992px) {
        display: block;
        min-height: calc(100vh - 56px);
        overflow: scroll;
      }
    }
    .product-gallery-section::-webkit-scrollbar {
      @media (min-width: 768px) {
        display: none;
      }
    }
    .gallery-item-container {
      padding: 0px 4px;
      margin-bottom: 2px;
      height: auto;
    }

    .gallery-item-container:nth-of-type(1) {
      width: 100%;
    }
    .gallery-item-container:nth-of-type(2),
    .gallery-item-container:nth-of-type(3) {
      width: 50%;
    }
    .gallery-item-container:nth-of-type(4),
    .gallery-item-container:nth-of-type(5),
    .gallery-item-container:nth-of-type(6) {
      width: 33.3333333333%;
    }
  `;

  const [screenWidth, setScreenWidth] = useState("");
  useEffect(() => {
    if (window.innerWidth < 768) {
      setScreenWidth("mobile");
    } else {
      setScreenWidth("desk");
    }
  }, []);
  return (
    <>
      {screenWidth === "desk" ? (
        <ProductGallery className="product-gallery-section  p-col-12 p-lg-8">
          <div className="p-d-flex p-flex-wrap">
            {thisProduct.length !== 0 &&
              thisProduct[0].img.map((productImage) => (
                <div key={uuid()} className="gallery-item-container">
                  <Image
                    objectFit="none"
                    width={1200}
                    height={1900}
                    src={productImage}
                    alt="power store image"
                    className="product-big-photo"
                  />
                </div>
              ))}
          </div>
        </ProductGallery>
      ) : null}
    </>
  );
}

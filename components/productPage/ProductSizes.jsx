import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useAppContext } from "../../context/ProductsContext";

export default function ProductSizes() {
  const context = useAppContext();
  const sizes = context.store.products.filter(
    (i) => i.friendlyUrl === context.store.activeProduct
  )[0].sizes;
  const [size, setSize] = useState("SM");
  const handleSize = (e) => {
    setSize(e.target.innerText);
  };

  const ProductSizesStyled = styled.div`
    margin: 6px 0;
    width: 100%;

    .product-size {
      cursor: pointer;
      background-color: white;
      width: 48px;
      height: 48px;
      border: 1px solid rgb(80, 80, 80);
      margin-right: 12px;
      margin-top: 12px;
      padding: 8px;
    }
    .product-size.active {
      border: 3px solid #6c63ff;
      background-color: #6b63ff49;
    }
  `;
  return (
    <ProductSizesStyled className="product-sizes p-col-12 p-d-flex p-flex-wrap">
      {sizes.map((productSize) => (
        <span
          onClick={handleSize}
          key={uuid()}
          className={`product-size 
          ${size === productSize.toUpperCase() ? "active" : ""}
          p-d-flex p-jc-center p-ai-center`}
        >
          {productSize.toUpperCase()}
        </span>
      ))}
    </ProductSizesStyled>
  );
}

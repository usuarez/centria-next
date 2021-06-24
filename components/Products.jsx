import React from "react";
import styled from "styled-components";
import ProductBox from "./ProductBox";
import { useAppContext } from "../context/ProductsContext";
import { v4 as uuid } from "uuid";

export default function Products() {
  const context = useAppContext();

  let productsThumbs = [];
  !!context.store.products === true &&
    context.store.products.forEach((el) => {
      let data = {
        id: el.id,
        background: el.background || "",
        asset: el.img[0],
        title: el.name,
        price: el.price,
        height: 440,
        friendlyUrl: el.friendlyUrl,
      };
      productsThumbs.push(data);
    });

  const Button = styled.button`
    border: none;
    padding: 12px 32px;
    background-color: rgb(24, 118, 206);
    color: #fff;
    font-size: 16px;
  `;
  return (
    <section className="p-col-12 products-front-section">
      <h3 className="text-center p-col-10 p-offset-1 front-section-title">
        Productos Disponibles
      </h3>
      <div className="p-col-12 p-d-flex p-flex-wrap p-jc-center p-ai-xs-center p-jc-md-center p-flex-row">
        {productsThumbs.map((item) => (
          <ProductBox key={uuid()} data={item} />
        ))}
      </div>
      <div className="row ">
        <div className="col-12 p-d-flex p-jc-center p-mb-5">
          <Button className="p-btn btn-cta col-10 col-lg-6 col-xl-4">
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  );
}

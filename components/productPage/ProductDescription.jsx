import styled from "styled-components";
import Accordion from "../Accordion";
import ProductSizes from "./ProductSizes";
import { useAppContext } from "../../context/ProductsContext";
import { v4 as uuid } from "uuid";
import { types } from "../../context/types";

export default function ProductDescription() {
  const context = useAppContext();
  let thisProduct = {};
  if (!!context.store.products && !!context.store.activeProduct)
    thisProduct = context.store.products.filter(
      (item) => item.friendlyUrl === context.store.activeProduct
    )[0];

  const Button = styled.button`
    padding: 16px 24px;
    background-color: #6c63ff;
    border: none;
    font-size: 16px;
    color: #fff;
  `;

  const Price = styled.span`
    font-weight: 700;
    font-size: 32px;
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
    <div className="product-description-section p-col-12 p-sm-10 p-sm-offset-1 p-lg-4 p-lg-offset-0">
      <div className="row flex-column align-content-start">
        <h4 className="col-12 text-center">{thisProduct.name}</h4>
        <ProductSizes />
        <div className="pricing-section p-col-12 p-d-flex p-jc-between p-ai-center">
          <Price className="price">${thisProduct.price}</Price>
          <span>{thisProduct.stock} en stock</span>
        </div>
        <Button onClick={handleAddToCart} className="p-col-12">
          Comprar
        </Button>
        <div className="product-data p-col-12">
          {thisProduct.description.map((acc) => (
            <Accordion data={acc} key={uuid()} />
          ))}
        </div>
      </div>
    </div>
  );
}

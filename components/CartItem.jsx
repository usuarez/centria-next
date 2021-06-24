import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import Image from "next/image";
import deleteIcon from "../public/img/icons/delete.svg";
import styled from "styled-components";
import { useAppContext } from "../context/ProductsContext";
import { types } from "../context/types";

function CartItem({ data }) {
  const context = useAppContext();
  const [qty, setqty] = useState(1);

  const handleAddValue = (e) => {
    e.preventDefault();
    setqty(Number(qty + 1));

    context.dispatch({
      type: types.setItemTotal,
      payload: { id: data.id, qty: qty, price: data.price },
    });
  };
  const handleDecValue = (e) => {
    e.preventDefault();
    setqty(Number(qty - 1));

    context.dispatch({
      type: types.setItemTotal,
      payload: { id: data.id, qty: qty, price: data.price },
    });
  };

  const handleManualChange = (e) => {
    setqty(Number(e.target.value));
  };

  const CartItem = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 32px;

    .thumb {
      background-color: #6d32cc;
      border-radius: 24px;
      border: 3px solid #6d32cc;
      overflow: hidden;
      height: 120px;
    }

    .item-total span {
      font-weight: 700;
      font-size: 28px;
    }
    #horizontal {
      width: 56px !important;
    }
  `;

  return (
    <CartItem className="cart-item p-col-12 p-d-flex p-flex-wrap p-flex-md-nowrap p-ai-center p-jc-start">
      <div className="thumb">
        <Image src={data.img[0]} objectFit="cover" width={80} height={120} />
      </div>
      <div className="texts p-d-flex p-flex-column p-jc-center p-col-6 p-sm-4">
        <h4 className="p-my-1">{data.name}</h4>
      </div>
      <div className="p-my-0 p-col-5 p-sm-3 p-lg-2 p-d-flex">
        <button
          className="btn p-px-3"
          data-action="dec"
          onClick={handleDecValue}
        >
          -
        </button>
        <input
          type="number"
          value={qty}
          style={{ width: "48px" }}
          min={1}
          max={data.stock}
          onChange={handleManualChange}
        />
        <button
          className="btn p-px-3"
          data-action="inc"
          onClick={handleAddValue}
        >
          +
        </button>
      </div>
      <div className="item-total p-col-3 p-offset-2 p-lg-offset-1">
        <span>${data.price}</span>
      </div>
      <div className="delete">
        <Image src={deleteIcon} objectFit="contain" width={32} height={32} />
      </div>
    </CartItem>
  );
}

export default CartItem;

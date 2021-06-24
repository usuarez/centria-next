import React from "react";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import PayForm from "../components/PayForm";
import { useAppContext } from "../context/ProductsContext";
import { v4 as uuid } from "uuid";
import { types } from "../context/types";

function cart() {
  const context = useAppContext();

  return (
    <Layout>
      <div className="">
        <div className="p-col-12 p-d-flex p-flex-wrap">
          <div className="p-col-12 p-px-4 p-pt-5">
            <h3 className="p-mb-2 p-mt-0" style={{}}>
              Carrito de compras
            </h3>
            <span style={{}}>
              Tienes {context.store.cart.length} elementos en tu carrito
            </span>
          </div>
          <div className="p-sm-12 p-xl-8">
            <div className="item-list p-col-12">
              {context.store.cart.map((i) => (
                <CartItem
                  key={uuid()}
                  data={context.store.products.filter((el) => el.id === i)[0]}
                />
              ))}
            </div>
          </div>
          <div className="p-sm-12 p-xl-4">
            <PayForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default cart;

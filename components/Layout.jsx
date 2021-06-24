import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useAppContext } from "../context/ProductsContext";
import { products } from "../data/products";
import { types } from "../context/types";

export default function Layout({ children }) {
  //screen
  const [screenWidth, setScreenWidth] = useState("");
  //onload
  useEffect(() => {
    if (window.innerWidth < 768) {
      setScreenWidth("mobile");
    } else {
      setScreenWidth("desk");
    }
  }, []);
  //load context
  const context = useAppContext();
  //load data
  useEffect(() => {
    !context.store?.products &&
      context.dispatch({
        type: types.loadProducts,
        payload: products,
      });
  }, []);

  return (
    <>
      <main
        className="main-layout"
        style={{
          background: `#eaeaf1`,
          overflow: "hidden",
        }}
      >
        <Menu />
        {children}
        <Footer />
        {screenWidth === "mobile" ? <div className="p-py-5"></div> : null}
      </main>
    </>
  );
}

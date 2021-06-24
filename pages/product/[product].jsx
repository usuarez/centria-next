import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import MobileSliderGallery from "../../components/productPage/MobileSliderGallery";
import Gallery from "../../components/productPage/Gallery";
import ProductDescription from "../../components/productPage/ProductDescription";
import { useAppContext } from "../../context/ProductsContext";
import { types } from "../../context/types";

function Product() {
  const router = useRouter();
  const { product } = router.query;
  const context = useAppContext();
  useEffect(() => {
    context.dispatch({
      type: types.setActiveProduct,
      payload: product,
    });
  }, []);
  return (
    <Layout>
      {!!context.store.activeProduct && (
        <>
          <MobileSliderGallery />
          <div className="p-d-flex">
            <Gallery />
            <ProductDescription />
          </div>
        </>
      )}
    </Layout>
  );
}

export default Product;

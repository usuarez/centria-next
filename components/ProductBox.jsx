import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function ProductBox({ data }) {
  //usage
  /**Background
   * if u' want to use a full cover img for the box then don't include the asset property,
   * instead include only the background as css url value. For example:
   * {background: `url(${cwp}) 0 / cover`}
   *
   * But if u' have a png asset you should use a color in your background and include the asset,
   * for example:
   * {
   * background: `#3c75f0`,
   * asset: 'the asset link'
   * }
   * *Title
   * try to use a max of 58chars for titles
   * Recomended char number = 28
   *
   * *Description
   * try to use a max of 86 chars for desc
   * Recomended char number = 45
   const data = {
     id: "uuidhash",
     asset: cwp,
     background: "#3c75f0",
     title: "Proteina + BCAA",
     description: "Proteina con Sabor a chocolate 1kg sin azucar",
     price: "45",
     offerPrice: "40",
     height: 400,
    };
    */

  const ProductBox = styled.div`
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 0px 15px 4px rgba(80, 80, 80, 0.2);
    margin-bottom: 32px;

    .product-asset {
      position: relative;
      height: 70%;
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      border-radius: 20px 20px 0 0;
    }

    .product-texts {
      height: 30%;
      padding: 12px 16px 16px;
      text-decoration: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .product-texts h4 {
      font-size: 18px;
      margin-bottom: 4px;
    }
    .product-texts p {
      font-size: 14px;
      text-align: left;
    }
    .product-texts span {
      padding-top: 4px;
      font-size: 18px;
      font-weight: 700;
    }

    .product-texts span .original-price {
      text-decoration: line-through;
      padding-right: 12px;
      color: #2e2e2e;
      font-weight: 400;
    }

    .products-front-section {
      padding-bottom: 40px;
    }
  `;
  return (
    <ProductBox
      className="p-xs-12 p-md-5 p-xl-3 p-pb-3 p-mx-2 p-nogutter"
      style={{
        height: `${data.height}px`,
      }}
    >
      <Link href={`/product/${data.friendlyUrl}`} className="product-link-tag ">
        <a>
          <div
            className="product-asset"
            style={{ background: `${data.background}` }}
          >
            {data.asset !== "" && (
              <Image
                className="product-image"
                src={data.asset}
                width={320}
                height={320}
                objectFit="cover"
              />
            )}
          </div>
          <div className="product-texts">
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <span>
              {!!data.offerPrice === false ? (
                <span className="offer-price">${data.price}</span>
              ) : (
                <>
                  <span className="original-price">${data.price}</span>
                  <span className="offer-price">${data.offerPrice}</span>
                </>
              )}
            </span>
          </div>
        </a>
      </Link>
    </ProductBox>
  );
}

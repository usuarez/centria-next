import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "primereact/button";
export default function Banner({ data }) {
  // USAGE
  //USE ONLY PNG ASSETS
  //default-settings: asset-right, med size, rtl
  //Order-options: rtl, ltr, center
  //order example: rtl is text right asset left
  //sizes: small, med, big

  /**Object example:
   * 
   * 
    const mainBanner = {
      asset: 'link' or React img.png,
      title: "Proteina",
      copy: "Como la que tragas siempre, pero mas cara.",
      cta: "Comprar",
      bgcolor: "#3312f9",
      size: "med",
      order: "ltr",
    }
  *
  *

   */
  const { asset, title, copy, cta, bgcolor, size, order } = data;
  // USAGE

  useEffect(() => {
    if (window.innerWidth < 768) {
      if (
        window.scrollY === 0 &&
        !!document.querySelector(".mobile-bottom-menu")
      ) {
        document.querySelector(".mobile-bottom-menu").style.bottom = "-64px";
      }
      window.addEventListener("scroll", (e) => {
        if (
          window.scrollY === 0 &&
          !!document.querySelector(".mobile-bottom-menu")
        ) {
          document.querySelector(".mobile-bottom-menu").style.bottom = "-64px";
        } else if (
          window.scrollY >= 64 &&
          !!document.querySelector(".mobile-bottom-menu")
        ) {
          document.querySelector(".mobile-bottom-menu").style.bottom = "0px";
        }
      });
    }
  }, []);

  const Banner = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100vw;
    height: 100vh;
    @media (min-width: 768px) {
      height: ${size === "small"
        ? "300px"
        : size === "med"
        ? "480px"
        : "100vh"};
    }
    padding: 0px;
    * {
      box-sizing: border-box;
    }
    .banner--background,
    .banner--background::after,
    .banner--texts {
      padding: 0px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    //sizes: small, med, big
    //setting height default
    .banner--background,
    .banner--background div,
    .banner--background::after,
    .banner--texts,
    .banner--texts div,
    .med,
    .med .banner--background,
    .med .banner--background div,
    .banner--background::after,
    .med .banner--texts,
    .med .banner--texts div {
      height: 100vh;

      @media (min-width: 768px) {
        height: 480px;
      }
    }

    /*
///////////////////////////////////////////////////////////////
//Background Asset styling
///////////////////////////////////////////////////////////////
*/
    //add filter in mobile
    .banner--background::after {
      @media (max-width: 768px) {
        content: "";
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 30%,
          rgba(20, 20, 20, 0.71) 80%
        );
      }
    }
    //styling the banner asset & background

    .banner--background img {
      max-height: 80%;
      max-width: 90%;
    }
    /*
///////////////////////////////////////////////////////////////
//Order-options: rtl, ltr, center
///////////////////////////////////////////////////////////////
*/
    .banner--background div {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: 768px) {
        justify-content: flex-end;
      }
    }

    //styling the banner texts
    //by default RTL
    .banner--texts div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: white;
      padding-bottom: 80px;

      @media (min-width: 768px) {
        justify-content: center;
        align-items: flex-start;
        padding-bottom: 0px;
      }
    }

    //RTL
    .banner--background.rtl div {
      @media (min-width: 768px) {
        justify-content: flex-end;
      }
    }
    .banner--texts.rtl div {
      @media (min-width: 768px) {
        justify-content: center;
        align-items: flex-start;
        padding-bottom: 0px;
      }
    }
    //LTR
    .banner--background.ltr div {
      @media (min-width: 768px) {
        justify-content: flex-start;
      }
    }
    .banner--texts.ltr div {
      @media (min-width: 768px) {
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 0px;
      }
    }

    //CENTER
    .banner--background.center div {
      @media (min-width: 768px) {
        justify-content: center;
      }
    }
    .banner--texts.center div {
      @media (min-width: 768px) {
        justify-content: center;
        align-items: center;
        padding-bottom: 0px;
      }
    }

    .banner--texts h1,
    .banner--texts h2,
    .banner--texts h3 {
      font-size: 56px;
      text-transform: uppercase;
      margin: 0px;
    }
    .banner--texts p {
      text-align: center;
      font-size: 16px;
      margin: 0 0 0.5rem;
    }

    .banner--texts button {
      background-color: #d3d61a;
      border: none;
      padding: 8px 24px;
      font-size: 16px;
    }
  `;

  return (
    <Banner className={`store-banner ${size}`}>
      <div
        className={`p-col-12 banner--background ${order}`}
        style={{ background: `${bgcolor}` }}
      >
        <div className="p-sm-12 p-md-10 p-md-offset-1 p-lg-8 p-lg-offset-2 p-xl-6 p-xl-offset-3 p-nogutter">
          <Image
            src={data.asset}
            width={240}
            height={240}
            objectFit="contain"
          />
        </div>
      </div>
      <div className={`banner--texts p-col-12 ${order}`}>
        <div className="p-sm-12 p-md-10 p-md-offset-1 p-lg-8 p-lg-offset-2 p-xl-6 p-xl-offset-3 p-nogutter">
          <div className="align-items-start">
            <h2>{title}</h2>
            <p className="copy">{copy}</p>
            <Button label={cta} className="p-button p-button-raised" />
          </div>
        </div>
      </div>
    </Banner>
  );
}

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
export default function Menu() {
  const MobileMenu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 64px;
    z-index: 10000000;
    transition: 0.4s;

    .nav-item-container {
      position: absolute;
      left: 4px;
      display: flex;
      align-items: center;
    }
    .nav-item {
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      text-decoration: none;
      margin: 0 20px;
    }
    .mobile-bottom-menu .nav-item:first-of-type {
      margin-left: 0px;
    }
    .mobile-bottom-menu .nav-item:last-of-type {
      margin-right: 0px;
    }

    .mobile-bottom-menu .nav-item.active {
      position: relative;
      width: 28px;
      height: 28px;
      margin: 0px 80px 0px 0px;
      background-color: rgba($color: $color-main, $alpha: 1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.4s;

      &::before {
        content: "";
        width: 36px;
        height: 36px;
        background-color: rgba($color: $color-main, $alpha: 0.6);
        border-radius: 50%;
        position: absolute;
        z-index: -100;
        left: -2px;
        box-shadow: 2px 0px 0px 5px rgba($color: $color-main, $alpha: 0.2);
        animation: grow 4s infinite;
      }
    }
    .mobile-icon {
      height: 18px;
      width: 18px;
    }
    .mobile-icon.home {
      background: url("/img/icons/home.svg") 0 / cover;
    }
    .mobile-icon.search {
      background: url("/img/icons/search.svg") 0 / cover;
    }
    .mobile-icon.export {
      background: url("/img/icons/bag.svg") 0 / cover;
    }
    .mobile-icon.profile {
      background: url("/img/icons/user.svg") 0 / cover;
    }

    .nav-item.active .nav-item-container .mobile-icon.home {
      background: url("/img/icons/home-compl.svg") 0 / cover;
    }
    .nav-item.active .nav-item-container .mobile-icon.search {
      background: url("/img/icons/search-compl.svg") 0 / cover;
    }
    .nav-item.active .nav-item-container .mobile-icon.export {
      background: url("/img/icons/bag-compl.svg") 0 / cover;
    }
    .nav-item.active .nav-item-container .mobile-icon.profile {
      background: url("/img/icons/user-compl.svg") 0 / cover;
    }

    .nav-item-container .mobile-description {
      display: none;
    }
    .nav-item.active .nav-item-container .mobile-icon + .mobile-description {
      display: block;
      margin-left: 14px;
      color: $color-shade;
    }

    @keyframes grow {
      0% {
        transform: scale(0.7);
      }
      40% {
        transform: scale(1);
      }
      70% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.7);
      }
    }

    .text-center {
      text-align: center;
    }
  `;
  const DeskMenu = styled.nav`
    margin: 0;
    padding: 16px;
    background-color: rgb(255, 255, 255);
    box-shadow: 3px 0px 15px 3px rgba(63, 63, 63, 0.164);

    .desk-menu .menu-items-box {
      min-width: 400px;
    }
    .desk-menu .menu-items-box a {
      text-decoration: none;
      color: rgb(32, 27, 34);
    }

    .desk-menu--bag {
      height: 18px;
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
      {screenWidth === "mobile" ? (
        <MobileMenu className=" mobile-bottom-menu">
          <div className="nav-item">
            <div className="nav-item-container">
              <Link href="/">
                <a>
                  <div className="mobile-icon home"></div>
                  <span className="type-caption bold mobile-description">
                    Inicio
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div activeClassName="active" className="nav-item">
            <div className="nav-item-container">
              <Link href="/store">
                <a>
                  <div className="mobile-icon search"></div>
                  <span className="type-caption bold mobile-description">
                    Tienda
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div activeClassName="active" className="nav-item">
            <div className="nav-item-container">
              <Link href="/cart">
                <a>
                  <div className="mobile-icon export"></div>
                  <span className="type-caption bold mobile-description">
                    Pedido
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div activeClassName="active" className="nav-item">
            <div className="nav-item-container">
              <Link href="/profile">
                <a>
                  <div className="mobile-icon profile"></div>
                  <span className="type-caption bold mobile-description">
                    Perfil
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </MobileMenu>
      ) : screenWidth === "desk" ? (
        <DeskMenu className="p-col-12 desk-menu p-d-flex p-jc-between">
          <div className="logo-box p-col-2">
            <Link href="/">NEXTCOMMERCE</Link>
          </div>
          <div className="menu-items-box p-col-4 p-d-flex p-jc-around">
            <Link href="/">Home</Link>
            <Link href="/cart">Carrito</Link>
            <Link href="/history">Historial de compras</Link>
          </div>
        </DeskMenu>
      ) : (
        "Algo anda mal"
      )}
    </>
  );
}

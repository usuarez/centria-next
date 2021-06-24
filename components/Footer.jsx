import React from "react";
import styled from "styled-components";
export default function Footer() {
  const Footer = styled.footer`
    background-color: #1f1f1f;
    min-height: 100px;
    color: #fff;
    padding: 32px 16px;
    z-index: 1000;

    a,
    nav a.active {
      color: #3c75f0;
      font-weight: 600;
    }
    nav {
      margin-top: 12px;
    }
    nav a {
      padding: 12px 16px;
      color: #fff;
      font-weight: 400;
    }

    .icon {
      width: 24px;
    }
  `;

  return (
    <Footer className="p-d-flex p-flex-column p-jc-center p-ai-center">
      <p>
        Bootstraped by{" "}
        <a href="https://suarez.netlify.app" target="_blank">
          Ubaldo Suarez
        </a>
      </p>
    </Footer>
  );
}

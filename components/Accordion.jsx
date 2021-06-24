import React, { useEffect, useState } from "react";
import chevronDown from "../public/img/icons/chevron_down_filled.svg";
import checkIcon from "../public/img/icons/check.svg";
import styled from "styled-components";
import Image from "next/image";

export default function Accordion({ data }) {
  const [openAccordion, setOpenAccordion] = useState(false);
  const handleToggleAccordion = () => {
    openAccordion === false ? setOpenAccordion(true) : setOpenAccordion(false);
  };

  //usage
  /*
  const data = {
    title: "Detalles del Producto",
    opened: true,
    sections: [
      {
        type: "p",
        content:
          "PowerBra es el outfit que necesitas, garantiza tu movilidad y comodidad a la hora d hacertu rutina.",
      },
      {
        type: "subtitle",
        content: "Calidad Premium",
      },
      {
        type: "list",
        content: ["Tela de 3mm", "Color Negro Mate", "Hasta 120cm de altura"],
      },
    ],
  };
  */

  useEffect(() => {
    if (data.opened === true) setOpenAccordion(true);
  }, [data.opened]);

  const AccordionBox = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    .accordion {
      position: relative;
      overflow: hidden;
    }
    .accordion-content {
      transition: 1s;
    }
    .accordion.opened {
      animation: openAccordion 0.8s forwards;
    }
    .accordion.hidden {
      animation: hideAccordion 0.8s forwards;
    }
    @keyframes openAccordion {
      0% {
        height: 42px;
      }
      100% {
        height: auto;
      }
    }
    @keyframes hideAccordion {
      0% {
        height: auto;
      }
      100% {
        height: 42px;
      }
    }
    .accordion.opened .accordion-content {
      transform: translateY(0);
    }

    .accordion.hidden .accordion-content {
      transform: translateY(-1000px);
    }
    .accordion .icon {
      transition: 0.6s;
    }
    .accordion.opened .icon {
      transform: rotate(0deg);
    }
    .accordion.hidden .icon {
      transform: rotate(180deg);
    }
    .accordion-switcher {
      display: block;
      position: relative;
      z-index: 1;
      background: #f0f0f0;
      height: 42px;
      padding-top: 8px;
      padding-bottom: 8px;
      border-top: 1px solid rgba($color: #757575, $alpha: 0.51);
      border-bottom: 1px solid rgba($color: #757575, $alpha: 0.51);
    }

    .content-list {
      list-style: none;
      padding-left: 8px;
    }

    .content-list li {
      padding: 8px 0;
    }
    .accordion-content h6 {
      margin: 16px auto 8px;
    }
    .accordion-content p {
      line-height: 1.5rem;
      margin-top: 8px;
    }
    .content-list-icon {
      height: 18px;
      padding-right: 8px;
    }

    .icon {
      transition: 0.4s;
    }
  `;
  return (
    <AccordionBox className="accordion-box">
      <div className={`accordion ${openAccordion ? "opended" : "hidden"}`}>
        <div
          onClick={handleToggleAccordion}
          className="accordion-switcher p-d-flex p-jc-between p-ai-center"
        >
          <h6 className="p-px-3">{data.title}</h6>
          <div className="icon p-px-3">
            <Image
              src={chevronDown}
              width={28}
              height={28}
              alt="chevron icon"
            />
          </div>
        </div>
        <div className="accordion-content">
          {data.sections.map((section) => (
            <>
              {section.type === "p" && (
                <p className="text-left">{section.content}</p>
              )}
              {section.type === "subtitle" && (
                <h6 className="text-left">{section.content}</h6>
              )}
              {section.type === "list" && (
                <ul className="content-list">
                  {section.content.map((item) => (
                    <li className=" p-d-flex p-ai-center">
                      <Image
                        src={checkIcon}
                        width={28}
                        height={28}
                        className="content-list-icon"
                        alt="check-icon"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </div>
      </div>
    </AccordionBox>
  );
}

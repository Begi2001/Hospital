import React from "react";
import { useTranslation } from "react-i18next";

import "./footer2.scss";
import SvgMedArt from "../../../assets/icons/Logo.svg";

import SvgIn from "../../../assets/icons/linkedin.svg";
import Svgfacebook from "../../../assets/icons/facebook.svg";
import SvgInsta from "../../../assets/icons/instagram.svg";
import Container from "../Container/Container";

const Footer2 = () => {
  const { t } = useTranslation();

  const selectFooter = [
    { id: 1, title: `${t("appoinment")}` },
    { id: 2, title: `${t("doctors")}` },
    { id: 3, title: `${t("services")}` },
    { id: 4, title: `${t("aboutUs")}` },
  ];

  const informationFooter = [
    {
      id: 1,
      title: `${t("call")}:`,
      url: "+998 97 234 34 07",
      type: "tel:+998972343407",
    },
    {
      id: 2,
      title: `${t("email")}:`,
      url: "nomonovvv7@gmail.com",
      type: "mailto:nomonovvv7@gmail.com",
    },
    { id: 3, title: `${t("addres")}:`, url: "0123 Some place Some country" },
  ];

  const soacialMedia = [
    { id: 1, img: SvgIn, url: "https://ru.linkedin.com" },
    { id: 2, img: Svgfacebook, url: " https://www.facebook.com" },
    { id: 3, img: SvgInsta, url: "https://www.instagram.com" },
  ];

  return (
    <Container>
      <div className="MainMedDiv">
        <div className="bigBox">
          <div className="Box1">
            <img src={SvgMedArt} className="logoMedArt" />
            <p className="titleMedArt">{t("footertext")}</p>
          </div>

          <div className="Box2">
            <p className="importantTitle">{t("importantPage")}</p>

            <ul className="titleUl">
              {selectFooter.map((type) => (
                <li key={type.id} className="selectMed">
                  {type.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="Box3">
            <p className="contactTitle">{t("contacts")}</p>

            {informationFooter.map((type) => (
              <p key={type.id} className="infoMed">
                {type.title}{" "}
                <a className="typeUrl" href={type.type}>
                  {type.url}
                </a>
              </p>
            ))}
          </div>

          <div className="topFooter">
            <p className="titleBy">
              © 2021 Hospital’s name All Rights Reserved by IT_LEAD Developers
              Company
            </p>

            <div className="linksMed">
              {soacialMedia.map((type) => (
                <a href={type.url} target="_blank" className="icon__wrapper">
                  <img src={type.img} alt="" className="LinkDiv" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer2;

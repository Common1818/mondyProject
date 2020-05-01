import React, { useContext } from "react";
import "./css/Footer.css";
import EditFooterAddress from "../EDIT/editFooter/editFooterAddress";
import EditFooterNumber from "../EDIT/editFooter/editFooterNumber";
import EditFooterAbout from "../EDIT/editFooter/editFooterAbout";
import { FooterContext } from "../../contexts/footerContext";
import FooterIcons from "./footerComponents/footerIcons";
import FooterLeft from "./footerComponents/footerLeft";
import { AuthContext } from "../../contexts/authContext";

const Footer = () => {
  const { content } = useContext(FooterContext);
  const { isAdmin } = useContext(AuthContext);
  const data = content.content;

  return (
    <footer className="footer-distributed">
      <FooterLeft />
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>{data && data[1].firstLine}</span>
            {data && data[1].secondLine}
          </p>
          {isAdmin ? <EditFooterAddress /> : null}
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>{data && data[2].Phone}</p>

          {isAdmin ? <EditFooterNumber /> : null}
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:marketingacad.help@gmail.com">
              MarketingAcad.help@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span style={{ color: "#F2545B" }}>About Marketing Acad</span>
          {data && data[0].about}
        </p>
        {isAdmin ? <EditFooterAbout /> : null}

        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;

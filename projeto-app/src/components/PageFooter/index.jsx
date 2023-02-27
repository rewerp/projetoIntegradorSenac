import React from "react";

import './styles.css';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Youtube from '../../assets/youtube.png';

export function PageFooter() {
  return (
    <div className="footer">
      <div className="infoContainer">
        <div className="info">
          <div>
            <text className="logoSensei">Sensei</text>
            <text className="logoDev">Dev</text>
          </div>
          <text>©2022 - SenseiDev.</text>
          <text>Todos os direitos reservados.</text>
        </div>
      </div>
      <div className="iconsContainer">
        <img src={Instagram} />
        <img src={Facebook} />
        <img src={Youtube} />
      </div>
    </div>
  );
}
import React, { useState, Component } from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import {Link} from 'gatsby';
import tools from "../../images/tools-solid.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickStyle.css";
import SimpleSlider from "react-slick";
import styles from "./brokerages.module.css";

import tda from "../../images/tda-logo.png";
import ibkr from "../../images/ibkr-logo.png";
import tradier from "../../images/tradier-logo.png";
import alpaca from "../../images/alpaca-logo.png";
import questrade from "../../images/questrade-logo.png";
import zerodha from "../../images/zerodha-logo.png";
import unocoin from "../../images/unocoin-logo.png";
import wealthica from "../../images/wealthica-logo.png";
import kraken from "../../images/kraken-logo.png";
import bitbuy from "../../images/bitbuy-logo.png";
import construction from "../../images/construction.png";

import leafs from "../../images/leafs2.svg";

export default class Brokerages extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      swipeToSlide: true,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }; 
    return (
      <section className={styles.brokerages}>
        <Container>
          <h2 className={styles.H2}>Connect to a wide variety of Brokerages</h2>
          <p className={styles.P1}>
            Connect your accounts from any of these partner platforms to start using 
            Passiv today. Don't worry; if your platform isn't listed below, you can 
            join the mailing list for notification when it's available. We are constantly 
            working on adding more. 
          </p>
        </Container>
        <SimpleSlider {...settings}>
          <div>
            <a href="https://questrade.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={questrade} alt="Questrade Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://www.interactivebrokers.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.tile}>
                <img src={ibkr} alt="Interactive Brokers Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://tradier.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={tradier} alt="Tradier Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://alpaca.markets" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={alpaca} alt="Alpaca Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://www.tdameritrade.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={tda} alt="TD Ameritrade Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://zerodha.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={zerodha} alt="Zerodha Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://wealthica.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={wealthica} alt="Wealthica Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://unocoin.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={unocoin} alt="Unocoin Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://kraken.com/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={kraken} alt="Kraken Logo" />
              </div>
            </a>
          </div>
          <div>
            <a href="https://bitbuy.ca/" target="_blank" rel="noopener noreferrer">
              <div className={styles.tile}>
                <img src={bitbuy} alt="Bitbuy Logo" />
              </div>
            </a>
          </div>
        </SimpleSlider>
      </section>
    );
  }
}


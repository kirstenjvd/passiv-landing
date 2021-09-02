import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import {Link} from 'gatsby'

import styles from "./features.module.css";
import robot from "../../images/passiv-robot.png";
import easyGraphic from "../../images/easy-graphic.png";
import leafTrack from "../../images/leaf-track.png";
import leafs from "../../images/leafs2.svg";

function Features({}) {
  return (
    <section className={styles.features}>
      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <img alt="" role="presentation" src={easyGraphic}/>
          </div>
          <div className={styles.copy}>
            <h2 className={styles.H2}>Save time and make investing easy</h2>
            <p className={styles.P1}>Investing can be hard enough without all the time that it takes to do it. 
            Passiv leaves you with more time to research so you can further your investments.</p>
            <ul>
              <li><p className={styles.P1}>One-click trades make rebalancing across multiple accounts easy.</p></li>
              <li><p className={styles.P1}>Free up time and mental space with automative investing that lets you know when 
              you need to sell or trade.</p></li>
              <li><p className={styles.P1}>Build a model portfolio once, and Passiv takes care of the rest, following your 
              established plan and reducing the brain work of daily investing.</p></li>
            </ul>
          </div>
        </div>
        <div className={styles.contentContainer}> 
          <div className={styles.copy}>
            <h2 className={styles.H2}>Track your progress with detailed reporting</h2>
            <p className={styles.P1}>Keeping track of everything is tricky, but the big picture never seems too big with our 
            performance metrics.</p>
            <ul>
              <li><p className={styles.P1}>Get above and beyond insights with reporting on dividends and other metrics that your 
              brokerage does not provide.</p></li>
              <li><p className={styles.P1}>Keep track of your profit vs loss over any period so you can adapt your trading to 
              optimize your earnings.</p></li>
              <li><p className={styles.P1}>A quick look offers you an overview of everything you need to know with a clean and 
              simple dashboard.</p></li>
            </ul>
          </div>
          <div className={styles.imgContainer}>
            <img alt="" role="presentation" src={leafTrack}/>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link to="/features" className={styles.btn1}>See all features</Link>
        </div>
      </Container>
    </section>
  );
}

export default Features;

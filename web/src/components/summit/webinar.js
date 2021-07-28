import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import {Link} from 'gatsby'

import styles from "./webinar.module.css";

import webinarImg from "../../images/new-dashboard-image.png";
import leafs from "../../images/leafs.svg";
import icon1 from "../../images/calendar.svg";
import icon2 from "../../images/alarm-clock.svg";
import icon3 from "../../images/laptop.svg";
import icon4 from "../../images/speedometer.svg";

function Webinar({}) {
  return (
    <section className={styles.webinar}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.imgContainer}>
            <img src={webinarImg} alt="Webinar Image" role="presentation"/>
          </div>
          <div className={styles.copyContainer}>
            <h2 className={styles.H2}>The Webinar</h2>
            <p className={styles.P1}>
              Join to learn how Passiv can help make your investing easier. 
              We'll show you how to set up and get the most out of our features.
            </p>
            <div className={styles.iconGrid}>
              <div className={styles.iconCard}>
                <img src={icon1} alt="icon" role="presentation"/>
                <div className={styles.text}>
                  <h3 className={styles.H3}>Date:</h3>
                  <p className={styles.P1}>October 15th</p>
                </div>
              </div>
              <div className={styles.iconCard}>
                <img src={icon2} alt="icon" role="presentation"/>
                <div className={styles.text}>
                  <h3 className={styles.H3}>Duration:</h3>
                  <p className={styles.P1}>45min</p>
                </div>
              </div>
              <div className={styles.iconCard}>
                <img src={icon3} alt="icon" role="presentation"/>
                <div className={styles.text}>
                  <h3 className={styles.H3}>Format:</h3>
                  <p className={styles.P1}>Zoom</p>
                </div>
              </div>
              <div className={styles.iconCard}>
                <img src={icon4} alt="icon" role="presentation"/>
                <div className={styles.text}>
                  <h3 className={styles.H3}>Difficulty:</h3>
                  <p className={styles.P1}>Passiv Beginner</p>
                </div>
              </div>
            </div>
            <Link to="../" className={styles.btn1}>Get a free Webinar</Link>
          </div>
        </div>
      </Container>
      <div className={styles.outerContainer}>
        <img src={leafs} alt="" role="presentation"/>
      </div>
    </section>
  );
}

export default Webinar;

import React, { useState, useEffect } from 'react'
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import {Link} from 'gatsby'
import { cn, generateTrackingPath, getAppBase } from '../../lib/helpers';

import styles from "./transform.module.css";
import icon1 from "../../images/target-sm.svg";
import icon2 from "../../images/automate-sm.svg";
import icon3 from "../../images/mailNotification.svg";


function Transform({}) {

const [registerPath, setRegisterPath] = useState('/register/');
  const appBase = getAppBase();

    useEffect(() => {
    setRegisterPath(generateTrackingPath('/register/'));
  }, []);

  return (
    <section className={styles.transform}>
      <Container>
        <h2 className={styles.H2}>How Passiv can transform your investing</h2>
        <p className={styles.P1}>
          Investing can be so rewarding, but also time consuming and stressful. Passiv 
          is here to save you time and make investing easy.
        </p> 
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={icon1} alt="Target Allocation" />
            </div>
            <h3>Maintain Your Portfolio’s Target Allocaton</h3>
            <p className={styles.P2}>Build your portfolio and maintain your target allocation. 
            Use Passiv's "buy-only" setting to identify the underweight assets in your portfolio.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={icon2} alt="Target Allocation" />
            </div>
            <h3>Automate Your Investments</h3>
            <p className={styles.P2}>Save time by letting Passiv calculate & execute the trades 
            needed to keep your portfolio balanced.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={icon3} alt="Target Allocation" />
            </div>
            <h3>Never Miss a Thing With Smart Alerts</h3>
            <p className={styles.P2}>Get notified whenever new cash & dividend payments come in or whenever your portfolio 
            drifts out of alignment.
            </p>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <a className={styles.btn1} href={`https://${appBase}${registerPath}`}>Sign Up for Passiv</a>
        </div>
      </Container>
    </section>
  );
}

export default Transform;

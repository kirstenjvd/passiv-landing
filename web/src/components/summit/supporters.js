import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import {Link} from 'gatsby'

import styles from "./supporters.module.css";
import benzinga from "../../images/benzinga.png";
import moneySense from "../../images/moneySense.png";
import ratehub from "../../images/ratehub.png";
import techdaily from "../../images/techdaily.png";


function Supporters({}) {
  return (
    <section className={styles.supporters}>
      <Container>
        <h2 className={styles.H2}>As seen in</h2>
        <p className={styles.P1}>There is a reason some of the top 
        financial blogs are raving about Passiv. Read what the experts have to say.</p>
        <div className={styles.imgGrid}>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={moneySense}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={ratehub}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={benzinga}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={techdaily}/>
          </div>
        </div> 
      </Container>
    </section>
  );
}

export default Supporters;

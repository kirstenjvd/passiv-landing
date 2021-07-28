import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import {Link} from 'gatsby'

import styles from "./supporters.module.css";
import benzinga from "../../images/benzinga.png";
import buildWealth from "../../images/buildWealth.png";
import canFin from "../../images/canFin.png";
import eFIC from "../../images/eFIC.png";
import jMoorhouse from "../../images/jMoorhouse.png";
import mapleMoney from "../../images/mapleMoney.png";
import milRev from "../../images/milRev.png";
import moneySense from "../../images/moneySense.png";
import mSAG from "../../images/mSAG.png";
import ratehub from "../../images/ratehub.png";
import ratRem from "../../images/ratRem.png";
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
            <img alt="" role="presentation" src={mapleMoney}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={moneySense}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={canFin}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={benzinga}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={techdaily}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={mSAG}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={ratehub}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={milRev}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={eFIC}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={buildWealth}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={ratRem}/>
          </div>
          <div className={styles.imgItem}>
            <img alt="" role="presentation" src={jMoorhouse}/>
          </div>
        </div> 
      
      </Container>
    </section>
  );
}

export default Supporters;

import React, { useState } from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import {Link} from 'gatsby'
import AliceCarousel from 'react-alice-carousel'
import "./summitCarousel.css";

import styles from "./brokerages.module.css";
import tools from "../../images/tools-solid.svg";


const items = [
  <div className={styles.post} data-value="1">
    <img src={tools} alt="Target Allocation" />
    <h3 className={styles.H3}>Questtrade</h3>
  </div>,
  <div className={styles.post} data-value="2">
    <img src={tools} alt="Target Allocation" />
    <h3 className={styles.H3}>Questtrade</h3>
  </div>,
  <div className={styles.post} data-value="3">
    <img src={tools} alt="Target Allocation" />
    <h3 className={styles.H3}>Questtrade</h3>
  </div>,
  <div className={styles.post} data-value="4">
    <img src={tools} alt="Target Allocation" />
    <h3 className={styles.H3}>Questtrade</h3>
  </div>,
  <div className={styles.post} data-value="5">
    <img src={tools} alt="Target Allocation" />
    <h3 className={styles.H3}>Questtrade</h3>
  </div>,
];


function Brokerages({}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1440: { items: 4 },
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
        <div className={styles.aliceCarousel}>
          <AliceCarousel
            className={styles.posts}
            mouseTracking
            disableAutoPlayOnAction={true}
            autoPlay={false}
            autoWidth={false}
            disableDotsControls={true}
            keyboardNavigation={true}
            responsive={responsive}
            paddingRight={50}
            controlsStrategy="alternate"
            items={items} />
        </div>
      </Container>
    </section>
  );
}

export default Brokerages;

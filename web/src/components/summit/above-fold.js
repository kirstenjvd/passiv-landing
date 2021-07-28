import React, { useState, useEffect } from "react";
import { buildImageObj, cn } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import { getReferralCode, getTrackingCode, getAppBase, getAPIBase } from "../../lib/helpers";
import axios from "axios";
import styles from "./above-fold.module.css";

import robot from "../../images/passiv-robot.png";

function AboveFold({}) {
  const referralCode = getReferralCode();
  const trackingCode = getTrackingCode();

  const apiBase = getAPIBase();
  const appBase = getAppBase();

  const [signups, setSignups] = useState(null);

  return (
    <section className={styles.aboveFold}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.ctaContainer}>
            <h1>Passiv is proud to host this year's financial summit.</h1>
            <p className={cn(styles.blurb, styles.P1)}>
              We want to thank you for attending by offering a free Passiv 
              investing webinar + QA session. Grab your spot today!
            </p>
            <div className={cn(styles.emailSignup, styles.inputContainer)}>
              <div className={cn(styles.emailContainer, styles.formContainer)}>
                <form className={styles.register} method="get" noValidate action={`https://${appBase}/register/`}>
                  <label>
                    <span>Enter your Email</span>
                  </label>
                  <input type="hidden" name="type" />
                  <input
                    type="email"
                    required
                    max_length="512"
                    className={styles.registerEmail}
                    name="email"
                  />
                  <input
                    className={cn(styles.btn1, styles.registerBtn, styles.clickping)}
                    type="submit"
                    value={`Redeem Offer`}
                  />
                  {referralCode !== null && <input type="hidden" name="ref" value={referralCode} />}
                  {trackingCode !== null && <input type="hidden" name="uid" value={trackingCode} />}
                  <p className={styles.socialProof}>
                  {signups && `Join ${new Intl.NumberFormat().format(signups)} new Passiv users this month!`}
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src={robot} alt="" role="presentation" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboveFold;

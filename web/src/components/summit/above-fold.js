import React, { useState, useEffect } from "react";
import { buildImageObj, cn } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";
import { getReferralCode, getTrackingCode, getAppBase, getAPIBase } from "../../lib/helpers";
import axios from "axios";
import styles from "./above-fold.module.css";

import animation from "../../images/passiv-animation.mp4";

import robot from "../../images/passiv-robot.png";

function AboveFold({}) {
  const referralCode = getReferralCode();
  const trackingCode = getTrackingCode();

  const apiBase = getAPIBase();
  const appBase = getAppBase();

  const [signups, setSignups] = useState(null);

  const [success, setSuccess] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get('email');
     axios.post('https://api.passiv.com/marketing/email/CFS2021', {email: email}).then(
       response => {
         setSuccess(true);
         console.log('success', response)
       }
     ).catch(
       error => {
         console.log('error', error)
       }
     );
  }

  return (
    <section className={styles.aboveFold}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.ctaContainer} id="redeem">
            <h1>Passiv is proud to host this year's financial summit.</h1>
            <p className={cn(styles.blurb, styles.P1)}>
              We want to thank you for attending by offering a free Passiv 
              investing webinar + QA session. Grab your spot today!
            </p>
            <div className={cn(styles.emailSignup, styles.inputContainer)}>
              <div className={cn(styles.emailContainer, styles.formContainer)}>
                <form className={styles.register} onSubmit={handleSubmit}>
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

                  { success ? (
                    <input disabled
                    className={cn(styles.btn1, styles.registerBtn, styles.clickping)}
                    type="submit"
                    value={`Success!`}
                    />
                  ) : (
                    <input
                    className={cn(styles.btn1, styles.registerBtn, styles.clickping)}
                    type="submit"
                    value={`Redeem Offer`}
                    />
                  )}

                  {referralCode !== null && <input type="hidden" name="ref" value={referralCode} />}
                  {trackingCode !== null && <input type="hidden" name="uid" value={trackingCode} />}
                  <p className={styles.socialProof}>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <video width="500" autoPlay={true}>
              <source src={animation} type="video/mp4"/>
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboveFold;

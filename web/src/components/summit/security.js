import React, { useState, useEffect }  from 'react'
import {buildImageObj, cn} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import Container from '../container'
import {Link} from 'gatsby'
import { getReferralCode, getTrackingCode, getAppBase, getAPIBase } from "../../lib/helpers";
import axios from "axios";
import styles from './security.module.css'

import leafs from "../../images/leafs3.svg";

function Security ({  }) {
  const referralCode = getReferralCode();
  const trackingCode = getTrackingCode();

  const apiBase = getAPIBase();
  const appBase = getAppBase();

  const [signups, setSignups] = useState(null);
  return (
    <section className={styles.security}>
      <div className={styles.outerContainer}>
        <img src={leafs} alt="" role="presentation"/>
      </div>
      <Container>
        <h2 className={styles.H2}>Ready to try Passiv for free?</h2>
        <p>
          Start setting yourself up for financial success now. We are offering 
          free membership to all attendees of the financial summit, including 
          all the features in our Elite plan. 
        </p>
        <div className={cn(styles.emailSignup, styles.inputContainer)}>
          <div className={cn(styles.emailContainer, styles.formContainer)}>
            <form className={styles.register} method="get" noValidate action={`https://${appBase}/register/`}>
              <label>
                <span>Email</span>
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
      </Container>
    </section>
  )
}

export default Security

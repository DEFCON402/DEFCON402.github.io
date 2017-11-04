/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './ContactUs.css';

export default class ContactUs extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  // <div className={styles.iconRow}>
  //   <Icon className={styles.Icon} type={"GITHUB"} viewBox={"0 0 32 32"} height={"36"} width={"36"}/>
  //   <Icon className={styles.Icon} type={"YOUTUBE"} viewBox={"0 0 32 32"} height={"36"} width={"36"}/>
  // </div>
  // <div>Maybe add Slack later?  Fix YOUTUBE icon later</div>

  render () {
    return (
      <ContentBox>
        <div className={styles.MainHeading}>Contact the<span className={styles.defcon}> COMMUNITY.</span></div>

        <ContentBoxHeader
          text='Reach out to us with questions and/or comments.'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <input placeholder="Type of Inquiry" />
          <input placeholder="Your Message" />
          <input placeholder="Captcha" />

        </ContentBoxParagraph>
      </ContentBox>
    );
  }
}


// <form action="/contact/#wpcf7-f1737-p706-o1" method="post" class="wpcf7-form" novalidate="novalidate">
//   <div>
//     <input placeholder="Your Name" />
//     <input placeholder="Your Email" />
//     <input placeholder="Type of Inquiry" />
//     <input placeholder="Your Message" />
//     <input placeholder="Captcha" />
//   </div>
//   <p>Your Name (required)<br/>
//     <span class="wpcf7-form-control-wrap your-name">
//       <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"/>
//     </span>
//   </p>
//   <p>Your Email (required)<br/>
//     <span class="wpcf7-form-control-wrap your-email">
//       <input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"/>
//     </span>
//   </p>
//   <p>Type of inquiry (required)<br/>
//     <span class="wpcf7-form-control-wrap menu-DC">
//       <div class="fancy-select">
//         <select name="menu-DC" class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required fancified" aria-required="true" aria-invalid="false" style="width: 1px; height: 1px; display: block; position: absolute; top: 0px; left: 0px; opacity: 0;">
//           <option value="General">General</option>
//           <option value="Slack Invite">Slack Invite</option>
//           <option value="Sponsorship">Sponsorship</option>
//           <option value="Presentations">Presentations</option>
//           <option value="Report an incident">Report an incident</option>
//         </select>
//         <div class="trigger">General</div>
//         <ul class="options">
//           <li data-raw-value="General" class="selected">General</li>
//           <li data-raw-value="Slack Invite">Slack Invite</li>
//           <li data-raw-value="Sponsorship">Sponsorship</li>
//           <li data-raw-value="Presentations">Presentations</li>
//           <li data-raw-value="Report an incident">Report an incident</li>
//         </ul>
//       </div>
//     </span>
//   </p>
//   <p>Your Message<br/>
//     <span class="wpcf7-form-control-wrap your-message">
//       <textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea>
//     </span> 
//   </p>
//   <p>
//     <input type="hidden" name="_wpcf7_captcha_challenge_captcha-1" value="1318370413"/>
//     <img class="wpcf7-form-control wpcf7-captchac wpcf7-captcha-captcha-1" width="72" height="24" alt="captcha" src="https://dc416.com/wp-content/uploads/wpcf7_captcha/1318370413.png"/>
//     <span class="wpcf7-form-control-wrap captcha-1">
//       <input type="text" name="captcha-1" value="" size="40" class="wpcf7-form-control wpcf7-captchar" autocomplete="off" aria-invalid="false"/>
//     </span>
//   </p>
//   <p>
//     <input type="submit" value="Send" class="wpcf7-form-control wpcf7-submit"/>
//     <span class="ajax-loader"></span>
//   </p>
//   <div class="wpcf7-response-output wpcf7-display-none"></div>
// </form>
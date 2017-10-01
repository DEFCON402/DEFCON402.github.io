/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './Home.css';

export default class Home extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <ContentBoxHeader
          text='Welcome to the Omaha Defcon Chapter!'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          DC402 Meets at different local venues every second Tuesday of the month. Check the website or follow us at @defcon402 for the latest information.
        </ContentBoxParagraph>
        
        <ContentBoxParagraph>
          Attendees give talks at our meetings, often security-related, but also drifting into other interesting areas of tech.  Our meetings are informal, 
          social and often tend to gravitate toward the technical side of things.  That said, we are not afraid of topics like tech policy and we strive to 
          be inclusive rather than exclusive. Many of our members have interesting histories in U.S. government, capture the flag competitions, digital forensics, 
          law enforcement, and various involvement with a small gathering of people in Las Vegas every year known as DEF CON.
        </ContentBoxParagraph>

        <ContentBoxParagraph>
          Make fancier later, fill white space.
        </ContentBoxParagraph>
      </ContentBox>
    );
  }
}
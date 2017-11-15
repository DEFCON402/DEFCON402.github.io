/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './Schedule.css';

export default class Schedule extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <div className={styles.MainHeading}><span className={styles.defcon}>MEET UP.</span> Find others who share your passion.</div>

        <ContentBoxHeader
          text='Tuesday, November 14th - DEF CON 402 Meetup'
          location='Pizza West'
          map='https://goo.gl/maps/6AzW5Bi4bvQ2'
          time='4-6:00pm'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          Adam Schaal will be discussing web-based offensive security and how these tools can be used to educate developers.
        </ContentBoxParagraph>

        <ContentBoxHeader
          text='Tuesday, December 5th - DEF CON 402 Meetup'
          location='Pizza West'
          map='https://goo.gl/maps/6AzW5Bi4bvQ2'
          time='4-6:00pm'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          Tim Vidas will be presenting the DARPA Cyber Grand Challnge, in pictures.  Bring your 3D glasses.
        </ContentBoxParagraph>

        <ContentBoxHeader
          text='Tuesday, January 9th - DEF CON 402 Meetup'
          location='Pizza West'
          map='https://goo.gl/maps/6AzW5Bi4bvQ2'
          time='4-6:00pm'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          Brad Pittack will be presenting National Cyber Security Frameworks: UK vs US edition.
        </ContentBoxParagraph>


        
      </ContentBox>
    );
  }
}

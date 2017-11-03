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
          text='Wednesday, October 18th - Nebraska CERT Meeting'
          location='Bellevue University'
          map='https://goo.gl/maps/qKcEwFqXQL32'
          time='7:00pm'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          Tim Vidas is going to be talking about the Darpa Grand Challenge and it should be a great topic.  The Darpa Grand Challenge is an interesting project and could really shape the next 5-25 years of InfoSec.  Dinner is included.
        </ContentBoxParagraph>

        <ContentBoxHeader
          text='Thursday, October 19th - Nebraska ISC2/InfraGrd Meetup'
          location='Crescent Moon'
          map='https://goo.gl/maps/b3dpZa9jx1x'
          time='4-6:00pm'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          This is more of a networking event but we will be discussing security concerns, challenges and trends. 1 CPE will be earned.
        </ContentBoxParagraph>

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
          text='Tuesday, December 6th - DEF CON 402 Meetup'
          location='Pizza West'
          map='https://goo.gl/maps/6AzW5Bi4bvQ2'
          time='4-6:00pm'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          Tim Vidas will be presenting the DARPA Cyber Grand Challnge, in pictures.  Bring your 3D glasses.
        </ContentBoxParagraph>

        
      </ContentBox>
    );
  }
}

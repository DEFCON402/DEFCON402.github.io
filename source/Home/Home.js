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
        <div className={styles.MainHeading}>Welcome to the Omaha <span className={styles.defcon}>DEFCON</span> Chapter</div>

        <ContentBoxHeader
          text='Next Meeting'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          Our next meeting will be on <b>November 14th</b> at <b>Pizza West</b> off of Giles Street from <b>4:00-6:00pm</b>.  Click on Upcoming Schedule for more details.
        </ContentBoxParagraph>
        
      </ContentBox>
    );
  }
}
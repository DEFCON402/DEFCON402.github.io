/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './NextMeeting.css';

export default class NextMeeting extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <ContentBoxHeader
          text='Tuesday, October 10th'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          Brandon Scherer will be presenting Software Defined Perimeters. What is it, how it works, who is doing it, 
          and why it brings about some cool new paradigms for enterprise security!
        </ContentBoxParagraph>
        
      </ContentBox>
    );
  }
}
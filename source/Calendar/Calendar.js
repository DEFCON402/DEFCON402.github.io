/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './Calendar.css';

export default class Calendar extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <ContentBoxHeader
          text='Calendar'
          paramStyle={styles.Header}
        />

        <div id="calendar"></div>

      </ContentBox>
    );
  }
}
/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './Slides.css';

export default class Slides extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <ContentBoxHeader
          text='Slides'
          paramStyle={styles.Header}
        />

        <ContentBoxParagraph>
          In progress still...
        </ContentBoxParagraph>
      </ContentBox>
    );
  }
}
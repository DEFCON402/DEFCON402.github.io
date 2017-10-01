/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './AboutUs.css';

export default class AboutUs extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <ContentBoxHeader
          text='About Us'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>
          Defcon402 is a 501(c)(3) yada, yada...
        </ContentBoxParagraph>

        <ContentBoxHeader 
          text='Board Members'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          We should maybe throw board members and blurbs here
        </ContentBoxParagraph>
      </ContentBox>
    );
  }
}
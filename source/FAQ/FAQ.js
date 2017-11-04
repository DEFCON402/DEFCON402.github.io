/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './FAQ.css';

export default class FAQ extends Component {

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
        <div className={styles.MainHeading}>Frequently Asked <span className={styles.defcon}>QUESTIONS.</span></div>

        <ContentBoxHeader
          text='About the Group'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>

          // Make Question component

          Q: What is?
          A: It is.
        </ContentBoxParagraph>

        <ContentBoxHeader
          text='About the Meeting'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>

          // Make Question component

          Q: What is?
          A: It is.
        </ContentBoxParagraph>

        <ContentBoxHeader
          text='Partnering with DEF CON 402'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>

          // Make Question component

          Q: What is?
          A: It is.
        </ContentBoxParagraph>

        <ContentBoxHeader
          text='Code of Conduct'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>

          // Make Question component

          Q: What is?
          A: It is.
        </ContentBoxParagraph>
      </ContentBox>
    );
  }
}
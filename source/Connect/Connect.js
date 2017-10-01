/** @flow */
import React, { Component, PropTypes } from 'react'
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
import styles from './Connect.css';
import Icon from "../demo/Icon";

export default class Connect extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render () {
    return (
      <ContentBox>
        <ContentBoxHeader
          text='Connect'
          paramStyle={styles.Header}
        />
        <ContentBoxParagraph>
          <div className={styles.iconRow}>
            <Icon className={styles.Icon} type={"TWITTER"} viewBox={"0 0 32 32"} height={"36"} width={"36"}/>
            <Icon className={styles.Icon} type={"FACEBOOK"} viewBox={"0 0 32 32"} height={"36"} width={"36"}/>
            <Icon className={styles.Icon} type={"GITHUB"} viewBox={"0 0 32 32"} height={"36"} width={"36"}/>
            <Icon className={styles.Icon} type={"LINKEDIN"} viewBox={"0 0 32 32"} height={"36"} width={"36"}/>
            <Icon className={styles.Icon} type={"YOUTUBE"} viewBox={"0 0 32 32"} height={"36"} width={"36"}/>
          </div>
          <div>Maybe add Slack later?  Fix YOUTUBE icon later</div>
        </ContentBoxParagraph>
      </ContentBox>
    );
  }
}
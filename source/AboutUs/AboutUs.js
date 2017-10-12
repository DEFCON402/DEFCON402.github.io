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
          DC402 Meets at different local venues every second Tuesday of the month. Check the website or follow us at <a href="https://twitter.com/defcon402">@defcon402</a> for the latest information.
        </ContentBoxParagraph>
        
        <ContentBoxParagraph>
          Attendees give talks at our meetings, often security-related, but also drifting into other interesting areas of tech.  Our meetings are informal, 
          social and often tend to gravitate toward the technical side of things.  That said, we are not afraid of topics like tech policy and we strive to 
          be inclusive rather than exclusive. Many of our members have interesting histories in U.S. government, capture the flag competitions, digital forensics, 
          law enforcement, and various involvement with a small gathering of people in Las Vegas every year known as DEF CON.
        </ContentBoxParagraph>

        <ContentBoxHeader 
          text='Board Members'
          paramStyle={styles.Header}/>
        <ContentBoxParagraph>
          <div className={styles.boardRow}>
            <div className={styles.BoardMember}/>
            <div className={styles.BoardMember}/>
            <div className={styles.BoardMember}/>
            <div className={styles.BoardMember}/>
            <div className={styles.BoardMember}/>
            <div className={styles.BoardMember}/>
          </div>
          <div className={styles.boardRow}>
            <div className={styles.BoardName}>Name</div>
            <div className={styles.BoardName}>Name</div>
            <div className={styles.BoardName}>Name</div>
            <div className={styles.BoardName}>Name</div>
            <div className={styles.BoardName}>Name</div>
            <div className={styles.BoardName}>Adam Schaal</div>
          </div>
          <div className={styles.titleRow}>
            <div className={styles.BoardTitle}>President</div>
            <div className={styles.BoardTitle}>Vice President</div>
            <div className={styles.BoardTitle}>Treasurer</div>
            <div className={styles.BoardTitle}>Secretary</div>
            <div className={styles.BoardTitle}>Title</div>
            <div className={styles.BoardTitle}>Webmaster</div>
          </div>
          <div className={styles.titleRow}>
            <div className={styles.BoardEmail}>Email</div>
            <div className={styles.BoardEmail}>Email</div>
            <div className={styles.BoardEmail}>Email</div>
            <div className={styles.BoardEmail}>Email</div>
            <div className={styles.BoardEmail}>Email</div>
            <div className={styles.BoardEmail}>adam@dc402.org</div>
          </div>
        </ContentBoxParagraph>
      </ContentBox>
    );
  }
}
import React from 'react'
import cn from 'classnames'
import styles from './ContentBox.css'

export function ContentBox ({ className, children, style }) {
  return (
    <div
      className={cn(styles.ContentBox, className)}
      style={style}
    >
      {children}
    </div>
  )
}

export function ContentBoxHeader ({ text, location, map, time, sourceLink, sourceName, docsLink, docsName, paramStyle }) {
  const links = [], locations = []
  const sourceTitle = sourceName ? sourceName : 'Source';
  const docsTitle = docsName ? docsName : 'Docs';

  if (sourceLink) {
    links.push(
      <a
        className={styles.Link}
        href={sourceLink}
        key='sourceLink'
      >
        {sourceTitle}
      </a>
    )
  }

  if (sourceLink && docsLink) {
    links.push(
      <span key='separator'> | </span>
    )
  }

  if (docsLink) {
    links.push(
      <a
        className={styles.Link}
        href={docsLink}
        key='docsLink'
      >
        {docsTitle}
      </a>
    )
  }

  if (location) {
    locations.push(
      <span>
        {location}
      </span>
    )
  }

  if (location && map) {
    locations.push(
      <span key='separator-1'> · </span>
    )
  }

  if (map) {
    locations.push(
      <a className={styles.mapAnchor}
        href={`${map}`}
        target='_blank'>
        Map
      </a>
    )
  }

  if (time && map) {
    locations.push(
      <span key='separator-2'> · </span>
    )
  }

  if (time) {
    locations.push(
      <span>
        {time}
      </span>
    )
  }

  return (
    <h1 className={styles.Header + ' ' + paramStyle}>
      {text}

      {links.length > 0 && (
        <small className={styles.Small}>
          {links}
        </small>
      )}

      {locations.length > 0 && (
        <div className={styles.Small}>
          {locations}
        </div>
      )}
    </h1>
  )
}

export function ContentBoxParagraph ({ children }) {
  return (
    <div className={styles.Paragraph}>
      {children}
    </div>
  )
}

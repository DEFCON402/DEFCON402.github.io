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

export function ContentBoxHeader ({ text, sourceLink, sourceName, docsLink, docsName, paramStyle }) {
  const links = []
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

  return (
    <h1 className={styles.Header + ' ' + paramStyle}>
      {text}

      {links.length > 0 && (
        <small className={styles.Small}>
          {links}
        </small>
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

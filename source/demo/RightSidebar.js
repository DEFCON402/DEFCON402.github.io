import React from 'react'
import cn from 'classnames'
import styles from './RightSidebar.css'

export function RightSidebar ({ className, children, style }) {
  return (
    <div
      className={cn(styles.RightSidebar, className)}
      style={style}
    >
      {children}
    </div>
  )
}

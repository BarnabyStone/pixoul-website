import React from "react"
import "./opening.scss"
import cn from "classnames"

export default function Opening({
  width,
  theme = 'dark',
  align = 'center',
  title,
  subtitle
}){

  const styles = {}

  if(width) styles.width = width

  const classes = cn('opening', {
    'light': theme === 'light',
    'dark': theme === 'dark',
    'center': align === 'center',
    'left': align === 'left',
    'right': align === 'right'
  })

  return(
    <div className={classes} style={styles}>
      <h3 className="opening-title">{title}</h3>
      <p className="opening-subtitle">{subtitle}</p>
    </div>
  )
}

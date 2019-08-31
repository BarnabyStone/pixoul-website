import React from "react"
/* Third-Party */
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = theme => ({
  typography: props => ({
    fontSize:  props.fontSize,
    fontWeight: props.weight,
    color: theme.text[props.color],
    textAlign: props.align,
    textTransform: props.transform
  }),
  body1: {
    fontSize: theme.font.base,
    lineHeight: '31.5px',
    margin: {
      top: 16,
      bottom: 16
    }
  },
  body2: {
    fontSize: 16,
    margin: {
      top: 6,
      bottom: 6
    }
  },
  buttonText: {
    fontSize: 12,
    letterSpacing: 2.4
  },
  captionText: {
    fontSize: 16,
    lineHeight: 1.05
  },
  overlineText: {
    fontSize: 14
  },
  quote: {
    fontSize: 39,
    letterSpacing: -0.61
  },
  subtitle1: {
    fontSize: 24,
    lineHeight: 1.3,
    color: theme.text.secondary,
    margin: {
      top: 16,
      bottom: 16
    }
  },
  subtitle2: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2.36,
    textTransform: "uppercase",
    color: theme.color.secondary,
    margin: {
      top: 12,
      bottom: 7
    }
  },
  header1: {
    fontSize: 62,
    fontWeight: "bold",
    lineHeight: '66px',
    letterSpacing: -2.38,
    color: theme.text.primary,
    margin: {
      top: 10,
      bottom: 10
    }
  }
})

const Typography = ({
  variant,
  classes,
  children,
  component: Component
}) => {

  return(
    <Component className={classes.typography + ' ' + classes[variant]}>{children}</Component>
  )
}

Typography.defaultProps = {
  component: 'div',
  variant: 'body1',
  color: 'initial'
}

export default injectSheet(styles)(Typography)

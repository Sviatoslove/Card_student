import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, color, classes, ...rest }) => {
  return (
    <button {...rest} className={classes + color}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: ' btn-primary'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  color: PropTypes.string
}

export default Button

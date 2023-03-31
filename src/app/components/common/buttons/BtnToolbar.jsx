import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Link } from 'react-router-dom'

const BtnToolbar = ({
  type,
  textLink,
  textButton,
  colorLink,
  colorBtn,
  to,
  onClick
}) => {
  return (
    <div className='btn-toolbar'>
      <Link to={to} className={'btn me-3' + colorLink}>
        {textLink}
      </Link>
      <Button
        type={type}
        text={textButton}
        classes='btn btn-sm'
        onClick={onClick}
        color={colorBtn}
      />
    </div>
  )
}

BtnToolbar.defaultProps = {
  colorLink: ' btn-secondary',
  colorBtn: ' btn-primary',
  onClick: ''
}

BtnToolbar.propTypes = {
  textLink: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  to: PropTypes.any,
  colorLink: PropTypes.string,
  colorBtn: PropTypes.string,
  onClick: PropTypes.any
}

export default BtnToolbar

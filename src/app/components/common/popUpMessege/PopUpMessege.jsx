import React from 'react'
import PropTypes from 'prop-types'

const PopUpMessege = ({ text, update, ...rest }) => {
  return (
    <div
      className='z-2 toast show position-absolute top-50 start-50 translate-middle bg-success-subtle'
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
      name='staticBackdrop'
    >
      <div className='toast-header bg-success bg-opacity-25'>
        <strong className='me-auto text-info'>Карточка студента</strong>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='toast'
          {...rest}
        ></button>
      </div>
      <div className='toast-body text-info-emphasis'>{text}</div>
    </div>
  )
}

PopUpMessege.propTypes = {
  text: PropTypes.string.isRequired,
  update: PropTypes.bool.isRequired
}

export default PopUpMessege

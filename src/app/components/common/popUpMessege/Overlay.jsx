import React from 'react'
import PropTypes from 'prop-types'
const Overlay = ({ update }) => {
  return (
    <div
      className={
        'z-1 position-absolute top-0 start-0 p-5 rounded-3 bg-black bg-gradient w-100 h-100 opacity-25' +
        (update ? ' d-block' : ' d-none')
      }
    ></div>
  )
}

Overlay.propTypes = {
  update: PropTypes.bool.isRequired
}

export default Overlay

import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ name, label, type, value, onChange, error }) => {
  const getClassName = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  return (
    <div className='mb-3 text-start'>
      <label htmlFor={name}>{label}</label>
      <div className='input-group'>
        <input
          type={type}
          className={getClassName()}
          name={name}
          value={value}
          id={name}
          onChange={onChange}
        />
        {name === 'birthday' && (
          <div
            className='btn-group-vertical'
            role='group'
            aria-label='Vertical button group'
          >
            <div type='button'>
              <i className='bi bi-caret-up'></i>
            </div>
            <div type='button'>
              <i className='bi bi-caret-down'></i>
            </div>
          </div>
        )}
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}

TextField.defaultProps = {
  type: 'text'
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.any
}

export default TextField

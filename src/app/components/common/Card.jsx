import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { declensionWord } from '../utils'
import { Overlay, PopUpMessege } from './popUpMessege'
import { BtnToolbar } from './buttons'

const Card = ({ card }) => {
  const [statusCard, setStatusCard] = useState(!!Object.keys(card).length)
  const [deleted, setDeleted] = useState(false)

  const handleDelete = () => {
    setDeleted(true)
  }

  const handleClosePopUp = () => {
    localStorage.clear()
    setStatusCard(false)
    setDeleted(false)
  }

  return (
    <>
      <div className='container-sm mx-auto shadow p-5 mt-5 text-center position-relative bg-warning bg-opacity-50'>
        <h1>Карточка студента</h1>
        {statusCard ? (
          <>
            <ul className='list-unstyled text-start'>
              {Object.keys(card).map((key) => (
                <li className='d-flex ' key={card[key].label}>
                  {key === 'portfolio' || key === 'schoolUrl' ? (
                    <>
                      <strong className='me-2'>{card[key].label}</strong>
                      <a className='icon-link' href={card[key][key]}>
                        {card[key][key]}
                      </a>
                    </>
                  ) : (
                    <>
                      <strong className='me-2'>{card[key].label}</strong>
                      {key === 'birthday'
                        ? declensionWord(
                            card[key][key],
                            '',
                            'лет',
                            'год',
                            'года'
                          )
                        : card[key][key]}
                    </>
                  )}
                </li>
              ))}
            </ul>
            <BtnToolbar
              type='button'
              to={`/createCard/${statusCard}`}
              textLink='Редактировать'
              textButton='Удалить'
              colorLink=' btn-primary'
              colorBtn=' btn-danger'
              onClick={handleDelete}
            />
          </>
        ) : (
          <>
            <p>Нет данных</p>
            <Link to={`/createCard/${statusCard}`} className='btn btn-dark'>
              Добавить
            </Link>
          </>
        )}
        {deleted && (
          <PopUpMessege
            text='Удалено успешно!'
            update={deleted}
            onClick={handleClosePopUp}
          />
        )}
      </div>
      <Overlay update={deleted} />
    </>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TextField from '../common/TextField'
import {
  validatorConfig,
  validator,
  setCardToLocalStorage,
  createCardStudent,
  getCardFromLocalStorage
} from '../utils'
import { Overlay, PopUpMessege } from '../common/popUpMessege'
import { BtnToolbar, Button } from '../common/buttons'

const CreateForm = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const statusForm = type === 'true'
  let card
  if (statusForm) {
    card = getCardFromLocalStorage('cardStudent')
  }

  const [data, setData] = useState({
    name: statusForm ? card.name.name : '',
    lastName: statusForm ? card.lastName.lastName : '',
    birthday: statusForm ? card.birthday.birthday : '',
    portfolio: statusForm ? card.portfolio.portfolio : '',
    code: statusForm ? card.code.code : '',
    school: statusForm ? card.school.school : '',
    schoolUrl: statusForm ? card.schoolUrl.schoolUrl : ''
  })

  const [update, setUpdate] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((state) => ({
      ...state,
      [target.name]: target.value
    }))
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return !!Object.keys(errors).length
  }

  useEffect(() => {
    validate()
  }, [data])

  const isVal = !!Object.keys(errors).length

  const handleSubmit = (e) => {
    e.preventDefault()
    const isVal = validate()
    if (isVal) return
    const card = createCardStudent(data)
    setCardToLocalStorage('cardStudent', card)
    setUpdate(true)
  }

  const handleUpdate = () => {
    navigate('/')
  }

  return (
    <>
      <div className='container-sm mx-auto shadow p-3 mt-4 text-center position-relative bg'>
        <div className='col-md-6 offset-md-3 p-4 '>
          <h1 className='text-start'>
            {statusForm ? 'Редактировать:' : 'Создать карточку:'}
          </h1>
          <form onSubmit={handleSubmit}>
            <TextField
              name='name'
              label='Имя'
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <TextField
              name='lastName'
              label='Фамилия'
              value={data.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
            <TextField
              name='birthday'
              label='Год рождения'
              value={data.birthday}
              onChange={handleChange}
              error={errors.birthday}
            />
            <TextField
              name='portfolio'
              label='Портфолио'
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            <TextField
              name='code'
              label='Как давно ты кодишь?'
              value={data.code}
              onChange={handleChange}
              error={errors.code}
            />
            <TextField
              name='school'
              label='Учебное заведение по IT'
              value={data.school}
              onChange={handleChange}
              error={errors.school}
            />
            <TextField
              name='schoolUrl'
              label='URL твоего учебного заведения'
              value={data.schoolUrl}
              onChange={handleChange}
              error={errors.schoolUrl}
            />
            {statusForm ? (
              <BtnToolbar
                type='submit'
                textLink='Назад'
                textButton='Обновить'
                to='/'
                color=' btn-secondary'
                onClick={handleSubmit}
              />
            ) : (
              <Button
                type='submit'
                text='Создать'
                disabled={isVal}
                classes='btn btn-sm w-100'
              />
            )}
          </form>
        </div>
        {update && (
          <PopUpMessege
            text='Обновлено успешно!'
            update={update}
            onClick={handleUpdate}
          />
        )}
      </div>
      <Overlay update={update} />
    </>
  )
}

export default CreateForm

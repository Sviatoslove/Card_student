export const validatorConfig = {
  name: {
    isRequired: {
      messege: 'Поле "Имя" обязательно для заполнения'
    }
  },
  lastName: {
    isRequired: {
      messege: 'Поле "Фамилия" обязательно для заполнения'
    }
  },
  birthday: {
    isRequired: {
      messege: 'Поле "Год рождения" обязательно для заполнения'
    },
    ethic: {
      messege: 'Год рождения не может быть больше, чем текущий год'
    },
    formatBirthday: {
      messege: 'Формат года рождения: гггг'
    }
  },
  portfolio: {
    isRequired: {
      messege: 'Поле "Портфолио" обязательно для заполнения'
    },
    url: {
      messege: 'Строка должна являться url - ссылкой: https://text.text...'
    }
  },
  code: {
    isRequired: {
      messege: 'Поле "Как давно ты кодишь?" обязательно для заполнения'
    },
    format: {
      messege: 'Формат:дд.мм.гггг'
    }
  },
  school: {
    isRequired: {
      messege: 'Поле "Учебное заведение по IT" обязательно для заполнения'
    },
    text: {
      messege: 'Название школы заполняется текстом'
    },
    result: {
      messege:
        'Если ты не студент ResultSchool, то тебе срочно нужно это исправить, введи в поле: Я люблю Result School',
      value: 'Я люблю Result School'
    }
  },
  schoolUrl: {
    isRequired: {
      messege: 'Поле "URL твоего учебного заведения" обязательно для заполнения'
    },
    url: {
      messege: 'Строка должна являться url - ссылкой: https://text.text...'
    }
  }
}

export const validator = (data, config) => {
  const errors = {}
  const validate = (validateMethod, data, config) => {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        break
      case 'ethic': {
        const currentYear = new Date().getFullYear()
        statusValidate = data.trim().split('.')[2] > currentYear
        break
      }
      case 'formatBirthday': {
        const formatBirthdayRegExp = /^\d{4}$/g
        statusValidate = !formatBirthdayRegExp.test(data)
        break
      }
      case 'format': {
        const formatRegExp = /^\d{2}\.\d{2}\.\d{4}$/g
        statusValidate = !formatRegExp.test(data)
        break
      }
      case 'url': {
        const urlRegExp = /^(ftp|http|https):\/\/\w+\.\w+/g
        statusValidate = !urlRegExp.test(data)
        break
      }
      case 'text': {
        const textRegExp = /[a-zA-Zа-яА-я]+/g
        statusValidate = !textRegExp.test(data)
        break
      }
      case 'result':
        statusValidate = data !== config.value
        break
      default:
        break
    }
    if (statusValidate) return config.messege
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) errors[fieldName] = error
    }
  }
  return errors
}

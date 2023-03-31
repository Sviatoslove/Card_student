export const declensionWord = (year, word, end1, end2, end3) => {
  let age = new Date().getFullYear() - year
  const z = (age % 100) / 10
  const x = age % 10
  z >= 1.1 && z <= 1.4
    ? (age += ` ${word}${end1}`)
    : x === 1
    ? (age += ` ${word}${end2}`)
    : x === 2 || x === 3 || x === 4
    ? (age += ` ${word}${end3}`)
    : (age += ` ${word}${end1}`)
  return `${year} (${age})`
}

export const createCardStudent = (data) => {
  const card = {}
  const labelName = {
    name: 'Имя: ',
    lastName: 'Фамилия: ',
    birthday: 'Год рождения: ',
    portfolio: 'Портфолио: ',
    code: 'Кодит с ',
    school: 'Любимая школа по IT: ',
    schoolUrl: 'URL моего учебного заведения: '
  }

  for (const key in data) {
    card[key] = {
      [key]: data[key],
      label: labelName[key]
    }
  }

  return card
}

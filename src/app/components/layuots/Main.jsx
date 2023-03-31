import React from 'react'
import { getCardFromLocalStorage } from '../utils'
import Card from '../common/Card'

const Main = () => {
  const data = getCardFromLocalStorage('cardStudent')
  return <Card card={data} />
}

export default Main

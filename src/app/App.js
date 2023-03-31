import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateForm from './components/layuots/CreateForm'
import Main from './components/layuots/Main'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/createCard/:type?' element={<CreateForm />} />
    </Routes>
  )
}

export default App

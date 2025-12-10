import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'


function App() {
  let frnds=["Smith","Johnson","Williams","Jones","Brown"];

  return (
    <>
      <Header  />
      <Content />
    </>
  )
}

export default App

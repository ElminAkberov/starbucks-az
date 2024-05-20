import React from 'react'
import Header from './Header'
import Main from './Main'
import { Outlet } from 'react-router-dom'
// import "../../output.css"
function App() {
  return (
    <>
      <Header />
      <Main />
      <Outlet/>
    </>
  )
}

export default App
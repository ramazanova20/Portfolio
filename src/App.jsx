import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './components/Main/Main'


function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

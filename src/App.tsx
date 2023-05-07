import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Watch from './pages/Watch'

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/watch/:id' element={<Watch />}/>
        </Routes>
      </BrowserRouter>
    </h1>
  )
}


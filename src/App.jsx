import { useState } from 'react'

import './App.css'
import Navbar from './components/Landing Page/Navbar/Navbar'
import Banner from './components/Landing Page/Banner/Banner'
import { CardDefault } from './components/Cards/Card'

function App() {

  return (
    <>
     <Navbar />
     <Banner />
     <CardDefault />
    </>
  )
}

export default App

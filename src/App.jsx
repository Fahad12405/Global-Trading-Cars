import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import HowToBuy from './Pages/HowToBuy'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-to-buy' element={<HowToBuy />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import HowToBuy from './Pages/HowToBuy'
import WhyChooseUs from './Pages/WhyChooseUs'
import ContactSection from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'

import SearchCars from './Pages/SearchCars'

import CompanyProfile from './Pages/CompanyProfile'
import TermsofUse from './Pages/TermsofUse'
import Blogs from './Pages/Blogs'
import Register from './Pages/Register'
import LogIn from './Pages/LogIn'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-to-buy' element={<HowToBuy />} />
        <Route path='/why-choose-us' element={<WhyChooseUs />} />
        <Route path='/contact' element={<ContactSection />} /> 
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />

        <Route path='/Search-Cars' element={<SearchCars />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />

        <Route path='/CompanyProfile' element={<CompanyProfile />} />
        <Route path='/TermsofUse' element={<TermsofUse />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/LogIn' element={<LogIn />} />



      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

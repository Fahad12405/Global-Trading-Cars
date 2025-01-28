import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import HowToBuy from './Pages/HowToBuy'
import WhyChooseUs from './Pages/WhyChooseUs'
import ContactSection from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import CompanyProfile from './Pages/CompanyProfile'
import TermsofUse from './Pages/TermsofUse'
import Blogs from './Pages/Blogs'

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
        <Route path='/CompanyProfile' element={<CompanyProfile />} />
        <Route path='/TermsofUse' element={<TermsofUse />} />
        <Route path='/Blogs' element={<Blogs />} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

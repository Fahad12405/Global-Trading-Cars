import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import HowToBuy from './Pages/HowToBuy'
import WhyChooseUs from './Pages/WhyChooseUs'
import ContactSection from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import CarforSale from './Pages/CarforSale'
import CompanyProfile from './Pages/CompanyProfile'
import TermsofUse from './Pages/TermsofUse'
import Blogs from './Pages/Blogs'
import PaymentDetails from './Pages/PaymentDetails'
// import Register from './Pages/Register'
import LogIn from './Pages/LogIn'
import CarDetails from './Pages/CarDetails'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Logout from './Pages/Logout'
import AddProduct from './Pages/AddProducts'
import Dashboard from './Pages/Dashboard/index'
import NotFound from './components/Not Found/notFound'


function App() {
// 
  return (
    <>

    <BrowserRouter>

    <Navbar/>
      <Routes>

        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home />} />

        <Route path='/how-to-buy' element={<HowToBuy />} />
        <Route path='/why-choose-us' element={<WhyChooseUs />} />
        <Route path='/contact' element={<ContactSection />} /> 
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/PaymentDetails' element={<PaymentDetails />} />

        <Route path='/CompanyProfile' element={<CompanyProfile />} />
        <Route path='/TermsofUse' element={<TermsofUse />} />
        <Route path='/Blogs' element={<Blogs />} />

        <Route path='/CarforSale' element={<CarforSale />} />
        <Route path='/CarDetails/:id' element={<CarDetails />} />

        <Route path='/Protected/LogIn' element={<LogIn />} />
        <Route path='/Protected/AddProduct' element={<AddProduct/>}/>
        <Route path='/Protected/Dashboard' element={<Dashboard/>}/>
        <Route path='/LogOut' element={<Logout />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

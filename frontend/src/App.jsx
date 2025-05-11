import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import SignUp from './components/SignUp/SignUp'
import Verify from './pages/Verify/Verify'
const App = () => {
  const[showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <SignUp setShowLogin={setShowLogin}/>  : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/Food-app' element={<Home />} />
          <Route path='/Food-app/cart' element={<Cart />} />
          <Route path='/Food-app/order' element={<PlaceOrder />} />
          <Route path='/Food-app/verify' element={<Verify/>}/>
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App

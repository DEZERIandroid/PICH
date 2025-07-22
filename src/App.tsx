import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Catalog from './Components/Catalog'
import Cart from './Components/Cart'
import Order from './Components/Order'
import Profile from './Components/Profile'
import './App.css'

function App() {
  
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

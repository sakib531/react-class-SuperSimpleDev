import { Routes , Route } from 'react-router'
import {HomePage} from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'


function App() {
  return (
    <Routes>
      {/* index is shortcut for path='/' */}
      <Route index element={<HomePage/>}/> 
      <Route path='checkout' element={<CheckoutPage/>}></Route>
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App

import { Routes , Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { useEffect , useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {

  const [cart ,setCart] = useState([]);

  useEffect (() => {

    axios.get('/api/cart-items?expand=product')
    .then((response) => {
      setCart(response.data)
    });
  },[]);

  return (
    <Routes>
      {/* index is shortcut for path='/' */}
      <Route index element={<HomePage cart={cart} />}/> 
      <Route path='checkout' element={<CheckoutPage cart={cart} />}></Route>
      <Route path='orders' element={<OrdersPage cart={cart} />}/>
      <Route path='tracking' element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App

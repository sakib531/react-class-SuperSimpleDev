import { Routes , Route } from 'react-router'
import {HomePage} from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'


function App() {
  return (
    <Routes>
      {/* index is shortcut for path='/' */}
      <Route index element={<HomePage/>}/> 
      <Route path='checkout' element={<CheckoutPage/>}></Route>
    </Routes>
  )
}

export default App

import { Routes , Route } from 'react-router'
import {HomePage} from './pages/HomePage'
import './App.css'


function App() {
  return (
    <Routes>
      {/* index is shortcut for path='/' */}
      <Route index element={<HomePage/>}/> 
      <Route path='checkout' element={<div>test on cheakout</div>}></Route>
    </Routes>
  )
}

export default App

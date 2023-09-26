
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Users from './Users'
import Createuser from './Createuser'
import Updateuser from './Updateuser'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/create" element={<Createuser/>}></Route>
        <Route path="/update" element={<Updateuser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

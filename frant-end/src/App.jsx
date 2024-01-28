import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Nav from "./Nav";

function App() {

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/update' element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

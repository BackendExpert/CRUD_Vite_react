
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

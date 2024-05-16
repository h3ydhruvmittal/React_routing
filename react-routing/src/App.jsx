import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Dashboard } from './pages/Dashboard'
import { Messages } from './pages/Messages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/messages" element={<Messages/>} />
      <Route path="/" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

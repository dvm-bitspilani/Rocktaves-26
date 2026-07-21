import { useState } from 'react'
import './App.css'
import Register from './pages/register/register';
import Landing from './pages/landing/landing'
import { Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/register" element={<Register />} />

    </Routes>
    </div>
  )
}

export default App;


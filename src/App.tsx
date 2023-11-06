import { useState } from 'react'
import './App.css'
import { WorldClock } from './components/WorldClock/WorldClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WorldClock></WorldClock>
    </>
  )
}

export default App

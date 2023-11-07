import './App.css'
import { WorldClock } from './components/WorldClock/WorldClock'
import { Routes, Route, Link } from 'react-router-dom';
import Crud from './components/CRUD/Crud';

function App() {

  return (
    <>
    <div style={{display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "1rem"}}>
      <Link to="/world-clock">WorldClock</Link>
      <Link to="/crud">Crud</Link>
    </div>
      <Routes>
        <Route path="/world-clock" element={<WorldClock></WorldClock>}></Route>
        <Route path="/crud" element={<Crud></Crud>}></Route>
      </Routes>
    </>
  )
}

export default App

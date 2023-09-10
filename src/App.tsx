import './App.css'
import { MainPage, DetailPage } from './pages';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/:bookId' element={<DetailPage />}/>
      </Routes>                    
    </Router>
  )
}

export default App

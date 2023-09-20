import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Containers/Layout'
import Authentication from './App/auth'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {
  return (
    <>
      <Router>
        <Authentication>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/app/*' element={<Layout />} />
          </Routes>
        </Authentication>
      </Router>
    </>
  )
}

export default App

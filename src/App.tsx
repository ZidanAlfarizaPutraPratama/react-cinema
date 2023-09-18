import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './Containers/Layout'

function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  )
}

export default App

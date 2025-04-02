import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Partners from './pages/Partners'
import Marketing from './pages/Marketing'
import Logistics from './pages/Logistics'
import Finance from './pages/Finance'
import Sales from './pages/Sales'
import Settings from './pages/Settings'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App

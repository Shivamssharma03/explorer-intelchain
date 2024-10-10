import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
// import DashboardFilter from './components/DashboardFilter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>

    <App />
    </ThemeProvider>
  </StrictMode>
  ,
)

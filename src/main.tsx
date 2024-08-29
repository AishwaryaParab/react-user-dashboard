import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthUserProvider } from './context/AuthUserContext.tsx'
import "./index.css"
import { ThemeProvider } from './context/ThemeContext.tsx'

const USE_MOCK_API = true;

async function enableMocking() {
  if (!USE_MOCK_API) {
    return
  }
 
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <AuthUserProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ AuthUserProvider>
      </BrowserRouter>
    </StrictMode>,
  )
})

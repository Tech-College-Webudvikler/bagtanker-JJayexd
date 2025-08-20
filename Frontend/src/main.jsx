import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthProvider.jsx'
import { NewsProvider } from './Context/NewsContext.jsx'
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './Context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <NewsProvider>
        <ProductsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductsProvider>
      </NewsProvider>
    </AuthProvider>
  </StrictMode>,
)

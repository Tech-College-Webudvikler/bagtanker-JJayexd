import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthProvider.jsx'
import { NewsProvider } from './Context/NewsContext.jsx'
import { ProductsProvider } from './Context/ProductsContext.jsx'
import { CategoryProvider } from './Context/CategoriesContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <NewsProvider>
        <ProductsProvider>
          <CategoryProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CategoryProvider>
        </ProductsProvider>
      </NewsProvider>
    </AuthProvider>
  </StrictMode>,
)

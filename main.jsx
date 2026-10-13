import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// Sem <StrictMode> de propósito: os efeitos em /effects registram listeners
// no documento e não devem rodar duas vezes em desenvolvimento.
createRoot(document.getElementById('root')).render(<App />)

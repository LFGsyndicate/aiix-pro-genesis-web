import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // Импортируем
import App from './App.tsx'
import './index.css'

// ПРАВИЛЬНЫЙ URL ДЛЯ ЗАГРУЗКИ СКРИПТА ВИДЖЕТА ЧЕРЕЗ ПРОКСИ
import "https://proxy.aiix.pro/widget-script/@elevenlabs/elevenlabs-convai";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider> {/* Оборачиваем App */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
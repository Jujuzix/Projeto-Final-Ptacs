import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Destaque from './destaque.jsx';
import Detalhe from './detalhe.jsx'
import Registro from './Registro.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/registro' element={<Registro />}></Route>
        <Route path='/destaque' element={<Destaque />}></Route>
        <Route path='/detalhe' element={<Detalhe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

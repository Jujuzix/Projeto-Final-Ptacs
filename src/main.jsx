import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registro from './Registro.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/registro' element={<Registro />}></Route>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
       
=======
    
>>>>>>> 49c9c5ee1ead33a334c403c4c32e936802364096
=======
    
>>>>>>> 49c9c5ee1ead33a334c403c4c32e936802364096
=======
    
>>>>>>> 5a9626f608b3237271dc3c3f040aa9322e9012ad
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './Componentes/Nav'
import Reservas from './Componentes/Reservas'
import Reseñas from './Componentes/Reseñas'
import Inicio from './Componentes/Inicio';
import Productos from './Componentes/Productos';
import Perfil from './Componentes/Api';
import Footer from './Componentes/Footer';


function App() {
  

  return (
   <Router>
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/reseñas" element={<Reseñas />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/perfil" element={<Perfil />} />
    </Routes>
    <Footer></Footer>
   </Router> 
  )
}

export default App

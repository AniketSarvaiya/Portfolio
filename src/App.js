import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './Layouts/Hero';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Quialification from './Pages/Quialification';
import Portfolio from './Pages/Portfolio';
import ContactMe from './Pages/ContactMe';
import { useRef } from 'react';


function App() {



  return (
    <div className="App">
      <ToastContainer />
      <Hero />
    </div>
  );
}

export default App;

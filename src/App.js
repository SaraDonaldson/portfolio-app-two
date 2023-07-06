import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import Navbar from './Components/Navbar.jsx';
import About from './Pages/About.jsx';
import './App.css';
import ProjectsSummary from './Components/ProjectsSummary.jsx';
import Footer from './Components/Footer.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import BlogFeed from './Pages/BlogFeed.jsx';

function App() {
  return (
     <div className='app'>  
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/blog" element={<BlogFeed />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsSummary/>} />
        </Routes>   
    
      <Footer/>
    </BrowserRouter>
   </div>
   


  );
}

export default App;

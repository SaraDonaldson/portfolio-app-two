import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import './App.css';
import ProjectsSummary from './Components/ProjectsSummary.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (

      <BrowserRouter>
       <div className='app-content'>
       <Navbar />
       <About link='/'/>
       <ProjectsSummary/>
       <Footer/>
       </div>
    </BrowserRouter>

  );
}

export default App;

import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import './App.css';
import ProjectsSummary from './Components/ProjectsSummary.jsx';

function App() {
  return (

      <BrowserRouter>
       <div className='app-content'>
       <Navbar />
       <About link='/'/>
       <ProjectsSummary/>
       </div>
    </BrowserRouter>

  );
}

export default App;

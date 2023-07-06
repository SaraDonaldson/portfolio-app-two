import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import './App.css';
import ProjectsSummary from './Components/ProjectsSummary.jsx';
import Footer from './Components/Footer.jsx';
// import ContactPage from './Pages/contactPage.jsx';
// import BlogFeed from './Pages/BlogFeed.jsx';

function App() {
  return (

      <BrowserRouter>
      
          <div className='app-content'>
              <Navbar />
              <About link='/'/>
              <ProjectsSummary/>
          
              <Footer/>
          </div>
              {/* <ContactPage link= '/contact'  /> */}
              {/* <BlogFeed link= '/blog'  /> */}
    </BrowserRouter>
   

  );
}

export default App;

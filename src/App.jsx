import './App.css'
import CustomNav from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Stack from 'react-bootstrap/Stack';
import Projects from './Components/Projects';
import CustomForm from './Components/Form';
import Technologies from './Components/Technologies';
function App() {

  //check if the user is on mobile
  const isMobile = window.innerWidth <= 500;

  return (
    <div>
      <CustomNav />
      <div className={isMobile ? 'margin-130' : 'margin-180'}></div>
      <div className={isMobile && 'text-center'} id="me">
        <Home />
      </div>
      <div className='margin-130'></div>
      <Technologies />
      <div id="projects"></div>
      <Projects/>
      <div id="contact"></div>
      <CustomForm />
      <div className='margin-250'></div>
    </div>

  )
}

export default App

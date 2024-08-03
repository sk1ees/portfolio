import './App.css'
import About from './components/About';
import Featured from './components/Featured';
import FirstPage from './components/FirstPage'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SecondPage from './components/SecondPage'
import LocomotiveScroll from 'locomotive-scroll';
function App() {

 
  
  return (
    <>
      <div className='w-full min-h-screen bg-black scroll-smooth' >
        <Navbar />
        <FirstPage />
        <SecondPage />
        <Featured />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App

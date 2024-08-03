import './App.css'
import About from './components/About';
import Featured from './components/Featured';
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className='w-full min-h-screen bg-black'>
        <FirstPage />
        <SecondPage />
        <Featured />
        <About />
      </div>
    </>
  )
}

export default App

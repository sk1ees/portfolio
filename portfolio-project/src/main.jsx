import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import About from './components/About.jsx';
import Contact from './routes/Contact.jsx';
import AboutMe from './routes/AboutMe.jsx';

const router = createBrowserRouter([


  { path: '/', element: <App /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about', element: <AboutMe /> }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

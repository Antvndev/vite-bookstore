import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Button from './components/Button.jsx';
import Hero from './components/Hero.jsx'
import StorePerks from './components/StorePerks.jsx';
import FeaturedBooks from './components/FeaturedBooks.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (<div className="bg-background" >
     {/* Start of code */}
      <Navbar />
      <Hero />
      <StorePerks />
      <FeaturedBooks />
    {/* End of code */}
  </div>)
}

export default App
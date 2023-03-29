import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home-container/home/Home'
import PetDetails from './components/home-container/pet-details/PetDetails'
import CreatePet from './components/create-post/CreatePet'

function App() {
  // Add variables

  const loadWeb3 = async () => { }

  const getContract = async () => { }

  const connectWallet = async () => { }

  return (
    <Router>
      <div className="cl">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/create-pet" Component={CreatePet} />
          <Route path="/pet-details/:petId" Component={PetDetails} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

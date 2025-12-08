import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Service from './components/Service';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

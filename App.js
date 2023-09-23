import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Down from './components/Down';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <>
    <Navbar />
    <Down />
    <Card />
    <Footer />
    </>
  );
}

export default App;

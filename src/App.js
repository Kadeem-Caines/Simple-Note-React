import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AddNotes from './Components/AddNotes';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Header />
      <AddNotes />



    </div>
  );
}

export default App;

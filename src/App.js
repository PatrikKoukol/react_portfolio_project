import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Layout from './MainPage/containers/Layout/Layout'
import HomePage from './MainPage/components/Pages/HomePage/HomePage'
function App() {
  //test test test
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
     )
}

export default App;

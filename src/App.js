import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Layout from './MainLayout/Layout/Layout'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
     )
}

export default App;

import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes as Switch, Route, Link} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import UploadImage from './components/UploadImage';
import Navbar from './components/Navbar/Navbar';
import DisplayImages from './components/DisplayImages';
import FullCollectionPage from './pages/FullCollectionPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home/>}/> 
        <Route path="/full-collection" element={<FullCollectionPage/>}/>
      </Switch>
    </Router>
  );
}

export default App;
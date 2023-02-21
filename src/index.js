import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';


// const root = ReactDOM.createRoot(document.getElementById('root'));


ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/home' element={<Main/>}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);



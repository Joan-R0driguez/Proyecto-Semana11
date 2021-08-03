import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';


export default function App () {
  return(
    <>
      <Router>
        <Header />
        <Search />
        <Login />
        <Register />
      </Router>
    </>
  )
}
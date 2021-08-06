import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import HomePage from './views/Homepage';
import AboutUsPage from './views/AboutUsPage';
import ContactPage from './views/ContactPage';
import DetailPage from './views/DetailPage';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import ListCountries from './views/ListCountries';

export default function App () {

  return(
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/countries">
              <ListCountries />
            </Route>
            <Route path="/searchresults">
              <SearchResults />
            </Route>
            <Route path="/countryitem">
              <DetailPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/aboutus">
              <AboutUsPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/homepage">
              <HomePage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
  );
}
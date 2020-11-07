import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Splash from '../components/Splash';
import Adopt from '../components/Adopt';
import PetDisplay from '../components/PetDisplay';


function Root() {
  return (
    <Router>
      <Header />
      <Route path='/'component={Splash} exact />
      <Route path='/adopt'component={Adopt} exact />
      <Route path='/pets'component={PetDisplay} exact />
      <Footer />
    </Router>
  );
}

export default Root

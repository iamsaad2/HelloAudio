import React from 'react';
import './App.css';
import Header from './components/Header';
import './fonts/Montserrat-Black.ttf';
import './fonts/Oswald-Regular.ttf';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='background'>
      <Header />
      <Buttons />
      <Footer />
    </div>
  );
};

export default App;

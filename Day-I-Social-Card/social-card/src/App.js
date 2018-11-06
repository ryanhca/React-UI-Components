import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className='card'>
      <HeaderContainer />
      <CardContainer />
      <Footer  shares='6' likes='4' />
    </div>
  );
};

export default App;

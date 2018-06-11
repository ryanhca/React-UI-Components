import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <ImageThumbnail />
      <div className="container">
        <HeaderContainer />
        <CardContainer />
        <FooterContainer />
      </div>
    </div>
  );
};

export default App;

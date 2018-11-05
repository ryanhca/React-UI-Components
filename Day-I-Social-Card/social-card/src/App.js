import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <a href='https://www.reactjs.org'><CardContainer /></a>
    </React.Fragment>
  );
};

export default App;

import React from 'react';
import './App.css';
import Nav from './Nav/Nav.js'
import ContentWrapper from './Containers/ContentWrapper/ContentWrapper.js'
import Footer from './Containers/Footer/Footer.js'

function App() {
  return (
    <div className="App">
   
      <ContentWrapper/>
      <Footer/>
    </div>
  );
}

export default App;

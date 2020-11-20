import React from 'react';
import './App.css';
import './ResponsiveMediaQuery/DesktopDesign.css';
import './ResponsiveMediaQuery/TabletDesign.css';
import './ResponsiveMediaQuery/MobileDesign.css';
import './ResponsiveMediaQuery/OtherQuery.css';

import Home from './components/Home/Home/Home';

function App() {
  return (
    <>
      <div id="App-bg"></div>
      <div className="App">
        <Home></Home>
      </div>
    </>
  );
}

export default App;

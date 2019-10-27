import React from 'react';
import './App.css';
import Ascii from './Ascii';
import Page001 from './Page001';
import Page002 from './Page002';
import Page003 from './Page003';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="subpage">
          <Ascii />
          <Page001 />
          <Footer />
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Ascii />
          <Page002 />
          <Footer />
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Ascii />
          <Page003 />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

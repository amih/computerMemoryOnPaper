import React from 'react';
import './App.css';
import Ascii from './Ascii';
import Page001 from './Page001';
import Page002 from './Page002';
import Page003 from './Page003';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="subpage">
          <Ascii />
          <Page001 />
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Ascii />
          <Page002 />
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Ascii />
          <Page003 />
        </div>
      </div>
    </div>
  );
}

export default App;

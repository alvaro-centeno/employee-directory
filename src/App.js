import React from 'react';
import Main from './components/Main';
import Jumbotron from './components/Jumbotron';


function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Jumbotron />
          </div>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;

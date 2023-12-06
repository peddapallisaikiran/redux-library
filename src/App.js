// import logo from './logo.svg';
import React from 'react';
import './App.css';
import BookContainer from './components/Bookcontainer';
// import Props from './components/Props';
import { Provider } from 'react-redux';
import store from './Redux-library/store';

function App() {
  return (
    <div className="App">
      {/* {/* <h1>Hello Redux project</h1> */}
      <Provider store={store}>
        <BookContainer/>
      </Provider>
      
      {/* <Props title='Javascript' text='javascript1'/>
      <Props title='React' text='React2'/> */}
    </div>
  );
}

export default App;

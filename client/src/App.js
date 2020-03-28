import React from 'react';
import './App.css';
import Library from './library';
import store from './store';
import { Provider } from 'react-redux';
import { Animated } from "react-animated-css";
import AboutMe from './aboutMe';

function App() {
  return (
    <Provider store={store}>
      <AboutMe />
      <Animated animationin="bounceInDown" isvisible="true">
        <h1>My library @ <span className="standOut">React</span>.
        </h1>
      <p>Heard of a good book? Keep it here for when you need it.</p>
      </Animated>
      <div className="App">
        <Library />
      </div>
    </Provider>
  );
}

export default App;

import React, {setState} from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Animated } from "react-animated-css";
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [state, setState] = React.useState({
    Images: true,
    Videos: true,
    Icons: true,
    Fonts:true
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name] : event.target.checked});

  };

  const { Images, Videos, Icons, Fonts } = state;

  return (
    <Provider store={store}>
      <Router>
        <Animated animationin="slideInDown" isvisible="true">
          <section className="menu">
            <h1>The Place</h1>
            <p>Everything's here</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={Images} onChange={handleChange} name="Images" />}
                label="Images"
              />
              <FormControlLabel
                control={<Checkbox checked={Videos} onChange={handleChange} name="Videos" />}
                label="Videos"
              />
              <FormControlLabel
                control={<Checkbox checked={Icons} onChange={handleChange} name="Icons" />}
                label="Icons"
              />
            <FormControlLabel
                control={<Checkbox checked={Fonts} onChange={handleChange} name="Fonts" />}
                label="Fonts"
              />
            </FormGroup>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul> */}
          </section>
        </Animated>

        <Switch>
          <Route path="/about">
            <div className="main">Acerca de</div>
          </Route>
          <Route path="/users">
            <div className="main">Usuarios</div>
          </Route>
          <Route path="/">
            <Main filters={state}/>
          </Route>
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;

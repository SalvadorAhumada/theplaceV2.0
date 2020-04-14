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
    images: false,
    videos: false,
    icons: false,
    fonts:false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { images, videos, icons, fonts } = state;

  return (
    <Provider store={store}>
      <Router>
        <Animated animationin="slideInDown" isvisible="true">
          <section className="menu">
            <h1>The Place</h1>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={images} onChange={handleChange} name="images" />}
                label="Images"
              />
              <FormControlLabel
                control={<Checkbox checked={videos} onChange={handleChange} name="videos" />}
                label="Videos"
              />
              <FormControlLabel
                control={<Checkbox checked={icons} onChange={handleChange} name="icons" />}
                label="Icons"
              />
            <FormControlLabel
                control={<Checkbox checked={fonts} onChange={handleChange} name="fonts" />}
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
            <Main/>
          </Route>
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;

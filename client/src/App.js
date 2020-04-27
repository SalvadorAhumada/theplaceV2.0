import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Animated } from "react-animated-css";
import Main from './Main';
import Add from './Add';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import AddLink from './AddLink';
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

  const [user, setUser] = React.useState({
    user:null
  });

  const [show, setShow] = React.useState({
    show:false
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name] : event.target.checked});

  };

  const responseGoogle = response => {
    setUser({
      user:response.googleId
    })
  }

  const logout = () => {
    console.log('logged out!')
  }

  const { Images, Videos, Icons, Fonts } = state;

  const loggedin = user.user ? <GoogleLogout
  buttonText="Logout"
  client_id="996679026839-eflfc0lj1fo8uk18kuehi1hj83s79l3g.apps.googleusercontent.com"
  onLogoutSuccess={logout}
>
</GoogleLogout>  : <GoogleLogin
  clientId="996679026839-eflfc0lj1fo8uk18kuehi1hj83s79l3g.apps.googleusercontent.com"
  buttonText="Login"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
  isSignedIn={true}
  />  

  const modalFunction = x => {
    setShow({ show: x });
  };

  const closeFunction = x => {
    setShow({ show: x });
  };

  const openForm = show.show ? <AddLink closeCallBack={closeFunction}/> : null;

  return (
    <Provider store={store}>
      <Router>
        <Animated animationin="slideInDown" isvisible="true">
          <nav className="menu animated slideInDown">
            <h1><span>the</span><span>place</span></h1>
            <Add modalCallback={modalFunction}/>
            {/*<FormGroup>
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
            </FormGroup>*/}
          </nav>
        </Animated>

        <Switch>
          <Route path="/about">
            <div className="main">Acerca de</div>
          </Route>
          <Route path="/users">
            <div className="main">Usuarios</div>
          </Route>
          <Route path="/">
            <div className="main-wrapper">
            <div className="login-google">
                {loggedin}
            </div>
              <Main filters={state} user={user}/>
              {openForm}
            </div>
          </Route>
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;

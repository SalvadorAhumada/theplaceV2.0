import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Main from './Main';
import Add from './Add';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import AddLink from './AddLink';
import FilterList from "@material-ui/icons/FilterList";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
    Fonts:true,
    Favs:false
  });

  const [user, setUser] = React.useState({
    user:null
  });

  const [show, setShow] = React.useState({
    show:false
  });

  const handleChange = (event) => {
    if(user.user === null) {
      const MySwal = withReactContent(Swal)

      MySwal.fire({
        icon:'error',
        title:'Whoops!',
        html: `Please login to see your favorites!`,
        showConfirmButton:true,
        confirmButtonText:'Okey!',
      })
      return;
    }
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

  const handleFilters = () => {
    if(document.getElementById("filter").style.display == "block") {
      document.getElementById("filter").style.display = "none"
    } else  {
      document.getElementById("filter").style.display = "block"
    }
  }


  const { Images, Videos, Icons, Fonts, Favs } = state;

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
        <div className="nav-wrapper">
          <nav className="menu animated slideInDown">
            <h1><span>the</span><span>place</span></h1>
            <FormGroup id="filter">
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
              <FormControlLabel
                control={<Checkbox checked={Favs} onChange={handleChange} name="Favs" />}
                label="Favs"
              />
            </FormGroup>
            <div className="filter" onClick={handleFilters}>
              <FilterList />
            </div>
            <Add modalCallback={modalFunction}/>
          </nav>
        </div>

        <Switch>
          <Route path="/about">
            <div className="main">Acerca de</div>
          </Route>
          <Route path="/users">
            <div className="main">Usuarios</div>
          </Route>
          <Route path="/">
            <div className="main-wrapper">
            <p className="menu animated fadeIn">A collection of Free assests for your website. You can login with your email account to save your favorites.</p>
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

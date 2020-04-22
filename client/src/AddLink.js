import React, {useEffect} from 'react';
import { Animated } from "react-animated-css";
import 'materialize-css';
import './AddLink.css';

function AddLink() {

  return (
    <Animated animationin="slideInDown" className="fadeIn-wrapper" isvisible="true">
      <div className="form-wrapper">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <input id="Name" type="text" className="validate"/>
                    <label htmlFor="Name">Your name</label>
                </div>
                 <div className="input-field col s12">
                    <input id="Email" type="Email" className="validate"/>
                    <label htmlFor="Email">Email</label>
                </div>
                <div className="input-field col s12">
                    <input id="url" type="url" className="validate"/>
                    <label htmlFor="url">URL</label>
                </div>
            </div>
            <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Category</a>
            <ul id='dropdown1' className='dropdown-content'>
            <li><a href="#!">Images</a></li>
            <li><a href="#!">Videos</a></li>
            <li><a href="#!">Icons</a></li>
            <li><a href="#!">Fonts</a></li>
            </ul>
            <p><button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
            </button></p>
        </form>
      </div>
    </Animated>
  );
}

export default AddLink;

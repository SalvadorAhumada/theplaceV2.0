import React from 'react';
import { Animated } from "react-animated-css";
import 'materialize-css';
import './AddLink.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function AddLink() {

  const [category, setCategory] = React.useState({
    category:null
  });

  const [user, setUser] = React.useState({
    name:null,
  });

  const [email, setEmail] = React.useState({
    name:null,
  });

  const options = [
    'Images', 'Videos', 'Fonts', 'Icons','Other'
  ];

  const defaultOption = options[0];

  const onSelect = e => {
    setCategory({category:e.value});
  }

  const sendLink = e => {
    e.preventDefault()
    console.log(category.category, user.name)
  }

  const nameHandler = e => {
    const name = e.target.value

    setUser({name});
  }


  return (
    <Animated animationin="slideInDown" className="fadeIn-wrapper" isvisible="true">
      <div className="form-wrapper">
        <form className="col s12" onSubmit={sendLink}>
          <p>If you know a link that want to share please let us know. Name and email are optional.</p>
            <div className="row">
                <div className="input-field col">
                    <label htmlFor="Name">Your name</label><br></br>
                    <input onChange={nameHandler} id="Name" type="text" className="validate"/>
                </div>
                 <div className="input-field col">
                    <label htmlFor="Email">Email</label><br></br>
                    <input id="Email" type="Email" className="validate"/>
                </div>
                <div className="input-field col">
                    <label htmlFor="url">URL</label><br></br>
                    <input id="url" type="url" className="validate"/>
                </div>
            </div>
            <label htmlFor="Email">Category</label><br></br>
            <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
            <p><button className="btn waves-effect waves-light" type="submit" name="action" onclick={sendLink}>Submit
            <i className="material-icons right">send</i>
            </button></p>
        </form>
      </div>
    </Animated>
  );
}

export default AddLink;

import React, { useState } from 'react';
import { Animated } from "react-animated-css";
import 'materialize-css';
import './AddLink.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function AddLink(props) {

  const [category, setCategory] = useState({
    category:null
  });

  const [user, setUser] = useState({
    name:null,
  });

  const [email, setEmail] = useState({
    email:null,
  });

  const [url, setUrl] = useState({
    url:null
  });

  const [submit, setSubmit] = useState({
    text:'Submit'
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

    setSubmit({text:'Sending...'})
    var message = {
      name: user.name || 'n/a',
      email: email.email,
      url:url.url,
      category:category.category
  };
   
  emailjs.send('gmail', 'template_YxMehNmU', message, 'user_ocr7zo32SbePhG9my4G31')
      .then(response => {
        setSubmit({text:'Sent!'})
        
        const MySwal = withReactContent(Swal)

        MySwal.fire({
          icon:'success',
          title:'Thanks!',
          html: `Your link has been sent.`,
          showConfirmButton:true,
          showLoaderOnConfirm:true,
          confirmButtonText:'Neat!',
        }).then(res => {
          handleClose(false)
        })
      }, error => {
         console.log('FAILED...', error);
      });
  }

  const nameHandler = e => {
    const name = e.target.value;

    setUser({name});
  }

  const urlHandler = e => {
    const url = e.target.value;

    setUrl({url})
  }

  const emailHandler = e => {
    const email = e.target.value;

    setEmail({email})
  }

  const handleClose = x => {
    props.closeCallBack(x);
  }


  return (
    <Animated animationin="slideInDown" className="fadeIn-wrapper" isvisible="true">
      <div className="form-wrapper">
        <form className="col s12" onSubmit={sendLink}>
          <div className="close-wrapper">
            <div className="close" onClick={() => handleClose(false)}>×</div>
          </div>
          <p>If you know a link that want to share please let us know. Name and email are optional.</p>
            <div className="row">
                <div className="input-field col">
                    <label htmlFor="Name">Your name</label><br></br>
                    <input onChange={nameHandler} id="Name" type="text" className="validate"/>
                </div>
                 <div className="input-field col">
                    <label htmlFor="Email">Email</label><br></br>
                    <input onChange={emailHandler} id="Email" type="Email" className="validate"/>
                </div>
                <div className="input-field col">
                    <label htmlFor="url">URL</label><br></br>
                    <input onChange={urlHandler} id="url" type="url" required className="validate"/>
                </div>
            </div>
            <label htmlFor="Email">Category</label><br></br>
            <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
            <p className="btn">
              <button type="submit" name="action" onclick={sendLink}>{submit.text}</button>
            </p>
        </form>
      </div>
    </Animated>
  );
}

export default AddLink;

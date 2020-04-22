import React from 'react';
import './App.css';
import { Animated } from "react-animated-css";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import AddLink from './AddLink';

function AddButton() {

    const [state, setState] = React.useState({
        show:false
      });

    const handleClose = () => {

        setState({
            show:!state.show
        })
    };
    
    const [form, setForm] = React.useState({
        showForm:false
    });

    const openForm = state.show ? <AddLink/> : null;
        
    return (
    <Animated animationin="slideInDown" animationInDelay={2000} isvisible="true">
        <div onClick={handleClose} title="Send suggestion." className="Add">
            {state.show ? <Close onClick={handleClose}/> :  <Add onClick={handleClose}/>}
        </div>
        {openForm}
    </Animated>
  );
}

export default AddButton;

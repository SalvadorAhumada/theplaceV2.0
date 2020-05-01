import React from 'react';
import './App.css';
import { Animated } from "react-animated-css";
import Add from "@material-ui/icons/Add";

function AddButton(props) {

    const handleModal = x => {
        props.modalCallback({ show: x });
      };
        
    return (
    <Animated animationin="slideInDown" animationInDelay={1000} isvisible="true">
        <div onClick={() => handleModal(false)} title="Send suggestion." className="Add">
            {<Add />}
        </div>
    </Animated>
  );
}

export default AddButton;

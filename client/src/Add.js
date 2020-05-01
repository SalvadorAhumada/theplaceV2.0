import React from 'react';
import './App.css';
import { Animated } from "react-animated-css";
import Add from "@material-ui/icons/Add";

function AddButton(props) {

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

    const handleModal = x => {
        props.modalCallback({ show: x });
      };
        
    return (
    <Animated animationin="slideInDown" animationInDelay={1000} isvisible="true">
        <div onClick={handleClose} title="Send suggestion." className="Add">
            {<Add onClick={() => handleModal(false)}/>}
        </div>
    </Animated>
  );
}

export default AddButton;

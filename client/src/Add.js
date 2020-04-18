import React from 'react';
import './App.css';
import { Animated } from "react-animated-css";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";

function App() {

    const [state, setState] = React.useState({
        show:false
      });

    const handleClose = () => {

        setState({
            show:!state.show
        })
    }
        
    return (
    <Animated animationin="slideInDown" animationInDelay={2000} isvisible="true">
        <div onClick={handleClose} title="Send suggestion." className="Add">
            {state.show ? <Close/> :  <Add/>}
        </div>
    </Animated>
  );
}

export default App;

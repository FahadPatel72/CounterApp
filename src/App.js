import { useState } from "react";
import "./App.css";

function App() {

  const [value,setValue] = useState(0);

  function decValue(){
    setValue(value-1);
  }

  function incValue(){
    setValue(value+1);
  }

  function resetValue(){
    setValue(0);
  }

  return (

    <div className="wrapper">
    
    <div className="title">
     Increment Or Decrement
    </div>
    
    <div className="innerContainer">

    <button className="decHandler" onClick={decValue}>
     -
    </button>

    <div className="setVal">
    {value}
    </div>

    <button className="incHandler" onClick={incValue}>
     +
    </button>

    </div>

    <div className="btn-class">
    <button type="submit" className="btn" onClick={resetValue}>
      Reset
    </button>
    </div>

    </div>

  );


}

export default App;

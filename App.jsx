
import React from "react";
import  SlotM from "./SlothMach";

const App = () => {
return (
  <>
    <h1 className="heading_style">
      🎰 welcome to <span style = {{fontWeight:"bold"}}>Slot machine game</span> 🎰
    </h1>
    <div className ="slotmachine"/>
    <SlotM x = '😄' y = '😄' z = '😄'/>
    <SlotM x = '💯' y = '💯' z = '💯'/>
    <SlotM x = '🍎' y = '🍎' z = '🍎'/>
    
  </>
);
};

export default App;

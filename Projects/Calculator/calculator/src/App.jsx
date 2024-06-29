
import { useState } from 'react';
import './App.css'
import Display from './components/display.jsx';
import MainBody from './components/main-body.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const Items=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
  let [TextDisplay,SetTextDisplay]=useState("");
const EventHandler=(event,item)=>{
  let NewTextDisplay;
  if(item==="C"){
    NewTextDisplay="";
  }
  else if(item!=="="){
    NewTextDisplay=TextDisplay+item;
  }
  else{
    NewTextDisplay=eval(TextDisplay);
  }
  SetTextDisplay(NewTextDisplay);
};

  return (
    <>
    <div className='parent-container'>
      <h1>Calculator</h1>
      <Display Value={TextDisplay}></Display>
      <MainBody items={Items} EventHandler={EventHandler}></MainBody>
    </div>
    </>
  )
}

export default App

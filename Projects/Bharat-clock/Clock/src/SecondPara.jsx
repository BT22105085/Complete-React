import { useState,useEffect } from "react";

function SecondPara(){
  const [date,setDate]=useState(new Date());
  useEffect(()=>{
    const intervalId=setInterval(()=>{
    setDate(new Date());
    },1000);

    return ()=>clearInterval(intervalId);
  },[])
  return <p className="lead">This is the current time : 
    {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
}

export default SecondPara
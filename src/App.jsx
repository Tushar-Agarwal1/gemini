import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components\'/Form'
import SendMsg from './Components\'/SendMsg'
import ReceiveMsg from './Components\'/ReceiveMsg'

export default function App() {

  const [msg,setMsg]=useState("");

  const [msgList,setMsgList]=useState([]);
  const send=async ()=>{

    console.log(msg);
    if(!msg){
      return;
    }
    setMsgList(prevMsgList => [...prevMsgList, {msg,recived:false}]);
    const response = await fetch('https://gemini-backend-38mc.onrender.com/suitabilityAssesment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ msg: msg }) // Assuming your backend expects the message in this format
    }).then(res=>res.text());
    setMsgList(prevMsgList => [...prevMsgList, {msg:response,received:true}]);
    
    setMsg("");
    console.log(msgList);
    console.log(response);
  }

  const typeMsg=(e)=>{
    //console.log(e);
    setMsg(e.target.value);

  }

  return (<>
  
  <div className='App' style={{backgroundColor:"white"}}>

 

      {msgList.map((val)=><SendMsg msg={val.msg} received={val.received}/>)}
    <div className='msg-send'>
 
     <input type="text-lg" placeholder={"Type your Message"} className="input input-bordered w-full max-w" value={msg} onChange={(e)=>setMsg(e.target.value)} />
 <button className="btn btn-success" onClick={send}>Success</button>

 </div>



 
 </div>

 
 
  
    
  
  </>
  )
}

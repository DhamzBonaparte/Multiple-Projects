import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react"

export default function QR(){
    const[now,setNow]=useState('');
    const[change,setChange]=useState('');

    function handleClick(){
        setChange(now);
    }

    function handleChange(e){
        setNow(e.target.value)
    }

    return(
        <>
        <div className="task">
            <input type="text" value={now} placeholder="Enter value" onChange={(e)=>handleChange(e)}/>
            <button onClick={(e)=>handleClick(e)} >Create QR</button>
            <QRCodeCanvas size="400" value={change}/>
        </div>
        </>
    )
}
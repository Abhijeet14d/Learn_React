import { useState, useEffect } from "react";

export default function Useeffect(){
    const [count, setcount] = useState(0);
    const [othercount, setothercount] = useState(0);

    useEffect(()=>{
        document.title = `${othercount} new messages!`;
    },[othercount]);

    return (
        <div className="text-white">
            <h4>{count} new message!</h4>
            <button onClick={()=> setcount(count+1)} className="bg-green-400 text-white px-3 py-2 m-2 rounded">Increase</button>
            <h4>Other count : {othercount}</h4>
            <button onClick={()=> setothercount(count+5)} className="bg-green-400 text-white px-3 py-2 m-2 rounded">Increase</button>
        </div>
    );
}


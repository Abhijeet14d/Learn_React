import { useState, useCallback, useEffect, useRef } from "react";

function PassWord(){
    const [length, setlength] = useState(8);
    const [numberAllowed, setnumberAllowed] = useState(false);
    const [charAllowed, setcharallowed] = useState(false);
    const [password, setpassword] = useState("");

    // ref hook
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=>{
        let password = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*+=-_~"

        for(let i = 1;i<= length;i++){
            let char = Math.floor(Math.random()* str.length +1)
            password += str.charAt(char)
        }

        setpassword(password)

    } , [length, charAllowed, numberAllowed, setpassword])

    const copyPasswordtoClipboard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,length)
        window.navigator.clipboard.writeText(password)
    },[password, length])

        useEffect(() =>{
            passwordGenerator()
        },[length,numberAllowed,charAllowed,passwordGenerator])

    return(
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
            <h1 className="text-white text-center my-3">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input 
                    type="text" 
                    value={password} 
                    className="outline-none w-full py-1 px-3" placeholder="Password" 
                    readOnly
                    ref={passwordRef}
                />

                <button onClick={copyPasswordtoClipboard} className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={8}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) =>{setlength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type = "checkbox"
                        defaultChecked = {numberAllowed}
                        id="numberInput"
                        onChange={()=>{
                            setnumberAllowed((prev => !prev));
                        }} 
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type = "checkbox"
                        defaultChecked = {charAllowed}
                        id="characterInput"
                        onChange={()=>{
                            setcharallowed((prev => !prev));
                        }} 
                    />
                    <label htmlFor="characterInput">Character</label>
                </div>
            </div>
        </div>
    );
}

export default PassWord;
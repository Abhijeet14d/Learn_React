import { useState } from "react";

function PassWord(){
    const [length, setlength] = useState(8);
    const [numberAllowed, setnumberAllowed] = useState(false);
    const [charAllowed, setcharallowed] = useState(false);
    const [password, setpassword] = useState
    return(
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
    );
}

export default PassWord;
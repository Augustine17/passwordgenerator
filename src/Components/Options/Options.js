import React, { useState } from 'react'
import './Options.css'

export const Options = (props) => {
    const [length, setLength] = useState(9);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generate = () =>{
        if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols){
            alert("--All Checks are empty--");
            return
        }

        if(length>50 || length<8){
            alert("Length out of mentioned range");
            return
        }

        
        let chars = '';
        if(includeUppercase) chars+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(includeLowercase) chars+= 'abcdefghijklmnopqrstuvwxyz';
        if(includeNumbers) chars+= '0123456789';
        if(includeSymbols) chars+= '!@#$%^&*()-_+=<>?';

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
          }

        props.passFunc(password)
    }
  return (
    <div className='options_form'>
        <div className='optionsGroup div2'>
            <label>Select Password length<strong>(**8-50 characters**)</strong></label>
            <input type="number" id="input_length" value={length} onChange={(e) => {
                setLength(parseInt(e.target.value))
                props.passFunc("")
                }}/>
        </div>
        <br/>
        <div className='optionsGroup'>
            <input type="checkbox" checked={includeUppercase} onChange={(e) => {
                setIncludeUppercase(e.target.checked)
                props.passFunc("")
            }}/>
            <label>Include upper case</label>
        </div>
        <div className='optionsGroup'>
            <input type="checkbox" checked={includeLowercase} onChange={(e) => {
                setIncludeLowercase(e.target.checked)
                props.passFunc("")
            }}/>
            <label>Include lower case</label>
        </div>
        <div className='optionsGroup'>
            <input type="checkbox" checked={includeNumbers} onChange={(e) => {
                setIncludeNumbers(e.target.checked)
                props.passFunc("")
            }}/>
            <label>Include numbers</label>
        </div>
        <div className='optionsGroup'>
            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
            <label>Include symbols</label>
        </div>
        <button onClick={generate}>Generate Password</button>
    </div>
  )
}

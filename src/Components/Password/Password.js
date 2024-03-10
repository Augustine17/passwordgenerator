import React from 'react'
import './Password.css'

export const Password = (props) => {
    const handleCopy = () =>{
        navigator.clipboard.writeText(props.pass)
        alert("Copied")
    }
  return (
    <div className='form_password'>
        <input type='text' disabled value={props.pass} />
        <button onClick={handleCopy}><img src="https://www.freeiconspng.com/thumbs/copy-icon/copy-icon-25.png" alt="copy_im.png" /></button>
    </div>
  )
}

import React from 'react'

function TextArea({label, type = "text", value, setState}) {
  return (
    <div className={`input-box ${value ? "activ" : ""}`}>
        <textarea type={type} value={value} onChange={e => setState(e.target.value)} required/>
        <label>{label}</label>
    </div>
  )
}

export default TextArea

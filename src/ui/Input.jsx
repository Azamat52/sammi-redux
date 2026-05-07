import React from 'react'

function Input({label, type = "text", value, setState}) {
  return (
    <div className={`input-box ${value ? "activ" : ""}`}>
        <input type={type} value={value} onChange={e => setState(e.target.value)} required/>
        <label>{label}</label>
    </div>
  )
}

export default Input

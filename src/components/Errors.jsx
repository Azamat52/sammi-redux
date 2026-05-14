import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

function Errors() {
    const {error} = useSelector((state) => state.auth)
    const AllError = useCallback(() => {
        return Object.keys(error).map((name) => {
            const msg = error[name].join(", ")
            return `${name} - ${msg} `
        })
    }, [error])
    console.log(error && AllError());
    
  return (
    error !== null && <div>Errors</div>
  )
}

export default Errors
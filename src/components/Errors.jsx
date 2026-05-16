import { useCallback } from 'react'
import { useSelector } from 'react-redux'

function Errors() {
  const { error } = useSelector((state) => state.auth);
  if (!error) return null
  const AllErrors = () => {
    return Object.keys(error).map((names) => {
      const msg = error[names].map((a) => a)
      return `${names} - ${msg}`
    })
  }

  return (
    <div className='w-100'>
      {AllErrors()?.map((err) => <div className='border border-danger text-danger w-100 p-2 my-2 rounded' key={err}>{err}</div>)}
    </div>
  )
}

export default Errors;
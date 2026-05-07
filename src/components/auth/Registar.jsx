import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Input from '../../ui/Input'
import { useDispatch } from 'react-redux'
import { failedRegistar, startRegistar } from '../../slice/auth-slice'
// import Authintification from '../../services/Authintification'

function Registar() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startRegistar())
    const newUser = {
        username: username,
        password: password,
        email: email,
      }
    try {
      // Authintification.CreateUSer(newUser)
      navigate("/")
    } catch (error) {
      dispatch(failedRegistar(error))
    }
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Logo</h1>
      <Input label={"Username"} type={"text"} value={username} setState={setUsername} />
      <Input label={"Email"} type={"email"} value={email} setState={setEmail} />
      <Input label={"Password"} type={"password"} value={password} setState={setPassword} />
      <button type='submit'>Registar</button>
      <p>You have an account? <Link to="/login" className='on_hover'>Login</Link></p>
    </form>
  )
}

export default Registar

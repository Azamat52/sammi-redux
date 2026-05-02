import { useState } from 'react'
import { Link } from 'react-router'
import Input from './Input'

function Registar() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='form'>
      <h1>Logo</h1>
      <Input label={"Username"} type={"text"} value={username} setState={setUsername}/>
      <Input label={"Email"} type={"email"} value={email} setState={setEmail}/>
      <Input label={"Password"} type={"password"} value={password} setState={setPassword}/>
      <button>Registar</button>
      <p>You have an account? <Link to="/login" className='on_hover'>Login</Link></p>
    </div>
  )
}

export default Registar

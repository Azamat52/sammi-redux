import {useState} from 'react'
import Input from './Input'
import { Link } from 'react-router'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className='form'>
      <h1>Logo</h1>
      <Input label={"Email"} type={"email"} value={email} setState={setEmail}/>
      <Input label={"Password"} type={"password"} value={password} setState={setPassword}/>
      <button>Login</button>
      <p>Do you have an account? <Link to="/registar" className='on_hover'>Registar</Link></p>
    </div>
  )
}

export default Login

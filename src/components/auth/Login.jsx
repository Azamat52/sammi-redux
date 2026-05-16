import { useEffect, useState } from 'react'
import Input from '../../ui/Input'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ClearError, failedLogin, startLogin, succesLogin } from '../../slice/auth-slice'
import Authintification from '../../services/Authintification'
import Errors from './../Errors';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { isLoading, loggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginHandler = async (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(startLogin())
    try {
      const response = await Authintification.LoginUser(user)
      dispatch(succesLogin(response.user))
    } catch (error) {
      dispatch(failedLogin(error.response.data.errors))
    }
  }
  useEffect(() => {
    dispatch(ClearError())
  }, [])

  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [loggedIn])
  return (
    <form className='form fade-page slide-top' onSubmit={loginHandler}>
      <h1>Please login</h1>
      <Errors />
      <Input label={"Email"} type={"email"} value={email} setState={setEmail} />
      <Input label={"Password"} type={"password"} value={password} setState={setPassword} />
      <button type='submit' disabled={isLoading}>Login</button>
      <p>You don't have an account? <Link to="/registar" className='on_hover'>Registar</Link></p>
    </form>
  )
}

export default Login

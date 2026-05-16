import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Input from '../../ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { ClearError, failedRegistar, startRegistar, succesRegistar } from '../../slice/auth-slice'
import Authintification from '../../services/Authintification'
import Errors from '../Errors'

function Registar() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { isLoading, error, loggedIn } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(startRegistar())
    const newUser = { username, email, password }
    try {
      const response = await Authintification.CreateUser(newUser)
      dispatch(succesRegistar())
      navigate("/login")
    } catch (error) {
      dispatch(failedRegistar(error.response.data.errors))
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
    <form className='form fade-page slide-top' onSubmit={handleSubmit}>
      <h1>Please registar</h1>
      <Errors />
      <Input label={"Username"} type={"text"} value={username} setState={setUsername} />
      <Input label={"Email"} type={"email"} value={email} setState={setEmail} />
      <Input label={"Password"} type={"password"} value={password} setState={setPassword} />
      <button type='submit' disabled={isLoading}>{isLoading ? "Loading..." : "Registar"}</button>
      <p>You have an account? <Link to="/login" className='on_hover'>Login</Link></p>
    </form>
  )
}

export default Registar

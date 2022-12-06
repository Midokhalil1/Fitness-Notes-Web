import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup } from "firebase/auth"
  import { useNavigate } from "react-router-dom";
  import { Button, Checkbox, Form, Input } from "antd";
  import logo1 from '../assets/logo1.png'
  import '../assets/Styles.css'



  const firebaseConfig = {
    apiKey: "AIzaSyBAG6pJYsHxHs6STxAGWZDldgtm1e4em5s",
    authDomain: "my-fitness-notes-frontend.firebaseapp.com",
    projectId: "my-fitness-notes-frontend",
    storageBucket: "my-fitness-notes-frontend.appspot.com",
    messagingSenderId: "146775143479",
    appId: "1:146775143479:web:e5ca96d4c424c2ecaefbb2"
  };

export default function Login({ setUser }) {
   const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    const app = initializeApp(firebaseConfig) // connects to Firebase
    const auth = getAuth(app) // connects us to Firebase Auth
    const response = await signInWithEmailAndPassword(auth, email, password)
      .catch(alert)
    setUser(response.user)
    navigate('/Notes')
  }
  const handleGoogleLogin = async () => {
    const app = initializeApp(firebaseConfig) // connects to Firebase
    const auth = getAuth(app) // connects us to Firebase Auth
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
      .catch(alert)
    setUser(response.user)
    navigate('/Notes')

  }
  return (
    <>

<div className="logo-container">
              <img src={logo1} alt=""className="logo1" />
            </div>
   
      <h1>Login</h1>
      <Form
      name="basic"
      labelCol={{
        span: 9,
      }}
      wrapperCol={{
        span: 7,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleLogin}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      {/* <form onSubmit={handleLogin}> */}
        {/* <label htmlFor="email">Email:{' '}
          <input type="email" name="email"
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder="yourname@domain.com" />
        </label> */}
        <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input value={email} onChange={e => setEmail(e.target.value)}/>
      </Form.Item>
        <br />
        <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Item>
      {/* <label htmlFor="password">Password:{' '}
          <input type="password" name="password"
            value={password} onChange={e => setPassword(e.target.value)}
            placeholder="•••••••" />
        </label> */}
        <br />
        <Form.Item
        wrapperCol={{
          offset: 16,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {/* <Link href="/sign-up" variant="body2">
            {"Don't have an account yet? Sign Up"}
          </Link> */}
        </Form.Item>
        {/* <button type="submit">Login</button> */}
      {/* </form> */}
      </Form>
      <br />
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </>
  )
}
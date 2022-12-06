import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyBAG6pJYsHxHs6STxAGWZDldgtm1e4em5s",
    authDomain: "my-fitness-notes-frontend.firebaseapp.com",
    projectId: "my-fitness-notes-frontend",
    storageBucket: "my-fitness-notes-frontend.appspot.com",
    messagingSenderId: "146775143479",
    appId: "1:146775143479:web:e5ca96d4c424c2ecaefbb2"
  };
  
export default function Signup({ setUser }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignup = async (e) => {
    e.preventDefault()
    const app = initializeApp(firebaseConfig) // connects to Firebase
    const auth = getAuth(app) // connects us to Firebase Auth
    const response = await createUserWithEmailAndPassword(auth, email, password)
      .catch(alert)
    setUser(response.user)
    navigate('/Notes')
  }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email:{' '}
          <input type="email" name="email"
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder="yourname@domain.com" />
        </label><br />
        <label htmlFor="password">Password:{' '}
          <input type="password" name="password"
            value={password} onChange={e => setPassword(e.target.value)}
            placeholder="•••••••" />
        </label><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}
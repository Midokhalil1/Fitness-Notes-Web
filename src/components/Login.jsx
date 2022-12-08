import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import logo1 from "../assets/logo1.png";
import "../assets/Styles.css";

const firebaseConfig = {
  apiKey: "AIzaSyBAG6pJYsHxHs6STxAGWZDldgtm1e4em5s",
  authDomain: "my-fitness-notes-frontend.firebaseapp.com",
  projectId: "my-fitness-notes-frontend",
  storageBucket: "my-fitness-notes-frontend.appspot.com",
  messagingSenderId: "146775143479",
  appId: "1:146775143479:web:e5ca96d4c424c2ecaefbb2",
};
/* im  creating two usestate variables and im setting the
 state to an initial value of nothing so that later on in my code i can set 
 them to the users response */
export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    // e.preventDefault();
    const app = initializeApp(firebaseConfig); // connects to Firebase
    const auth = getAuth(app); // connects us to Firebase Auth
    const response = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).catch(alert);
    setUser(response.user);
    navigate("/Notes");
  };
  const handleGoogleLogin = async () => {
    const app = initializeApp(firebaseConfig); // connects to Firebase
    const auth = getAuth(app); // connects us to Firebase Auth
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider).catch(alert);
    setUser(response.user);
    navigate("/Notes");
  };
  return (
    <div className="signup-page">
      <div className="logo-container">
        <img src={logo1} alt="" className="logo1" />
      </div>
      <div className="form-container">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className="formItem"
            label="Email"
            name="email"
            rules={[
              {
                required: false,
                message: "Please input your email!",
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            className="formItem"
            label="Password"
            name="password"
            rules={[
              {
                required: false,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          {/* <label htmlFor="password">Password:{' '}
          <input type="password" name="password"
            value={password} onChange={e => setPassword(e.target.value)}
            placeholder="•••••••" />
        </label> */}

          <Form.Item className="formItem">
            <Button className="submit-btn" type="primary" htmlType="submit">
              Submit
            </Button>
            {/* <Link href="/sign-up" variant="body2">
            {"Don't have an account yet? Sign Up"}
          </Link> */}
          </Form.Item>
          {/* <button type="submit">Login</button> */}
          {/* </form> */}
        </Form>
      </div>
      <Button className="submit-btn" type="primary" onClick={handleGoogleLogin}>
        Sign in with Google
      </Button>
    </div>
  );
}

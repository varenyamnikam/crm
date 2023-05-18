import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Firebase } from "../../firebase/config";
import Logo from "../../olx-logo.png";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";
import { useGoogleLogin } from "@react-oauth/google";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      history.push("/");
    },
    onError: (err) => {
      console.log("Login Failed", err);
    },
  });
  return (
    <>
      {loading && <RoundLoading />}
      <div>
        <div className="loginParentDiv">
          <img width="200px" height="200px" src={Logo} alt=""></img>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <input
              className="input"
              type="email"
              placeholder="sijeesh@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button>Login</button>
            <button onClick={() => login()}>Google</button>
          </form>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
}
//1039592446485-t6ael103e1vtiprre4i3muhbuvgimpsi.apps.googleusercontent.com
export default Login;

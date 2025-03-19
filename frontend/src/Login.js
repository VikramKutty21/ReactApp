import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";


function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://i.postimg.cc/fyYJH7kk/message.png" alt="" />
        <div className="login__text">
          <h1>Sign in to Chat Room</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
      <div className="login__footer">
        <p>
          Developed by <a>Vikram</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
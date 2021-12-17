import React, { useState } from "react";
import "./Login.css";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  const [title, setTitle] = useState("Sign Up");
  const changeTitle = () => {
    setHasAccount(!hasAccount);
    if (!hasAccount) {
      setTitle("Login");
    } else {
      setTitle("Sign Up");
    }
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <div className="title">{title}</div>
        <label>UserName</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button
                style={{
                  cursor: password && email ? "pointer" : "not-allowed",
                }}
                disabled={!email || !password}
                onClick={handleLogin}
              >
                Sign In
              </button>
              <p>
                Don't have an account ?
                <span onClick={changeTitle}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button
                style={{
                  cursor: password && email ? "pointer" : "not-allowed",
                }}
                disabled={!email || !password}
                onClick={handleSignup}
              >
                Sign Up
              </button>
              <p>
                Have an account ?<span onClick={changeTitle}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;

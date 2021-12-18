import React, { useState, useEffect } from "react";
import "./App.css";
import fire from "./fire";
// import Movie from "./Movie";
import Login from "./Login";
import { MovieState } from "./Context/MovieContext";
// import Hero from "./components/Hero/MainPage";
import MainPage from "./components/Hero/MainPage";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const [dark, setDark] = useState(false);
  const handleTheme = () => {
    setDark(!dark);
    console.log(!dark);
  };
  useEffect(() => {
    authListner();
  }, []);

  const clearInput = () => {
    setUser("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearError();
    clearInput();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
    console.log(user);
  };

  const handleSignup = () => {
    clearError();
    clearInput();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
    // console.log(user);
    // if(!user) console.log(fire.auth.createCustomToken(user));
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  return (
    <div className="App">
      {user ? (
        <MovieState>
          <MainPage
            dark={dark}
            handleTheme={handleTheme}
            user={user}
            handleLogout={handleLogout}
          />
        </MovieState>
      ) : (
        // <Movie user={user} handleLogout={handleLogout} />
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;


import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn ,setIsLoggedIn ] = useState(false);
  const setLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
        <h1>Parent Component</h1>
        <LoginForm isLoggedIn={isLoggedIn} setLogin={setLogin}/>
    </div>
  )
}

export default App

import React, { useState } from "react";
import "./username.css";
import { Button } from "react-bootstrap";

function Username({ type = "text", label }) {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const uname = document.getElementById("username").value;
    if (uname.length > 15) {
      setIsValid(false);
      setName("");
      return;
    } else if (uname === "") {
      sessionStorage.setItem("Username", "Guest");
    } else {
      sessionStorage.setItem("Username", uname);
    }
    setIsValid(true);
    window.location.replace("themes");
  }

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input id="username" type={type} value={name} onChange={handleChange} />
        <label className={name && "filled"}>{label}</label>
        {isValid ? "" : <p id="invalidName">15 characters max!</p>}
        <Button variant="secondary" type="submit">Start</Button>
      </form>
    </div>
  );
}

export default Username;

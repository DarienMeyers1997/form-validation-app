import React, { useState } from "react";

//name email pass
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(setSubmitted(true));
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="email">Email: </label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;

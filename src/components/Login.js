import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventdefault();
    setPassword(event.target.value);
  };

  return (
    <form>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="password"
        value={password || ""}
        onChange={handleSubmit}
      />
      <br />
      <button type="submit">sign in</button>
    </form>
  );
}

export default Login;

import React from "react";

const Login = () => {
  return (
    <>
      <div class="container">
        <div class="card">
          <h6>Login</h6>
          <p>Login to you account</p>
          <form>
            <label for="username">Email</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />

            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

import Logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <>
      <section className="yellow_bg">
        <div className="container">
          <div className="card">
            <div className="switch">
              <div className="item">
                <h6>Login</h6>
                <p>Login to you account</p>
              </div>
              <div className="item ">
                <img src={Logo} alt="tezza" className="tezzaImg" />
              </div>
            </div>

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
      </section>
    </>
  );
};

export default Login;

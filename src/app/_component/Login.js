const Login = () => {
  return (
    <>
      <h1>Restaurant Login Page</h1>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Email id"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;


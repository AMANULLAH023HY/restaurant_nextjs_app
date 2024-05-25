const Signup = () => {
  return (
    <>
      <h1>Restaurant Signup Page</h1>
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
          <input
            className="input-field"
            type="password"
            placeholder="Enter Confirm Password"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Restaurant name"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter city"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Full address"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="number"
            placeholder="Enter contact number"
          />
        </div>
        <div className="input-wrapper">
          <button className="button">SignUp</button>
        </div>
      </div>
    </>
  );
};

export default Signup;

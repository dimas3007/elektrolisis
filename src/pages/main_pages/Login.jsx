import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Masuk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form className="login-content">
          <div className="form-input">
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder="ex. ucode@gmail.com" />
          </div>
          <div className="form-input">
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder="ex. lebih dari 8 karakter" />
          </div>
          <div className="form-input checkbox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Password">
              dengan ini saya menyetujui ketentuan pada website ini
            </label>
          </div>
          <div className="form-action">
            <button className="btn-green">Masuk</button>
            <p>atau</p>
            <button className="btn-white">Daftar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

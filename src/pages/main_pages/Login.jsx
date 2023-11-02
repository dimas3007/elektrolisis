import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGooglePopup } from "../../config/firebase";
import { googleIcon } from "../../data/img";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

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
            <input
              type="text"
              placeholder="ex. ucode@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="ex. lebih dari 8 karakter"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-input checkbox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Password">
              dengan ini saya menyetujui ketentuan pada website ini
            </label>
          </div>
          <div className="form-action">
            <button className="btn-green" onClick={onLogin}>
              Masuk
            </button>
            <p>atau</p>
            <button className="btn-white" onClick={logGoogleUser}>
              <img src={googleIcon} alt="" /> Masuk dengan Google
            </button>
            <Link to={"/daftar"}>
              <button className="btn-white">Daftar</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

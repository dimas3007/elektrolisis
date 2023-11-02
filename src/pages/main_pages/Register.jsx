import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/masuk");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Daftar</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form className="login-content">
          <div className="form-input">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="ex. ucode@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="ex. lebih dari 8 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-input checkbox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Password">
              dengan ini saya menyetujui ketentuan pada website ini
            </label>
          </div>
          <div className="form-action">
            <button className="btn-green" onClick={onSubmit}>
              Daftar
            </button>
            <p>atau</p>
            <Link to={"/masuk"}>
              <button className="btn-white">Masuk</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

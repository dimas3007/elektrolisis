import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGooglePopup } from "../../config/firebase";
import { googleIcon } from "../../data/img";
import Input from "../../layouts/components/Form/Input";
import Notification from "../../layouts/components/Notification";
import { addUser } from "../../store/UsersSlice";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // notification
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState({
    message: "Login gagal, email atau password salah",
    type: "error",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(addUser(user));
        navigate("/", {
          notification: { message: "Login berhasil", type: "success" },
        });
      })
      .catch((error) => {
        // dispatch(deleteUser());
        const errorMessage = error.message;
        if (
          error.code == "auth/invalid-email" ||
          "auth/invalid-login-credentials" ||
          "auth/user-not-found"
        ) {
          setIsOpen(true);
          setTimeout(() => {
            setIsOpen(false);
          }, 3000);
        }
        console.log(error);
      });
  };

  const handleNotifClose = () => {
    setIsOpen(false);
  };

  const logGoogleUser = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithGooglePopup();
      console.log(response);
      dispatch(addUser(response));
      // navigate("/", {
      //   notification: { message: "Login berhasil", type: "success" },
      // });
    } catch (error) {
      dispatch(deleteUser());
      console.error("Gagal autentikasi dengan Google", error);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  return (
    <>
      <Notification
        message={notification.message}
        type={notification.type}
        isOpen={isOpen}
        handleClose={handleNotifClose}
      />
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-header">
            <h1>Masuk</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <form className="login-content">
            <Input
              placeholder="ex. ucode@gmail.com"
              value={email}
              label={"Email"}
              setValue={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="ex. lebih dari 8 karakter"
              value={password}
              label={"Password"}
              type="password"
              setValue={(e) => setPassword(e.target.value)}
            />
            <div className="form-input checkbox">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
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
    </>
  );
};

export default Login;

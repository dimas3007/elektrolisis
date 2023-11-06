import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGooglePopup } from "../../config/firebase";
import { googleIcon } from "../../data/img";
import Input from "../../layouts/components/Form/Input";
import Notification from "../../layouts/components/Notification";

const Register = () => {
  const navigate = useNavigate();

  // notification
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState({
    message: "Login gagal, email atau password salah",
    type: "error",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/masuk", {
          notification: { message: "Login berhasil", type: "success" },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
        console.log(errorCode, errorMessage);
      });
  };

  const logGoogleUser = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithGooglePopup();
      console.log(response);
      navigate("/", {
        notification: { message: "Login berhasil", type: "success" },
      });
    } catch (error) {
      console.error("Gagal autentikasi dengan Google", error);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  const handleNotifClose = () => {
    setIsOpen(false);
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
            <h1>Daftar</h1>
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
              <label htmlFor="Password">
                dengan ini saya menyetujui ketentuan pada website ini
              </label>
            </div>
            <div className="form-action">
              <button className="btn-green" onClick={onSubmit}>
                Daftar
              </button>
              <p>atau</p>
              <button className="btn-white" onClick={logGoogleUser}>
                <img src={googleIcon} alt="" /> Masuk dengan Google
              </button>
              <Link to={"/masuk"}>
                <button className="btn-white">Masuk</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

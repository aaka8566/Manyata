import React, { useState } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "./firebase";
import OtpInput from "otp-input-react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { Spinner, Button } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

import BeatLoaderComp from "./BeatLoader";

const config = {
  apiKey: "AIzaSyADAOaOsW12VUJkhj8_GUL0HpwfKZK8v-U",
  authDomain: "manyata-66d89.firebaseapp.com",
  projectId: "manyata-66d89",
  storageBucket: "manyata-66d89.appspot.com",
  messagingSenderId: "817642194951",
  appId: "1:817642194951:web:8f2b6068c1a277a60002a2",
  measurementId: "G-XW2X9R0VF4",
};
//component is realtime with 50 fethces for otp authentication
const app = initializeApp(config);

const Wrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #ffdede;
  }
  body {
    font-family: "Poppins", sans-serif;
    background: #dea2a2;
  }

  .wrapper {
    max-width: 580px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 1em;
    margin: 1.5% auto 1.5% auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .main-heading {
    color: #212121;
    text-transform: capitalize;
    margin-bottom: 1em;
    text-align: center;
    font-weight: bold;
  }
  .sub-text {
    color: #3d3d3d;
    font-size: 1em;
    margin-top: 2%;
  }

  .form-wrapper {
    width: 45vw;
    margin: 5% auto;
    text-align: center;
    padding: 1em;
  }

  .input-field {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width: 100%;
    padding: 0.5em 0em;
  }

  .input-field label {
    color: rgb(62, 62, 62);
    font-size: 0.8em;
  }
  .input-field input {
    width: 100%;
    padding: 0.75em;
    border-radius: 13px;
    outline: none;
    background: #ffff;
    border: 2px solid #ccc;
    margin-top: 0.5em;
    color: #000;
    font-family: inherit;
  }
  input:focus {
    border: 2px solid #2193b0;
  }

  .form-wrapper button,
  .main-button {
    background: linear-gradient(to right, #b02d21, #ed6d95);
    color: #fff;
    width: 100%;
    padding: 0.75em;
    font-weight: 600;
    font-family: inherit;
    margin-top: 0.75em;
    outline: none;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .form-wrapper button:hover {
    opacity: 0.9;
    background: linear-gradient(to right, #b02d21, #ed6d95);
    transform: scale(1.02);
  }

  .bottom-message {
    width: 100%;
    text-align: center;
    color: #ccc;
    margin-top: 2em;
  }
  .bottom-message h5 {
    font-weight: 400;
  }
  .bottom-message h5 a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
  .heading-flex {
    display: flex;
    justify-content: space-evenly;
  }

  .heading-flex > h1 {
    margin-left: 0.15em;
  }
  img {
    width: 100vw;
  }
`;

const Wrapper2 = styled.div`
  .otpInputClass {
    margin-left: 30vw;
    textalign: center;
  }
  .verifyButton {
    border: 1px solid black;
  }
`;
export const LoginForm = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(true);
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    console.log("onSignup");
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading((prev) => !prev);
        setShowOTP((prev) => !prev);
        console.log(otp);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading((prev) => !prev);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading((prev) => !prev);
        setIsAuth((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  //   const loginSubmit = () => {};
  //   const otpSubmit = () => {};
  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>
      {user ? (
        <h2 className="text-center text-white font-medium text-2xl">
          👍Login Success
        </h2>
      ) : (
        <div className="wrapper">
          {showOTP ? (
            <Wrapper>
              <div className="form-wrapper">
                <div className="heading-flex">
                  <h2 className="main-heading">Login</h2>
                  <h2> or </h2> <h2 className="main-heading">Sign up</h2>
                </div>

                <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"></img>
                <h3 className="sub-text">Sign in using your mobile number.</h3>

                <div className="input-field">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="+91-"
                    name="phone"
                    value={ph}
                    autoComplete="false"
                    minLength="10"
                    required
                    onChange={(e) => setPh(e.target.value)}
                  />
                </div>
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <button
                  className="main-button"
                  type="submit"
                  id="sign-in-button"
                  onClick={onSignup}
                >
                  Continue
                </button>
              </div>
            </Wrapper>
          ) : (
            <Wrapper2>
              <div className="OTP">
                <h1>Enter your OTP</h1>
                <div className="otpInputClass">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    inputStyles={{ border: "1px solid", margin: "1px" }}
                    className="opt-container "
                  ></OtpInput>
                </div>
                {loading && (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="md"
                  />
                )}
                {/* <button onClick={onOTPVerify} className="VerifyButton">
                  Verify
                </button> */}
                <Button
                  isLoading={loading}
                  colorScheme="blue"
                  spinner={<BeatLoaderComp loading={loading} color="white" />}
                >
                  Click me
                </Button>
              </div>
            </Wrapper2>
          )}
        </div>
      )}
    </div>
  );
};

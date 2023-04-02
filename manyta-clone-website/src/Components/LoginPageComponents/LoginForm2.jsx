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
import { useDispatch, useSelector } from "react-redux";
import {
  PinInput,
  PinInputField,
  HStack,
  Flex,
  VStack,
  Box,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import {
  loginFailureAction,
  loginSetPhoneNumber,
  loginSuccessAction,
  loginSetShowOTP,
  loginRequestAction,
  loginSetOTP,
  loginSetUser,
  loginLoading,
  loginLoadingDone,
} from "../../redux/AuthReducer/Action";
import { Navigate } from "react-router-dom";
import { Spinner, Button } from "@chakra-ui/react";

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
    margin: 2.5% auto;
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
  width: 80%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 2%;
  margin-top: 2%;
  background-color: rgb(255, 255, 255);
  border-radius: 20%;
  .OTP {
    text-align: center;
    margin: auto;
  }
  */ .headingOTP {
    font-size: 2rem;
    font-style: italic;
  }

  .verifyButton {
    border: 1px solid black;
  }

  .opt-container {
    margin: auto;
    width: 18vw;
    border: 1px solid black;
  }
  img {
    width: 80%;
    margin: auto;
  }
`;
const Main = styled.div`
  padding: 1%;
  margin: 0;
  background-color: rgb(250, 240, 240);
  width: 100%;
  height: 100vh;
`;
export const LoginForm2 = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [showOTP, setShowOTP] = useState(true);
  // const [user, setUser] = useState(null);
  // const [isAuth, setIsAuth] = useState(false);
  const { showOTP, isLoading, isAuth, user, isError, ErrorMessage } =
    useSelector((state) => state.AuthReducer);
  console.log(showOTP, isLoading, isAuth, user, isError);
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
    // setLoading(true);
    dispatch(loginRequestAction);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // setLoading((prev) => !prev);
        dispatch(loginLoading());
        // setShowOTP((prev) => !prev);
        dispatch(loginSetShowOTP());
        dispatch(loginLoadingDone());
        console.log(otp);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        // setLoading((prev) => !prev);
        dispatch(loginFailureAction(error));
      });
  }

  function onOTPVerify() {
    // setLoading(true);
    dispatch(loginLoading());
    if (!window.confirmationResult) {
      dispatch(loginLoadingDone());
      dispatch(loginFailureAction("exceeded request"));
      return;
    }
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        // setUser(res.user);
        dispatch(loginSetUser(res.user));
        // setLoading((prev) => !prev);
        dispatch(loginSuccessAction());
        // setIsAuth((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
        dispatch(loginFailureAction(err));
      });
  }
  // if (isError) {
  //   console.log(isError, ErrorMessage);
  //   return <Navigate to="/error" />;
  // }

  if (isAuth) {
    loginSetPhoneNumber(ph);

    return <Navigate to={"/"} />;
  }

  //   const loginSubmit = () => {};
  //   const otpSubmit = () => {};
  return (
    <Main>
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
                {isLoading && (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="s"
                  />
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
                <img src="./Coupon.jpg"></img>
                <VStack>
                  {/* <h3 className="headingOTP">Enter your OTP</h3> */}
                  {/* <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    inputStyles={{ border: "1px solid", margin: "1px" }}
                    className="opt-container"
                  ></OtpInput> */}
                  <Box width={["100%", "80%", "60%", "40%"]} mx="auto">
                    <FormControl>
                      <FormLabel>Enter OTP received on phone:</FormLabel>
                      <HStack spacing="2" justify="center" c>
                        <PinInput
                          otp
                          onChange={setOtp}
                          value={otp}
                          size={"md"}
                          focusBorderColor="black.500 2px"
                        >
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                        </PinInput>
                      </HStack>
                    </FormControl>
                  </Box>
                  {/* {isLoading && (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="md"
                  />
                )} */}
                  {/* <button onClick={onOTPVerify} className="VerifyButton">
                  Verify
                </button> */}
                  <Button
                    isLoading={isLoading}
                    colorScheme="blue"
                    spinner={
                      <BeatLoaderComp loading={isLoading} color="white" />
                    }
                    onClick={onOTPVerify}
                  >
                    Verify
                  </Button>
                </VStack>
              </div>
            </Wrapper2>
          )}
        </div>
      )}
    </Main>
  );
};


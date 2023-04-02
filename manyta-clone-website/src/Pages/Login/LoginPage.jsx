import React from "react";
import { LoginForm } from "../../Components/LoginPageComponents/LoginForm";
import { LoginForm2 } from "./../../Components/LoginPageComponents/LoginForm2";
import Navbar from "../../Components/NavBar";
import Footer from "./../../Components/Footer";
import styled from "styled-components";

const LOGINWRAP = styled.div`
  margin-top: 0.5vh;
`;

export const LoginPage = () => {
  // return <LoginForm />;
  return (
    <div>
      <Navbar />
      <LOGINWRAP>
        <LoginForm2 />
        {/* <LoginForm2 /> */}
      </LOGINWRAP>
      <Footer />
    </div>
  );
};

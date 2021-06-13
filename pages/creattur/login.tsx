import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
// import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
// import Auth from "../Services/authServices";
// import breakpoint from '../styles/sizing';
import Layout from "../../components/mainlayout";

const Login = () => {
  // const isloggedin = useSelector((state) => state.user.isLoggedIn);
  const isloggedin = false;
  const router = useRouter();

  const handleUserChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSetErrors = (message, bool = true) => {
    setError({ ...error, message: message, bool: bool });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleSetErrors(initialErrorState.message, initialErrorState.bool);
    if (user.usernameOrEmail.length < 4 && user.password.length < 4)
      return handleSetErrors("less than 4 chars");
    // else {
    // dispatch(Auth.signInUser(user, history));
    // setUser(initialUserState)
    // }
  };
  const initialUserState = {
    usernameOrEmail: "",
    password: "",
  };
  const initialErrorState = {
    message: "",
    bool: false,
  };
  const [user, setUser] = useState(initialUserState);
  const [error, setError] = useState(initialErrorState);
  if (isloggedin) return router.push("/creattur/user/dashboard");
  // <Redirect to={{ pathname: '/admin' }} />;
  return (
    <Layout>
      <ComponentContainer padding={"10% 0 0 0"} height={"100vh"}>
        <Form
          onSubmit={(e) => handleFormSubmit(e)}
          bgColor={"#ffffff"}
          width="40%"
          padding={"30px"}
        >
          <FormTitle>CreatturTree</FormTitle>
          <TextHolder>
            <ErrorMessage>{error.bool ? error.message : null}</ErrorMessage>
          </TextHolder>
          <TextHolder>
            <FormLabel htmlFor={"username"}>Email</FormLabel>
            <TextField
              name={"usernameOrEmail"}
              placeholder={"Username / Email"}
              value={user.usernameOrEmail}
              onChange={(e) => handleUserChanges(e)}
            />
          </TextHolder>
          <TextHolder>
            <FormLabel htmlFor={"username"}>Password</FormLabel>
            <TextField
              name={"password"}
              type="password"
              placeholder={"Password"}
              value={user.password}
              onChange={(e) => handleUserChanges(e)}
            />
          </TextHolder>

          <Button hover={"true"} margin={"20px auto"} width={"30%"}>
            Log In
          </Button>
          <Button margin={"20px auto"} width={"200px"}>
            Log in with Google
          </Button>
          <Button margin={"0  auto"} width={"200px"}>
            Log in with Facebook
          </Button>
          <Button margin={"20px auto"} width={"200px"}>
            Log in with Twitter
          </Button>
          <Link href="/creattur/register">Already have and account?</Link>
        </Form>
      </ComponentContainer>
    </Layout>
  );
};

export default Login;
interface ComponentContainerImpl {
  padding?: string;
  height?: string;
}
const ComponentContainer = styled.div<ComponentContainerImpl>`
  background-color: ${(props) =>
    props.theme === "dark" ? "#22223b" : "#faf9f9"};
  color: ${(props) => (props.theme === "dark" ? "#faf9f9" : "#22223b")};
  height: 3rem;
  width: 100vw;
  max-width: 100vw;
  height: ${(props) => (props.height ? props.height : null)};
  padding: ${(props) => (props.padding ? props.padding : "10px")};
`;
const ErrorMessage = styled.p`
  color: red;
`;
interface ButtonImpl {
  width?: string;
  margin?: string;
  hover?: string;
}
const Button = styled.button<ButtonImpl>`
  background: ${(props) => (props.color ? props.color : "transparent")};
  color: ${(props) => (props.theme === "dark" ? "#8e9aaf" : "#8e9aaf")};
  border: 1px solid
    ${(props) => (props.theme === "dark" ? "#8e9aaf" : "#8e9aaf")};
  width: ${(props) => (props.width ? props.width : null)};
  border-radius: 10px;
  margin: 0.5em 0.5em;
  padding: 0.5rem 1rem;
  outline-style: none;
  cursor: pointer;
  box-shadow: 3px 5px 6px #ced4da;
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  ${(props) =>
    props.hover
      ? `&:hover {
            box-shadow: 2px 3px 4px #ced4da;
        }`
      : null};
`;
interface FormImpl {
  height?: string;
  bgColor?: string;
  padding?: string;
  width?: string;
}
const Form = styled.form<FormImpl>`
  display: grid;
  grid-template-rows: 1fr;
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  height: ${(props) => (props.height ? props.height : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  border: 1px solid
    ${(props) => (props.theme === "dark" ? "#8e9aaf" : "#343a40")};
  margin: auto;
  border-radius: 5px;
  width: 40%;
  border: none;
`;
interface TextFieldImpl {
  borderColor?: string;
  error?: string;
}
const TextField = styled.input<TextFieldImpl>`
  width: ${(props) => (props.width ? props.width : "65%")};
  height: ${(props) => (props.height ? props.height : "1.7rem")};
  /* border: 1px solid ${(props) =>
    props.borderColor ? props.borderColor : "#8e9aaf"}; */
  outline: ${(props) => (props.error ? null : "none")};
  /* border-radius: 7px; */
  font-size: 0.95rem;
  padding: 12px;
  margin: auto;
  border: none;
  border-bottom: 1px solid black;
  background-color: white;
`;
interface TextHolderImpl {
  width?: string;
}
const TextHolder = styled.div<TextHolderImpl>`
  width: ${(props) => (props.width ? props.width : "65%")};
  display: grid;
  margin: 7px auto;
  width: 100%;
  text-align: center;
`;
const FormTitle = styled.h1`
  color: black;
  margin: auto;
  padding: 10px 0 30px 0;
`;
const FormLabel = styled.label`
  text-align: left;
  padding: 0 0 0 17%;
  margin-bottom: 5px;
  display: none;
`;

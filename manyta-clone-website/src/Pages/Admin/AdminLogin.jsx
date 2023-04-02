import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { getlogin } from "../../redux/AdminReducer/Action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../Components/AdminPageComponents/Styles/AdminStyles.module.css";

export function AdminLogin() {
  const { token, isauth } = useSelector((store) => store.AdminReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [log, setlog] = React.useState({ email: "", password: "" });

  const handlechange = (e) => {
    log[e.target.name] = e.target.value;
    setlog(log);
  };
  const handlesubmit = () => {
    console.log(log);
    dispatch(getlogin(log)).then((res) => {
      if (res.payload) {
        navigate("/adminhome");
      } else {
        console.log(isauth, res);
      }
    });
  };

  return (
    <Box minH={"96vh"} className={styles.maindiv1}>
      <div
        className={styles.maindiv2}
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
      >
        <Image className={styles.imagelogo} src={"./Logo.jpg"} alt={"memo"} />
        <Stack border={"0px solid red"} spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"} justify={"left"} align={"left"}>
            Sign in as Admin
          </Heading>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormControl isRequired id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="email"
                name="email"
                onChange={(e) => handlechange(e)}
              />
            </FormControl>
            <FormControl isRequired id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => handlechange(e)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              {/* <Button type='submit' colorScheme={'orange'} variant={'solid'} onClick={handlesubmit}>
                Sign in
              </Button> */}
            </Stack>
            <Button
              type="submit"
              colorScheme={"orange"}
              variant={"solid"}
              onClick={handlesubmit}
            >
              Sign in
            </Button>
          </form>
        </Stack>
      </div>
      <div className={styles.maindiv3}>
        <Image
          height="100%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://media0.giphy.com/media/LESpNIDaNBUcRIPzng/giphy.gif?cid=ecf05e47tnrfxn7mmlq5dv26klte6cw25h4n6q709ksn29mx&rid=giphy.gif&ct=g"
          }
        />
      </div>
    </Box>
  );
}

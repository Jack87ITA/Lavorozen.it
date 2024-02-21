import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillMail } from "react-icons/ai";
import { Icons } from "../../Assets/icons";
import Header from "../../Components/Common/Header";

import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useToastWrapper } from "../../Wrapper/toastWrapper";
import { errorHandler } from "../../Utils/handler";
import { AuthAPI } from "../../Apis/authAPI";

type Props = {
  setScreenState: React.Dispatch<
    React.SetStateAction<"login" | "register" | "forgot">
  >;
};

const ForgotPassword = (props: Props) => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const submitRef = useRef<any>(null);

  const navigate = useNavigate();

  const { success, error } = useToastWrapper();

  const handleSubmit = async () => {
    if (!email) return error("Please fill all the fields", "");
    try {
      setLoading(true);
      const res = {}
      if (res) {
        success("Reset Link sent to your email", "");
      }
    } catch (err) {
      error(errorHandler(err), "");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        submitRef.current.click();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Box height={"100%"} flexGrow={"grow"} p={6}>
      {loading ? <Loader /> : null}
      <Header>Forgot Password</Header>
      {/* <Text fontSize={"14px"} textAlign={"center"} mt={2}>
        Retrieve your password
      </Text> */}
      <Box mt={"32px"}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement h={"50px"} pointerEvents="none">
              <Image src={Icons.LoginMail} alt="" />
            </InputLeftElement>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              h={"50px"}
              type="email"
              placeholder="Enter Email"
            />
          </InputGroup>
        </FormControl>
        <Flex justifyContent={"end"}>
          <Text
            onClick={() => {
              props.setScreenState("login");
            }}
            color={"blue.500"}
            mt={2}
            cursor={"pointer"}
          >
            Back to Sign In
          </Text>
        </Flex>
      </Box>

      <Button
        ref={submitRef}
        onClick={handleSubmit}
        mt={"60px"}
        width={"full"}
        h={"60px"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"16px"}
        display={"flex"}
        background={"primary.main"}
        color={"white"}
      >
        Send Reset Link
      </Button>
      {/* <HStack mt={'34px'} justifyContent={'center'}>
                      <Text>
                      Don't have an account?
                      </Text>
                      <Text color={'#2869FE'}>
                      Sign Up
                      </Text>
                  </HStack> */}
    </Box>
  );
};

export default ForgotPassword;

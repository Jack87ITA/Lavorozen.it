import { Box } from "@chakra-ui/react";
import React from "react";
import { Puff } from "react-loader-spinner";
import Spinner from "./Spinner";

type Props = {};

const Loader = (props: Props) => {
  return (
    <>
      <Box
        background={"black"}
        opacity={0.1}
        position={"absolute"}
        height={"100%"}
        width={"100%"}
        left={0}
        right={0}
        top={0}
        zIndex={"999999"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      ></Box>
      <Box
        background={"transparent"}
        position={"absolute"}
        left={0}
        top={0}
        height={"100vh"}
        width={"100%"}
        zIndex={"99999999"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
       <Spinner />
      </Box>
    </>
  );
};

export default Loader;

import { Flex } from "@chakra-ui/react";
import React from "react";
import Topbar from "../../Partials/Admin/Topbar";
import MaxWidthContainer from "../../Common/MaxWidthContainer";
import Navbar from "../../Common/Navbar";
import { colors } from "../../../Styles/Theme/colors";
import Footer from "../../Common/Footer";

type Props = {
  children: React.ReactNode;
};

const WebLayout = ({ children }: Props) => {
  return (
    <Flex
      w="100%"
      position={"relative"}
      flexDirection="column"
      alignSelf={"center"}
      mx={"auto"}
      display={"flex"}
      minH={"100vh"}
      backgroundClip={colors.background.main}
    >
      <MaxWidthContainer>
        <Navbar />
      </MaxWidthContainer>
      <MaxWidthContainer flex={1}>{children}</MaxWidthContainer>
     
        <Footer />
    </Flex>
  );
};

export default WebLayout;

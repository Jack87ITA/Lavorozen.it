import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Icons } from "../../Assets/icons";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  backButton?: boolean;
  isWhite?: boolean;
  backAction?: () => void;
};

const Header = ({ children, backButton, isWhite, backAction }: Props) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Box
      position={"relative"}
      background={"transparent"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"36px"}
    >
      <Text
        fontSize={"20px"}
        fontWeight={700}
        textAlign={"center"}
        color={isWhite ? "white" : "black"}
      >
        {children}
      </Text>
      {backButton ? (
        <Image
          cursor={"pointer"}
          onClick={backAction ? backAction : navigateBack}
          position={"absolute"}
          src={isWhite ? Icons.BackButtonWhite : Icons.BackButton}
          left={0}
          top={0}
        />
      ) : null}
    </Box>
  );
};

export default Header;

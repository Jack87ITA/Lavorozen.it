import React from "react";
import {
  ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

const Button = ({ onClick, children, variant, ...agrs }: ButtonProps) => {
  switch (variant) {
    case "outline":
      return (
        <ChakraButton
          bg={"transparent"}
          color={"primary.main"}
          padding={"10px 20px"}
          fontSize={"sm"}
          borderWidth={"1px "}
          borderRadius={"4px"}
          borderColor={"primary.main"}
          mr={3}
          minW={"100px"}
          onClick={onClick}
          type="submit"
          {...agrs}
        >
          {children}
        </ChakraButton>
      );
    default:
      return (
        <ChakraButton
          bg={"secondary.main"}
          color={"white"}
          borderRadius={"4px"}
          fontSize={"sm"}
          padding={"10px 20px"}
          minW={"100px"}
          onClick={onClick}
          type="submit"
          {...agrs}
        >
          {children}
        </ChakraButton>
      );
  }
};

export default Button;

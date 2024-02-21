import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChakraInputProps {
  label: string;
  rightElement?: React.ReactNode;
  type?: string;
  containerProps?: any;

}

const Input = ({ label, type = "text", containerProps, rightElement, ...args }: InputProps) => {
  return (
    <FormControl
      display={"flex"}
      flexDir={["column", "row"]}
      gap={"20px"}
      alignItems={"center"}
      {...containerProps}
    >
      <FormLabel whiteSpace={"nowrap"} fontWeight={400} fontSize={"sm"}>{label}</FormLabel>
      <InputGroup width={"auto"} minW={"250px"} borderRadius={"8px"} overflow={"hidden"} >
        <ChakraInput _placeholder={{
            fontSize: "xs",
        }} borderRadius={"8px"} pr="4.5rem" type={type} placeholder={`Enter ${label}`}
        {...args}
        />
        <InputRightElement
          width="auto"
          
          pointerEvents="none"
        >
          {rightElement}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default Input;

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

interface InputProps extends Omit<ChakraInputProps, "onChange">{
  label: string;
  rightElement?: React.ReactNode;
  type?: string;
  containerProps?: any;
  onChange: (value: string) => void;
}

const Input = ({
  label,
  type = "text",
  containerProps,
  rightElement,
  onChange,
  ...args
}: InputProps) => {
  return (
    <FormControl
      display={"flex"}
      flexDir={["row"]}
      gap={"20px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...containerProps}
    >
      <FormLabel fontWeight={400} fontSize={"sm"}>
        {label}
      </FormLabel>
      <InputGroup
        width={"auto"}
        minW={["120px", "250px"]}
        borderRadius={"8px"}
        overflow={"hidden"}
      >
        <ChakraInput
          fontSize={"sm"}
          _placeholder={{
            fontSize: "xs",
          }}
          borderRadius={"8px"}
          pr="4.5rem"
          type={type}
          placeholder={`Enter ${label}`}

          onChange={(e:any) => {
            let tempValue = e.target.value;
            if(args.min) {
              if (e.target.value < args.min) {
                tempValue = String(args.min) ;
              }
            }
            if(args.max) {
              if (e.target.value > args.max) {
                tempValue = String(args.max);
              }
            }
            onChange && onChange(tempValue);
          }
          }

          {...args}
        />
        <InputRightElement width="auto" pointerEvents="none">
          {rightElement}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default Input;

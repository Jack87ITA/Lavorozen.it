import React from "react";
import CurrencyFormat from "react-currency-format";

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { getFormattedCurrency } from "../../Utils/Common";

interface InputProps extends Omit<ChakraInputProps, "onChange"> {
  label: string;
  rightElement?: React.ReactNode;
  type?: string;
  containerProps?: any;
  onChange: (value: string) => void;
}

const CurrencyInput = ({
  label,
  type = "text",
  containerProps,
  rightElement,
  onChange,
  value,
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
      <FormLabel as={"h2"} fontWeight={400} fontSize={"sm"}>
        <strong>{label}</strong>
      </FormLabel>
      <InputGroup
        width={["160px", "auto"]}
        minW={["160px", "250px"]}
        maxW={["160px", "auto"]}
        borderRadius={"8px"}
        overflow={"hidden"}
      >
        
        <CurrencyFormat
        style={{
            width: "100%",
            height: "40px",
            borderRadius: "8px",
            borderWidth: "0px",
            border: "1px solid #E2E8F0",
            padding: "0px 10px",
        }}
          value={value}
          thousandSeparator="."
          decimalSeparator=","
          
          onValueChange={(values: any) => {
            const { formattedValue, value } = values;
            onChange && onChange(value);
          }}
        />
        <InputRightElement
          ml={"-10px"}
          position={"relative"}
          width="auto"
          pointerEvents="none"
        >
          {rightElement}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};


export default CurrencyInput;

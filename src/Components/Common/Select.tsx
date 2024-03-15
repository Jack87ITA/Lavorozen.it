import React from "react";
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  label: string;
  options: { label: string; value: string }[];
  containerProps?: any;
}

const Select = ({ label, options, containerProps, ...args }: SelectProps) => {
  return (
    <FormControl
      display={"flex"}
      flexDir={["row"]}
      gap={"20px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      {...containerProps}
    >
        <FormLabel as={"h2"} fontWeight={400} fontSize={"sm"}>
       <strong>{label}</strong> 
      </FormLabel>
      <ChakraSelect
        width={["160px", "auto"]}
        minW={["120px", "250px"]}
        maxW={["160px", "auto"]}
        borderRadius={"8px"}
        overflow={"hidden"}
        fontSize={"sm"}
        {...args}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </FormControl>
  );
};

export default Select;

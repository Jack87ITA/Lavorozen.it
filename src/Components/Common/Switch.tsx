import React from "react";
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface SwitchProps extends ChakraSwitchProps {
  label: string;
  containerProps?: any;
}

const Switch = ({ label, containerProps, ...args }: SwitchProps) => {
  return (
    <FormControl
      display={"flex"}
      flexDir={["row"]}
      gap={"20px"}
      alignItems={"center"}
      {...containerProps}
    >
      <FormLabel
        as={"h2"}
        whiteSpace={["normal", "normal", "nowrap"]}
        fontWeight={400}
        fontSize={"sm"}
      >
        <strong>{label}</strong>
      </FormLabel>
      <ChakraSwitch colorScheme="blue" {...args} />
    </FormControl>
  );
};

export default Switch;

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  AutoComplete as AntdAutocomplete,
  AutoCompleteProps as AntdAutoCompleteProps,
} from "antd";
import React from "react";

interface AutoCompleteProps extends AntdAutoCompleteProps {
  label: string;
  rightElement?: React.ReactNode;
  type?: string;
  containerProps?: any;
  options: { label: React.ReactNode; value?: string | number | null }[];
}

const AutoComplete = ({
  label,
  type = "text",
  options,
  containerProps,
  rightElement,
  ...args
}: AutoCompleteProps) => {
  return (
    <FormControl
      display={"flex"}
      flexDir={["row", "row"]}
      gap={"20px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...containerProps}
    >
      <FormLabel whiteSpace={"nowrap"} fontWeight={400} fontSize={"sm"}>
        {label}
      </FormLabel>
      <InputGroup
        width={"auto"}
        minW={["120px", "250px"]}
        borderRadius={"8px"}
        overflow={"hidden"}
        border={"1px solid #E2E8F0"}
      >
        <AntdAutocomplete
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "8px",
            borderWidth: "0px",
            border: "1px solid transparent",
          }}
          options={options}
          placeholder={`Enter ${label}`}
          filterOption={(inputValue, option: any) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
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

export default AutoComplete;

import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  color?: string;
  variant?: "solid" | "outline";
  title: string;
  size?: number;

}

const Avatar = ({ size = 3, color, variant, title }: Props) => {
  return (
    <Box
      w={20 * size + "px"}
      h={20 * size + "px"}
      borderRadius={"50%"}
      bg={variant === "solid" ? "gray.200" : "transparent"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={variant === "outline" ? "1px" : 0}
      borderColor={color}
      color={color}
    >
      <Text fontSize={ size> 3 ? "2xl" : "md"} textAlign={"center"}>
        {title}
      </Text>
    </Box>
  );
};

export default Avatar;

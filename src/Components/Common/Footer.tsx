import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../Styles/Theme/colors";
import MaxWidthContainer from "./MaxWidthContainer";
import Logo from "../../Assets/icons/Logo";

const Footer = () => {
  return (
    <Box
      mt={"60px"}
      borderTop={"1px solid"}
      borderColor={"gray.200"}
      pt={"30px"}
    >
      <MaxWidthContainer>
        <Box>
          <Logo />
        </Box>
        <Grid
          justifyContent={"space-around"}
          w={"100%"}
          mt={"30px"}
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={"20px"}
        >
          <VStack spacing={3} alignItems={"center"}>
            <Box>
              <Text fontSize={"sm"} fontWeight={"600"}>
                Company
              </Text>
            </Box>
            <Text fontSize={"sm"}>About</Text>
            <Text fontSize={"sm"}>Contact</Text>
            <Text fontSize={"sm"}>Services</Text>
          </VStack>

          <VStack spacing={3} alignItems={"center"}>
            <Box>
              <Text fontSize={"sm"} fontWeight={"600"}>
                Company
              </Text>
            </Box>
            <Text fontSize={"sm"}>About</Text>
            <Text fontSize={"sm"}>Contact</Text>
            <Text fontSize={"sm"}>Services</Text>
          </VStack>

          <VStack spacing={3} alignItems={"center"}>
            <Box>
              <Text fontSize={"sm"} fontWeight={"600"}>
                Company
              </Text>
            </Box>
            <Text fontSize={"sm"}>About</Text>
            <Text fontSize={"sm"}>Contact</Text>
            <Text fontSize={"sm"}>Services</Text>
          </VStack>

          <VStack spacing={3} alignItems={"center"}>
            <Box>
              <Text fontSize={"sm"} fontWeight={"600"}>
                Company
              </Text>
            </Box>
            <Text fontSize={"sm"}>About</Text>
            <Text fontSize={"sm"}>Contact</Text>
            <Text fontSize={"sm"}>Services</Text>
          </VStack>
        </Grid>
      </MaxWidthContainer>

      <Box mt={"60px"} p={1} background={colors.primary.main}>
        <Text color={"#fff"} fontSize={"xs"} textAlign={"center"}>
          © 2024 All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

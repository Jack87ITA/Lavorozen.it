import { Box, Flex, Heading, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../Styles/Theme/colors";

const Banner = () => {
  return (
    <Flex
      gap="20px"
      mt={"60px"}
      flexDirection={["column", "row"]}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Box flex={0.3}>
        <Heading as={"h1"} fontWeight={"semibold"} mb={6} fontSize={"4xl"}>
          Calcolo stipendio
          <br />
          netto
        </Heading>

        {/* <svg
          width="100%"
          height="100%"
          viewBox="0 0 254 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M254 121C252.466 92.9387 241.809 65.1958 221.736 42.6312C174.869 -10.0708 94.4493 -14.5177 42.1362 32.6876C15.9855 56.2785 1.80349 88.2913 0 121L254 121Z"
            fill="url(#paint0_linear_182_7514)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_182_7514"
              x1="69.8367"
              y1="25.1084"
              x2="100.792"
              y2="125.829"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color={colors.primary.main}></stop>
              <stop offset="0.609375" stop-color={colors.primary.main}></stop>
            </linearGradient>
          </defs>
        </svg> */}
      </Box>

      <Box gap={"20px"} display={"flex"} flexDirection={"column"} flex={0.4}>
        <Text as={"h5"} textAlign={"justify"} fontWeight={500} fontSize={"md"}>
          Vuoi calcolare il tuo stipendio netto mensile o annuale, ma non sai
          come fare? La tassazione italiana ti confonde? Ti aiutiamo noi! ‍
        </Text>

        <Text as={"h5"} textAlign={"justify"} fontWeight={500} fontSize={"md"}>
          Con il simulatore di stipendio netto di Lavorozen, ora puoi capire
          quanto riceverai mensilmente in busta paga. Ti basta indicare i dati
          più rilevanti sulla tua retribuzione e lasciare che il calcolatore
          faccia il resto.
          <br />
          <br />

          E' stato sviluppato e testato insieme ai migliori consulenti del
          lavoro italiani!
        </Text>
      </Box>
    </Flex>
  );
};

export default Banner;

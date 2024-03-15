import React, { useEffect } from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DoughnutChart from "./Graph";
import { colors } from "../../Styles/Theme/colors";
import { getFormattedCurrency } from "../../Utils/Common";

const resultTabs = [
  {
    name: "Anno",
    key: "anno",
  },
  {
    name: "Mese",
    key: "mese",
  },
];

const Result = ({ resultRef, data }: any) => {
  const [selectedResultTab, setSelectedResultTab] = React.useState(0);

  const [graphData, setGraphData] = React.useState({
    labels: data?.map((d: any) => d.showOnGraph && d.label),
    datasets: [
      {
        label: "My Dataset",
        data: data.map((d: any) => d.showOnGraph && d.data[0]),
        backgroundColor: data.map(
          (d: any) => d.showOnGraph && d.backgroundColor
        ),
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    setGraphData((prev) => ({
      ...prev,
      datasets: [
        {
          label: "My Dataset",
          data: data?.map(
            (d: any) => d.showOnGraph && d.data[selectedResultTab]
          ),
          backgroundColor: data.map(
            (d: any) => d.showOnGraph && d.backgroundColor
          ),
          borderWidth: 1,
        },
      ],
    }));
  }, [selectedResultTab, data]);

  return (
    <Box
      display={"flex"}
      maxW={"400px"}
      w={"100%"}
      mx={"auto"}
      flexDirection={"column"}
      gap={"30px"}
    >
      <HStack
        padding={"15px"}
        bg={"#fff"}
        w={"100%"}
        h={"100%"}
        boxShadow={"0px 0px 10px 0px #0000001a"}
        borderRadius={"30px"}
        ref={resultRef}
      >
        {resultTabs.map((tab, i) => (
          <Box
            onClick={() => setSelectedResultTab(i)}
            cursor={"pointer"}
            w={"100%"}
            h={"100%"}
            borderRadius={"30px"}
            p={"15px"}
            bg={selectedResultTab === i ? colors.primary.main : "#fff"}
            color={selectedResultTab === i ? "#fff" : "gray.600"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text fontWeight={500} fontSize={"md"}>
              {tab.name}
            </Text>
          </Box>
        ))}
      </HStack>

      <Box
        padding={["15px", "30px"]}
        bg={"#fff"}
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        h={"100%"}
        boxShadow={"0px 0px 10px 0px #0000001a"}
        borderRadius={"30px"}
      >
        <DoughnutChart
          data={graphData}
          value={data[0].data[selectedResultTab]}
        />

        <VStack mt={"45px"} w={"100%"}>
          <Grid
            py={"10px"}
            w={"100%"}
            borderBottom={"1px solid"}
            borderColor={"gray.400"}
            templateColumns={["repeat(4, 1fr)"]}
          >
            <GridItem colSpan={3}>
              <Text fontSize={"sm"}></Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontSize={"md"} fontWeight={500}>
                {["Anno", "Mese"][selectedResultTab]}
              </Text>
            </GridItem>
          </Grid>
          {data.map((_: any, i: number) => (
            <Grid
              borderBottom={"1px solid"}
              gap={"10px"}
              borderColor={"gray.200"}
              py={"10px"}
              w={"100%"}
              justifyContent={"space-between"}
              templateColumns={["repeat(4, 1fr)"]}
            >
              <GridItem colSpan={3}>
                <Flex gap={"10px"} alignItems={"center"}>
                  <Box
                    w={"20px"}
                    h={"20px"}
                    borderRadius={"4px"}
                    bg={_.backgroundColor}
                  ></Box>
                  <Text
                    as="h2"
                    fontWeight={_.isHeading ? 600 : 400}
                    fontSize={"sm"}
                  >
                    <strong>{_.label}</strong>
                  </Text>
                </Flex>
              </GridItem>
              <GridItem>
                <Text
                  fontWeight={_.isHeading ? 600 : 400}
                  fontSize={"sm"}
                  color={"gray.700"}
                >
                  € {getFormattedCurrency(Number(_.data[selectedResultTab]))}
                </Text>
              </GridItem>
            </Grid>
          ))}
          {/* <Grid
            borderBottom={"1px solid"}
            gap={"10px"}
            borderColor={"gray.200"}
            py={"10px"}
            w={"100%"}
            justifyContent={"space-between"}
            templateColumns={["repeat(4, 1fr)"]}
          >
            <GridItem colSpan={3}>
              <Flex gap={"10px"} alignItems={"center"}>
                <Box
                  w={"20px"}
                  h={"20px"}
                  borderRadius={"4px"}
                  bg={"#fff"}
                ></Box>
                <Text fontWeight={600} fontSize={"sm"}>
                  Costo Azienda
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Text fontWeight={600} fontSize={"sm"} color={"gray.700"}>
                € {[17702, 13702][selectedResultTab].toLocaleString()}
              </Text>
            </GridItem>
          </Grid> */}
        </VStack>
      </Box>
    </Box>
  );
};

export default Result;

import React, { useEffect } from 'react'
import { Box, VStack, Text, HStack, Flex, Grid, GridItem } from '@chakra-ui/react'
import DoughnutChart from './Graph'
import { colors } from '../../Styles/Theme/colors'


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
  

const Result = () => {
    const [selectedResultTab, setSelectedResultTab] = React.useState(0);


    // Graph Handle Functions
  
    const data = [
      {
        id: "1",
        label: "Stipendio netto",
        data: [58754, 4520],
        backgroundColor: "#FF6633",
        showOnGraph: true,
        isHeading: true,
      },
      {
        id: "2",
        label: "INPS",
        data: [5840, 449],
        backgroundColor: "#FFB399",
        showOnGraph: true,
      },
      {
        id: "3",
        label: "IRPEF",
        data: [35414, 2724],
        backgroundColor: "#FF33FF",
        showOnGraph: true,
      },
      {
        id: "4",
        label: "Detrazioni fiscali",
        data: [8, 1],
        backgroundColor: "#FFFF99",
        showOnGraph: true,
      },
      {
        id: "5",
        label: "Retribuzione Lorda",
        data: [100000, 7692],
        backgroundColor: "#00B3E6",
        isHeading: true,
        showOnGraph: true,
      },
      {
        id: "6",
        label: "INPS azienda",
        data: [27680, 2212],
        backgroundColor: "#FFF3E6",
        showOnGraph: false,
      },
      {
        id: "7",
        label: "INAIL",
        data: [500, 38],
        backgroundColor: "#0FF3E6",
        showOnGraph: false,
      },
      {
        id: "8",
        label: "TFR",
        data: [6907, 531],
        backgroundColor: "#0088E6",
        showOnGraph: false,
      },
    ];
  
    const [graphData, setGraphData] = React.useState({
      labels: data?.map((d) => d.showOnGraph && d.label),
      datasets: [
        {
          label: "My Dataset",
          data: data.map((d) => d.showOnGraph && d.data[0]),
          backgroundColor: data.map((d) => d.showOnGraph && d.backgroundColor),
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
            data: data?.map((d) => d.showOnGraph && d.data[selectedResultTab]),
            backgroundColor: data.map((d) => d.showOnGraph && d.backgroundColor),
            borderWidth: 1,
          },
        ],
      }));
    }, [selectedResultTab]);
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
        {data.map((_, i) => (
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
                  fontWeight={_.isHeading ? 600 : 400}
                  fontSize={"sm"}
                >
                  {_.label}
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Text
                fontWeight={_.isHeading ? 600 : 400}
                fontSize={"sm"}
                color={"gray.700"}
              >
                € {_.data[selectedResultTab]?.toLocaleString()}
              </Text>
            </GridItem>
          </Grid>
        ))}
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
                bg={"#fff"}
              ></Box>
              <Text fontWeight={600} fontSize={"sm"}>
                Costo Azendia
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Text fontWeight={600} fontSize={"sm"} color={"gray.700"}>
              € {[17702, 13702][selectedResultTab].toLocaleString()}
            </Text>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  </Box>
  )
}

export default Result
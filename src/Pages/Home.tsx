import React, { useEffect } from "react";
import MobileLayout from "../Components/Layouts/MobileLayout/MobileLayout";
import {
  Box,
  Text,
  Fade,
  chakra,
  VStack,
  Heading,
  Grid,
  GridItem,
  HStack,
  Flex,
  Button,
} from "@chakra-ui/react";

import { useNavigate, useSearchParams } from "react-router-dom";
import Login from "./Common/Login";
import Register from "./Common/Register";
import ForgotPassword from "./Common/ForgotPassword";
import Logo from "../Assets/icons/Logo";
import WebLayout from "../Components/Layouts/WebLayout";
import Banner from "../Components/Home/Banner";
import Input from "../Components/Common/Input";
import { colors } from "../Styles/Theme/colors";
import Select from "../Components/Common/Select";
import Switch from "../Components/Common/Switch";
import DoughnutChart from "../Components/Home/Graph";
import AutoComplete from "../Components/Common/AutoComplete";

type Props = {};
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


const resultDataBoldIndexes = [0, 4, 5];

const options = [
  { value: "Burns Bay Road" },
  { value: "Downing Street" },
  { value: "Wall Street" },
];

const Home = (props: Props) => {
  const [selectedResultTab, setSelectedResultTab] = React.useState(0);

  const [formData, setFormData] = React.useState({
    ral: 0,
    province: "",
    mensilita: 13,
    contratto: "indeterminato",
    genere: "Donna",
    giorniLavorati: 365,
    addizionaleComunale: 0.8,
    coniugeCarico: false,
    figliCarico: 0,
    percentualeFigliCarico: 0,
    altriFamiliariCarico: 0,
  });

  const handleFormChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const data = [
    {
      id: "1",
      label: "Stipendio netto",
      data: [58754, 4520],
      backgroundColor: "#FF6633",
    },
    {
      id: "2",
      label: "INPS",
      data: [5840, 449],
      backgroundColor: "#FFB399",
    },
    {
      id: "3",
      label: "IRPEF",
      data: [35414, 2724],
      backgroundColor: "#FF33FF",
    },
    {
      id: "4",
      label: "Detrazioni fiscali",
      data: [8, 1],
      backgroundColor: "#FFFF99",
    },
    {
      id: "5",
      label: "Retribuzione Lorda",
      data: [100000, 7692],
      backgroundColor: "#00B3E6",
    }
  ];

  const [graphData, setGraphData] = React.useState({
    labels: data?.map((d) => d.label),
    datasets: [
      {
        label: "My Dataset",
        data: data.map((d) => d.data[0]),
        backgroundColor: data.map((d) => d.backgroundColor),
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
          data: data?.map((d) => d.data[0]),
          backgroundColor: data.map((d) => d.backgroundColor),
          borderWidth: 1,
        },
      ],
    }));
  }, [selectedResultTab]);

  return (
    <WebLayout>
      <>
        {/* BANNER */}
        <Banner />
        {/* Form Section */}

        <Box
          my={"90px"}
          p={["20px", "30px", "50px 100px"]}
          bg={"#fff"}
          w={"100%"}
          h={"100%"}
          boxShadow={"0px 0px 10px 0px #0000001a"}
          borderRadius={"30px"}
          display={"flex"}
        >
          <VStack w={"100%"}>
            <Heading
              w={"full"}
              textAlign={"left"}
              fontWeight={"600"}
              size={"md"}
            >
              Calcola ora il tuo stipendio netto
            </Heading>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={10}
              w={"100%"}
              mt={10}
            >
              <GridItem>
                <Input
                  label={"Retribuzione Annua Lorda (RAL)"}
                  type="number"
                  value={formData.ral}
                  onChange={(e) => handleFormChange("ral", e.target.value)}
                  rightElement={
                    <Box
                      background={colors.background.main}
                      px={4}
                      h={"100%"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Text>€</Text>
                    </Box>
                  }
                />
              </GridItem>

              <GridItem>
                <AutoComplete
                  options={options}
                  label={"Provincia"}
                  containerProps={{
                    width: "100%",
                    // justifyContent: ["flex-start", "flex-start", "flex-end"],
                  }}
                />
              </GridItem>

              <GridItem>
                <Input
                  type="number"
                  defaultValue={13}
                  min={1}
                  max={20}
                  label={"Numero Mensilità"}
                  value={formData.mensilita}
                  onChange={(e) =>
                    handleFormChange("mensilita", e.target.value)
                  }
                />
              </GridItem>

              <GridItem>
                <Select
                  containerProps={{
                    width: "100%",
                    justifyContent: ["space-between"],
                  }}
                  label={"Tipo di Contratto"}
                  defaultValue={"indeterminato"}
                  options={[
                    { label: "Indeterminato", value: "indeterminato" },
                    { label: "Determinato", value: "determinato" },
                    { label: "Apprendistato", value: "apprendistato" },
                  ]}
                  value={formData.contratto}
                  onChange={(e) =>
                    handleFormChange("contratto", e.target.value)
                  }
                />
              </GridItem>

              <GridItem>
                <Select
                  containerProps={{
                    width: "100%",
                    // justifyContent: "flex-start",
                  }}
                  label={"Genere"}
                  options={[
                    { label: "Donna", value: "Donna" },
                    { label: "Uomo", value: "Uomo" },
                    { label: "Altro", value: "Altro" },
                  ]}
                  value={formData.genere}
                  onChange={(e) => handleFormChange("genere", e.target.value)}
                />
              </GridItem>

              <GridItem>
                <Input
                  containerProps={{
                    justifyContent: ["space-between"],
                  }}
                  type="number"
                  defaultValue={365}
                  min={1}
                  max={365}
                  label={"Giorni Lavorati nell'anno"}
                  value={formData.giorniLavorati}
                  onChange={(e) =>
                    handleFormChange("giorniLavorati", e.target.value)
                  }
                />
              </GridItem>

              <GridItem>
                <Input
                  type="number"
                  defaultValue={0.8}
                  rightElement={
                    <Box
                      background={colors.background.main}
                      px={4}
                      h={"100%"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Text>%</Text>
                    </Box>
                  }
                  label={"Addizionale Comunale"}
                  value={formData.addizionaleComunale}
                  onChange={(e) =>
                    handleFormChange("addizionaleComunale", e.target.value)
                  }
                />
              </GridItem>

              <GridItem>
                <Switch
                  containerProps={{
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                  label={"Coniuge o Unito Civile a Carico"}
                />
              </GridItem>

              <GridItem>
                <Input
                  type="number"
                  defaultValue={0}
                  min={1}
                  max={100}
                  label={"Numero Figli a Carico (Oltre Assegno Unico)"}
                  value={formData.figliCarico}
                  onChange={(e) =>
                    handleFormChange("figliCarico", e.target.value)
                  }
                />
              </GridItem>

              <GridItem>
                <Select
                  containerProps={{
                    width: "100%",
                    justifyContent: ["space-between"],
                  }}
                  label={"% di figli A carico"}
                  defaultValue={"0"}
                  options={[
                    { label: "0%", value: "0" },
                    { label: "50%", value: "50" },
                    { label: "100%", value: "100" },
                  ]}
                  value={formData.percentualeFigliCarico}
                  onChange={(e) =>
                    handleFormChange("percentualeFigliCarico", e.target.value)
                  }
                />
              </GridItem>

              <GridItem>
                <Input
                  type="number"
                  defaultValue={0}
                  min={1}
                  max={10}
                  label={"Numero Altri Familiari A Carico"}
                  value={formData.altriFamiliariCarico}
                  onChange={(e) =>
                    handleFormChange("altriFamiliariCarico", e.target.value)
                  }
                />
              </GridItem>

              <GridItem>
                <Select
                  containerProps={{
                    width: "100%",
                    justifyContent: ["space-between"],
                  }}
                  label={"Categoria"}
                  defaultValue={"operaio"}
                  options={[
                    { label: "Operaio", value: "operaio" },
                    { label: "Impiegato", value: "impiegato" },
                    { label: "Dirigente", value: "dirigente" },
                  ]}
                  value={formData.percentualeFigliCarico}
                  onChange={(e) =>
                    handleFormChange("percentualeFigliCarico", e.target.value)
                  }
                />
              </GridItem>
            </Grid>
            <Button
              mt={"30px"}
              // w={"100%"}
              mx={"auto"}
              w={"200px"}
              bg={colors.primary.main}
              color={"#fff"}
              borderRadius={"10px"}
              fontSize={"md"}
              padding={"15px"}
            >
              Calcola
            </Button>
          </VStack>
        </Box>

        {/* Result graph  */}
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
            padding={"30px"}
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
                <GridItem colSpan={2}>
                  <Text fontSize={"sm"}></Text>
                </GridItem>
                <GridItem>
                  <Text fontSize={"md"} fontWeight={500}>
                    Anno
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontSize={"md"} fontWeight={500}>
                    Mese
                  </Text>
                </GridItem>
              </Grid>
              {data.map((_, i) => (
                <Grid
                  borderBottom={"1px solid"}
                  borderColor={"gray.200"}
                  py={"10px"}
                  w={"100%"}
                  justifyContent={"space-between"}
                  templateColumns={["repeat(4, 1fr)"]}
                >
                  <GridItem colSpan={2}>
                    <Flex gap={"10px"} alignItems={"center"}>
                      <Box
                        w={"20px"}
                        h={"20px"}
                        borderRadius={"4px"}
                        bg={_.backgroundColor}
                      ></Box>
                      <Text
                        fontWeight={
                          resultDataBoldIndexes.includes(i) ? 600 : 400
                        }
                        fontSize={"sm"}
                      >
                        {_.label}
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Text
                      fontWeight={resultDataBoldIndexes.includes(i) ? 600 : 400}
                      fontSize={"sm"}
                      color={"gray.700"}
                    >
                      € {_.data[0]?.toLocaleString()}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text
                      fontWeight={resultDataBoldIndexes.includes(i) ? 600 : 400}
                      fontSize={"sm"}
                      color={"gray.700"}
                    >
                      € {_.data[1]?.toLocaleString()}
                    </Text>
                  </GridItem>
                </Grid>
              ))}
               <Grid
                  borderBottom={"1px solid"}
                  borderColor={"gray.200"}
                  py={"10px"}
                  w={"100%"}
                  justifyContent={"space-between"}
                  templateColumns={["repeat(4, 1fr)"]}
                >
                  <GridItem colSpan={2}>
                    <Flex gap={"10px"} alignItems={"center"}>
                      <Box
                        w={"20px"}
                        h={"20px"}
                        borderRadius={"4px"}
                        bg={"#fff"}
                      ></Box>
                      <Text
                        fontWeight={
                          600
                        }
                        fontSize={"sm"}
                      >
                        Costo Azendia
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Text
                      fontWeight={600}
                      fontSize={"sm"}
                      color={"gray.700"}
                    >
                      € {(17702).toLocaleString()}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text
                      fontWeight={600}
                      fontSize={"sm"}
                      color={"gray.700"}
                    >
                      € {(13702)?.toLocaleString()}
                    </Text>
                  </GridItem>
                </Grid>
            </VStack>
          </Box>
        </Box>
      </>
    </WebLayout>
  );
};

export default Home;

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
import BarChart from "../Components/Home/Graph";

type Props = {};

type ScreenState = "login" | "register" | "forgot";

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

const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];

const resultData: any = {
  anno: {
    "Retribuzione Lorda": 100000,
    INPS: 5840,
    IRPEF: 35414,
    "Detrazioni fiscali": 8,
    "Stipendio netto": 58754,
  },
  mese: {
    "Retribuzione Lorda": 7692,
    INPS: 449,
    IRPEF: 2724,
    "Detrazioni fiscali": 1,
    "Stipendio netto": 4520,
  },
};

const Home = (props: Props) => {
  const [selectedResultTab, setSelectedResultTab] = React.useState("anno");

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

  return (
    <WebLayout>
      <>
        {/* BANNER */}
        <Banner />
        {/* Form Section */}

        <Box
          my={"90px"}
          p={["20px","50px 100px"]}
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
              Simulatore Lordo - Netto{" "}
            </Heading>

            <Grid
              templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              gap={6}
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
                <Input
                containerProps={{
                  justifyContent: "flex-end",
                }}
                  type={"number"}
                  label={"Provincia di Residenza"}
                  value={formData.province}
                  onChange={(e) => handleFormChange("province", e.target.value)}
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
                  containerProps={{ width: "100%", justifyContent: "flex-end" }}
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
                    justifyContent: "flex-start",
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
                  justifyContent: "flex-end",
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
                  containerProps={{ width: "100%", justifyContent: "flex-end" }}
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
                  containerProps={{ width: "100%", justifyContent: "flex-end" }}
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
            </Grid>
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
                onClick={() => setSelectedResultTab(tab.key)}
                cursor={"pointer"}
                w={"100%"}
                h={"100%"}
                borderRadius={"30px"}
                p={"15px"}
                bg={
                  selectedResultTab === tab.key ? colors.primary.main : "#fff"
                }
                color={selectedResultTab === tab.key ? "#fff" : "#000"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontWeight={600} fontSize={"md"}>
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
            <BarChart />

            <VStack mt={"45px"} w={"100%"}>
              {Object.keys(resultData[selectedResultTab]).map((_, i) => (
                <HStack
                  borderBottom={"1px solid"}
                  borderColor={"gray.200"}
                  p={"10px"}
                  w={"100%"}
                  justifyContent={"space-between"}
                >
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box
                      w={"20px"}
                      h={"20px"}
                      borderRadius={"4px"}
                      bg={colorArray[i]}
                    ></Box>
                    <Text fontSize={"sm"}>{_}</Text>
                  </Flex>
                  <Text fontWeight={600} fontSize={"lg"}>
                    € {resultData[selectedResultTab][_]?.toLocaleString()}
                  </Text>
                </HStack>
              ))}
            </VStack>

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
          </Box>
        </Box>
      </>
    </WebLayout>
  );
};

export default Home;

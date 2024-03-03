import React, { useEffect } from "react";
import {
  Box,
  VStack,
  Heading,
  Grid,
  GridItem,
  Text,
  Button,
} from "@chakra-ui/react";
import { colors } from "../../Styles/Theme/colors";
import Input from "../Common/Input";
import AutoComplete from "../Common/AutoComplete";
import Switch from "../Common/Switch";
import Select from "../Common/Select";
import { ProvinceList } from "../../Constants";

const inputData = [
  {
    key: "ral",
    label: "Retribuzione Annua Lorda (RAL)",
    suffix: "€",
    type: "number",
    defaultValue: 0,
  },
  {
    key: "province",
    label: "Provincia",
    type: "autocomplete",
    options: Object.values(ProvinceList)
      .flat()
      .map((p) => ({ value: p })),
  },
  {
    key: "mensilita",
    label: "Numero Mensilità",
    type: "number",
    defaultValue: 13,
    min: 1,
    max: 20,
  },
  {
    key: "contratto",
    label: "Tipo di Contratto",
    type: "select",
    options: [
      { label: "Indeterminato", value: "indeterminato" },
      { label: "Determinato", value: "determinato" },
      { label: "Apprendistato", value: "apprendistato" },
    ],
  },
  {
    key: "genere",
    label: "Genere",
    type: "select",
    options: [
      { label: "Donna", value: "donna" },
      { label: "Uomo", value: "uomo" },
      { label: "Altro", value: "altro" },
    ],
  },
  {
    key: "giorniLavorati",
    label: "Giorni Lavorati nell'anno",
    type: "number",
    defaultValue: 365,
    min: 1,
    max: 365,
  },
  {
    key: "addizionaleComunale",
    label: "Addizionale Comunale",
    type: "number",
    defaultValue: 0.8,
    suffix: "%",
  },
  {
    key: "coniugeCarico",
    label: "Coniuge o Unito Civile a Carico",
    type: "switch",
  },
  {
    key: "figliCarico",
    label: "Numero Figli a Carico (Oltre Assegno Unico)",
    type: "number",
    defaultValue: 0,
    min: 0,
    max: 100,
  },
  {
    key: "percentualeFigliCarico",
    label: "% di figli A carico",
    type: "select",
    options: [
      { label: "0%", value: "0" },
      { label: "50%", value: "50" },
      { label: "100%", value: "100" },
    ],
  },
  {
    key: "altriFamiliariCarico",
    label: "Numero Altri Familiari A Carico",
    type: "number",
    defaultValue: 0,
    min: 0,
  },
  {
    key: "categoria",
    label: "Categoria",
    type: "select",
    options: [
      { label: "Operaio", value: "operaio" },
      { label: "Impiegato", value: "impiegato" },
      { label: "Dirigente", value: "dirigente" },
    ],
  },
];

interface InputSectionProps {
  handleCalculate: (input:any) => void;
}

const InputSection = ({ handleCalculate }: InputSectionProps) => {
  const [formData, setFormData] = React.useState<any>({
    ral: 0,
    province: "",
    mensilita: 13,
    contratto: "indeterminato",
    genere: "donna",
    giorniLavorati: 365,
    addizionaleComunale: 0.8,
    coniugeCarico: false,
    figliCarico: 0,
    percentualeFigliCarico: 0,
    altriFamiliariCarico: 0,
    categoria: "operaio",
  });

  const handleFormChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const [errors, setErrors] = React.useState<any>({});

  const validateForm = () => {
    let valid = true;
    const newErrors: any = { ...errors };

    inputData.forEach((input: any) => {
      if (input.min && formData[input.key] < input.min) {
        valid = false;
        newErrors[input.key] = "Valore minimo " + input.min;
      } else if (input.max && formData[input.key] > input.max) {
        valid = false;
        newErrors[input.key] = "Valore massimo " + input.max;
      } else {
        newErrors[input.key] = "";
      }
    });

    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    validateForm();
  }, [formData]);



  return (
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
        <Heading w={"full"} textAlign={"left"} fontWeight={"600"} size={"md"}>
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
          {inputData.map((input: any, i) => (
            <GridItem position={"relative"}>
              <>
                {input.type === "number" && (
                  <Input
                    label={input.label}
                    type="number"
                    value={formData[input.key]}
                    onChange={(e) => handleFormChange(input.key, e)}
                    rightElement={
                      input.suffix && (
                        <Box
                          background={colors.background.main}
                          px={4}
                          h={"100%"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Text>{input.suffix}</Text>
                        </Box>
                      )
                    }
                  />
                )}
                {input.type === "select" && (
                  <Select
                    containerProps={{
                      width: "100%",
                      justifyContent: ["space-between"],
                    }}
                    label={input.label}
                    options={input.options}
                    value={formData[input.key]}
                    onChange={(e) =>
                      handleFormChange(input.key, e.target.value)
                    }
                  />
                )}
                {input.type === "switch" && (
                  <Switch
                    containerProps={{
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                    label={input.label}
                  />
                )}
                {input.type === "autocomplete" && (
                  <AutoComplete
                    options={input.options}
                    label={input.label}
                    containerProps={{
                      width: "100%",
                    }}
                  />
                )}
                {errors[input.key] && (
                  <Text
                    right={0}
                    position={"absolute"}
                    mt={1}
                    fontSize={"xs"}
                    textAlign={"right"}
                    color={"red.500"}
                  >
                    {errors[input.key]}
                  </Text>
                )}
              </>
            </GridItem>
          ))}
        </Grid>
        <Button
          onClick={() => handleCalculate(formData)}
          mt={"30px"}
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
  );
};

export default InputSection;

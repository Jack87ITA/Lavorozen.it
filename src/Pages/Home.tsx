import WebLayout from "../Components/Layouts/WebLayout";
import Banner from "../Components/Home/Banner";

import InputSection from "../Components/Home/InputSection";
import Result from "../Components/Home/Result";
import { useRef, useState } from "react";
import { InputAPI } from "../Apis/inputAPI";
import Loader from "../Components/Loader/Loader";
import { errorHandler } from "../Utils/handler";
import { useToastWrapper } from "../Wrapper/toastWrapper";

type Props = {};

const defaultData = [
  {
    id: "stipendioNetto",
    label: "Stipendio netto",
    data: [58754, 4520],
    backgroundColor: "#61CE70",
    showOnGraph: true,
    isHeading: true,
  },
  {
    id: "inps",
    label: "INPS",
    data: [5840, 449],
    backgroundColor: "#f6f8f5",
    showOnGraph: true,
  },
  {
    id: "totalIrpef",
    label: "IRPEF",
    data: [35414, 2724],
    backgroundColor: "#96e6e6",
    showOnGraph: true,
  },
  {
    id: "totalDeductions",
    label: "Detrazioni fiscali",
    data: [8, 1],
    backgroundColor: "#96e6e6",
    showOnGraph: true,
  },
  {
    id: "trattamentoIntegrativo",
    label: "Trattamento Integrativo",
    data: [8, 1],
    backgroundColor: "#0EF1B9",
    showOnGraph: true,
  },
  {
    id: "ral",
    label: "Retribuzione Lorda",
    data: [100000, 7692],
    backgroundColor: "#FFFFFF",
    isHeading: true,
    showOnGraph: false,
  },
  {
    id: "inpsAzienda",
    label: "INPS azienda",
    data: [27680, 2212],
    backgroundColor: "#FFFFFF",
    showOnGraph: false,
  },
  {
    id: "inail",
    label: "INAIL",
    data: [500, 38],
    backgroundColor: "#FFFFFF",
    showOnGraph: false,
  },
  {
    id: "tfr",
    label: "TFR",
    data: [6907, 531],
    backgroundColor: "#FFFFFF",
    showOnGraph: false,
  },
  {
    id: "costoAzendia",
    label: "Costo Azienda",
    data: [6907, 531],
    backgroundColor: "#fff",
    showOnGraph: false,
    isHeading: true,
  },
];

const Home = (props: Props) => {
  const resultRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { error } = useToastWrapper();

  const [resultData, setResultData] = useState<any>(defaultData);

  const getResults = async (values: any) => {
    try {
      setIsLoading(true);

      const res = await InputAPI.postGetResult(values);
      console.log(values);
      if (res.success) {
        const newData = resultData.map((d: any) => {
          Object.keys(res.data.result).forEach((key) => {
            if (d.id === key) {
              d.data = [res.data.result[key][0], res.data.result[key][1]];
            }
          });
          return d;
        });
        

        setResultData(newData);
      }
    } catch (e) {
      const errMsg = errorHandler(e);
      error(errMsg);
    } finally {
      setIsLoading(false);
    }
  };


  
  const handleCalulate = (input: any) => {
    getResults(input);

    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <WebLayout>
      <>
        {isLoading && <Loader />}
        <Banner />

        <InputSection handleCalculate={handleCalulate} />

        <Result data={resultData} resultRef={resultRef} />
      </>
    </WebLayout>
  );
};

export default Home;

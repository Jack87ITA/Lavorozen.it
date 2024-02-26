import WebLayout from "../Components/Layouts/WebLayout";
import Banner from "../Components/Home/Banner";

import InputSection from "../Components/Home/InputSection";
import Result from "../Components/Home/Result";
import { useRef } from "react";

type Props = {};

const Home = (props: Props) => {
  
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalulate = () => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <WebLayout>
      <>
        <Banner />

        <InputSection handleCalculate={handleCalulate} />

        <Result resultRef={resultRef} />
      </>
    </WebLayout>
  );
};

export default Home;

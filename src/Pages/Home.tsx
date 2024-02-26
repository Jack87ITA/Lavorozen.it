import WebLayout from "../Components/Layouts/WebLayout";
import Banner from "../Components/Home/Banner";

import InputSection from "../Components/Home/InputSection";
import Result from "../Components/Home/Result";

type Props = {};

const Home = (props: Props) => {
  return (
    <WebLayout>
      <>
        <Banner />

        <InputSection />

        <Result />
      </>
    </WebLayout>
  );
};

export default Home;

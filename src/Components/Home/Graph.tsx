import { Box, Text } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, value }: any) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className=" relative d-flex w-[100%] justify-center items-center">
      <Doughnut data={data} options={options} />
      <Box
        transform={"translate(-50%, -50%)"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
      >
        <Text textAlign={"center"} fontWeight={600}>
          {" "}
          € {value?.toLocaleString()}
        </Text>
        <Text textAlign={"center"} fontSize={"sm"} fontWeight={600}>
          Stipendo Netto
        </Text>
      </Box>
    </div>
  );
};

export default DoughnutChart;

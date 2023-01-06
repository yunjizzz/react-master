import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import moment from "moment";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId),
    {
        refetchInterval: 10000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) as number[],
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: { height: 500, width: 500, toolbar: {show:false}, background: "transparent", },
            grid: {show: false},
            stroke:{
                curve: "smooth",
                width:3
            },
            yaxis: {show: false},
            xaxis: {
                axisBorder: {show: false},
                axisTicks: {show: false},
                labels : {show: false},
                categories: data?.map((value) => {
                    return moment(value.time_close * 1000).format("YYYY-MM-DD");
                })
            },
            fill:{
                type: "gradient",
                gradient:{ gradientToColors: ["#0be881"], stops:[0,100]}
            },
            colors: ["#0fbcf9"],
            tooltip: {
                y:{
                    formatter:(value) => `$${value}`
                }
            }
          }}
        />
      )}
    </div>
  );
}

export default Chart;

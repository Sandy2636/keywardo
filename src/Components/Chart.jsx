import Chart from "react-apexcharts";

export const DonutChart = ({ Data, property }) => {
  const donut = {
    options: {
      chart: {
        width: 100,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 100,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      colors: ["#ff823c", "#0096ff", "#323c46"],
      labels: ["Male", "Female", "Unknown"],

      legend: {
        show: true,
        position: "right",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                function() {
                  return " % ";
                },
              },
            },
          },
        },
      },
    },
    series: Data.map((item) => Number(item[property])),
    // series: [348, 692, 105],
  };
  return (
    <Chart
      type="donut"
      height={"90%"}
      options={donut.options}
      series={donut.series}
    />
  );
};

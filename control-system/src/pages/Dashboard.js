import StatusCard from "components/StatusCard";
import ChartLine from "components/ChartLine";
import ChartBar from "components/ChartBar";

import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import { DashboardInput, call } from "../service/ApiService";
import { useEffect, useState } from "react";
import { FormatAlignJustifyRounded } from "@mui/icons-material";

export default function Dashboard() {
  const [dashboardinput, setDashboardInput] = useState("");

  useEffect(() => {
    call("/userinput/reference", "GET").then((response) => {
      setDashboardInput(response);
      console.log(response);

      let config = {
        type: "bar",
        data: {
          labels: ["고체온", "저체온", "고혈압", "저혈압", "빈맥", "서맥"],
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: [
                "red",
                "#03a9f4",
                "#ffaf38",
                "purple",
                "green",
                "yellow",
              ],
              borderColor: "white",
              data: [
                response.countHighTemperature,
                response.countHypothermia,
                response.countHighBloodPressure,
                response.countHypotension,
                response.countTachycardia,
                response.countBradycardia,
                0,
              ],
              fill: true,
              barThickness: 28,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: false,
          },
          legend: {
            display: false,
            labels: {
              fontColor: "black",
            },
            align: "end",
            position: "bottom",
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "",
                },
                gridLines: {
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                },
                gridLines: {
                  borderDash: [2],
                  drawBorder: false,
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.2)",
                  zeroLineColor: "rgba(33, 37, 41, 0.15)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
      let ctx = document.getElementById("bar-chart").getContext("2d");
      window.myBar = new Chart(ctx, config);
    });
    // DashboardInput(setDashboardInput);
    // console.log(dashboardinput);
  }, []);

  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-3 md:px-8 -mt-28">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <ChartLine />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              {/* <ChartBar dashboardinput={dashboardinput} /> */}
              <Card>
                <CardHeader color="blueGray" contentPosition="left">
                  {/* <h6 className="uppercase text-gray-200 text-xs font-medium">
                    누적 통계
                  </h6> */}
                  <h2 className="text-white text-2xl">누적 이상자 통계</h2>
                </CardHeader>
                <CardBody>
                  <div className="relative h-96">
                    <canvas id="bar-chart"></canvas>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              id="HighTemperature"
              color="red"
              icon="thermostat"
              title="고체온"
              amount={
                dashboardinput.countHighTemperature + "/" + dashboardinput.total
              }
              percentage="37.2°"
              percentageIcon="arrow_upward"
              percentageColor="red"
              date="이상"
            />
            <StatusCard
              id="Hypothermia"
              color="blue"
              icon="thermostat"
              title="저체온"
              amount={
                dashboardinput.countHypothermia + "/" + dashboardinput.total
              }
              percentage="36.1°"
              percentageIcon="arrow_downward"
              percentageColor="blue"
              date="이하"
            />
            <StatusCard
              id="HighBloodPressure"
              color="amber"
              icon="monitor_heart"
              title="고혈압"
              amount={
                dashboardinput.countHighBloodPressure +
                "/" +
                dashboardinput.total
              }
              percentage="수축압120, 이완압80"
              percentageIcon="arrow_upward"
              percentageColor="red"
              date="이상"
            />
            <StatusCard
              id="Hypotension"
              color="purple"
              icon="monitor_heart"
              title="저혈압"
              amount={
                dashboardinput.countHypotension + "/" + dashboardinput.total
              }
              percentage="수축압90, 이완압 60"
              percentageIcon="arrow_downward"
              percentageColor="blue"
              date="이하"
            />
          </div>
        </div>
      </div>
    </>
  );
}

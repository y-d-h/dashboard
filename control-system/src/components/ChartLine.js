import { useEffect, useState } from "react";
import { call } from "../service/ApiService";

import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function ChartLine() {
  const [statistics, setStatistics] = useState("");
  const [date, setDate] = useState(new Date().getFullYear());

  const [arrDayStr, setArrDayStr] = useState([
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
  ]);

  useEffect(() => {
    call("/userinput/statistics", "POST", { year: date }).then((response) => {
      console.log(response);
      // response = response;
      let config = {
        type: "line",
        data: {
          labels: [
            new Date().getMonth() +
              1 +
              "월 " +
              (new Date().getDate() - 6) +
              "일 (" +
              arrDayStr[new Date().getDay() + 1] +
              ")",
            new Date().getMonth() +
              1 +
              "월 " +
              (new Date().getDate() - 5) +
              "일 (" +
              arrDayStr[new Date().getDay() + 2] +
              ")",
            new Date().getMonth() +
              1 +
              "월 " +
              (new Date().getDate() - 4) +
              "일 (" +
              arrDayStr[new Date().getDay() + 3] +
              ")",
            new Date().getMonth() +
              1 +
              "월 " +
              (new Date().getDate() - 3) +
              "일 (" +
              arrDayStr[new Date().getDay() - 3] +
              ")",
            new Date().getMonth() +
              1 +
              "월 " +
              (new Date().getDate() - 2) +
              "일 (" +
              arrDayStr[new Date().getDay() - 2] +
              ")",
            new Date().getMonth() +
              1 +
              "월 " +
              (new Date().getDate() - 1) +
              "일 (" +
              arrDayStr[new Date().getDay() - 1] +
              ")",
            new Date().getMonth() +
              1 +
              "월 " +
              new Date().getDate() +
              "일 (" +
              arrDayStr[new Date().getDay()] +
              ")",
          ],

          datasets: [
            {
              label: "고체온",
              backgroundColor: "red",
              borderColor: "red",
              data: [
                response[6].countHighTemperature,
                response[5].countHighTemperature,
                response[4].countHighTemperature,
                response[3].countHighTemperature,
                response[2].countHighTemperature,
                response[1].countHighTemperature,
                response[0].countHighTemperature,
              ],
              fill: false,
            },
            {
              label: "저체온",
              backgroundColor: "#03a9f4",
              borderColor: "#03a9f4",
              data: [
                response[6].countHypothermia,
                response[5].countHypothermia,
                response[4].countHypothermia,
                response[3].countHypothermia,
                response[2].countHypothermia,
                response[1].countHypothermia,
                response[0].countHypothermia,
              ],
              fill: false,
            },
            {
              label: "고혈압",
              backgroundColor: "#ffaf38",
              borderColor: "#ffaf38",
              data: [
                response[6].countHighBloodPressure,
                response[5].countHighBloodPressure,
                response[4].countHighBloodPressure,
                response[3].countHighBloodPressure,
                response[2].countHighBloodPressure,
                response[1].countHighBloodPressure,
                response[0].countHighBloodPressure,
              ],
              fill: false,
            },
            {
              label: "저혈압",
              backgroundColor: "purple",
              borderColor: "purple",
              data: [
                response[6].countHypotension,
                response[5].countHypotension,
                response[4].countHypotension,
                response[3].countHypotension,
                response[2].countHypotension,
                response[1].countHypotension,
                response[0].countHypotension,
              ],
              fill: false,
            },
            {
              label: "빈맥",
              backgroundColor: "green",
              borderColor: "green",
              data: [
                response[6].countTachycardia,
                response[5].countTachycardia,
                response[4].countTachycardia,
                response[3].countTachycardia,
                response[2].countTachycardia,
                response[1].countTachycardia,
                response[0].countTachycardia,
              ],
              fill: false,
            },
            {
              label: "서맥",
              backgroundColor: "yellow",
              borderColor: "yellow",
              data: [
                response[6].countBradycardia,
                response[5].countBradycardia,
                response[4].countBradycardia,
                response[3].countBradycardia,
                response[2].countBradycardia,
                response[1].countBradycardia,
                response[0].countBradycardia,
              ],
              fill: false,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "black",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(17,17,17,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(17,17,17,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(17, 17, 17, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };

      let ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    });
  }, []);

  return (
    <Card>
      <CardHeader color="indigo" contentPosition="left">
        <h2 className="text-white text-2xl">일별 이상자 통계</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="line-chart"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}

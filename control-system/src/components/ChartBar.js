import { useEffect, useState } from "react";

import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import { DashboardInput } from "../service/ApiService";

export default function ChartBar() {
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "고체온",
          "저체온",
          "고혈압",
          "저혈압",
          "산소포화도",
          "맥박수",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#03a9f4",
            borderColor: "#03a9f4",
            data: [
              // props.countHighTemperature,
              // props.countHypothermia,
              // props.countHighBloodPressure,
              // props.countHypotension,
              // props.countBradycardia,
              // props.countTachycardia,
              // dashboardinput.countHighTemperature,
              // dashboardinput.countHypothermia,
              // dashboardinput.countHighBloodPressure,
              // dashboardinput.countHypotension,
              // dashboardinput.countBradycardia,
              // dashboardinput.countTachycardia,
              0,
            ],
            fill: false,
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
          intersect: true,
        },
        legend: {
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
  }, []);
  return (
    <Card>
      <CardHeader color="blueGray" contentPosition="left">
        <h6 className="uppercase text-gray-200 text-xs font-medium">
          누적 통계
        </h6>
        <h2 className="text-white text-2xl">항목별 이상자 통계</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="bar-chart"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}

import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { call } from "../../service/ApiService";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import Chart from "chart.js";

export default function BPLine() {
  const { phone } = useParams();

  useEffect(() => {
    call("/userinput/detail", "POST", { phone: phone }).then((response) => {
      console.log(response.data);

      let config = {
        type: "line",
        data: {
          labels:
            response.data.length < 7
              ? [
                  "",
                  response.data[0] ? response.data[0].time.substr(5, 6) : "",
                  response.data[1] ? response.data[1].time.substr(5, 6) : "",
                  response.data[2] ? response.data[2].time.substr(5, 6) : "",
                  response.data[3] ? response.data[3].time.substr(5, 6) : "",
                  response.data[4] ? response.data[4].time.substr(5, 6) : "",
                  response.data[5] ? response.data[5].time.substr(5, 6) : "",
                  response.data[6] ? response.data[6].time.substr(5, 6) : "",
                ]
              : [
                  "",
                  response.data[response.data.length - 7].time.substr(5, 6),
                  response.data[response.data.length - 6].time.substr(5, 6),
                  response.data[response.data.length - 5].time.substr(5, 6),
                  response.data[response.data.length - 4].time.substr(5, 6),
                  response.data[response.data.length - 3].time.substr(5, 6),
                  response.data[response.data.length - 2].time.substr(5, 6),
                  response.data[response.data.length - 1].time.substr(5, 6),
                ],
          datasets: [
            {
              label: "수축기혈압",
              backgroundColor: "#ff9800",
              borderColor: "#ff9800",
              data:
                response.data.length < 7
                  ? [
                      response.data[0] ? response.data[0].sbp : null,
                      response.data[0] ? response.data[0].sbp : null,
                      response.data[1] ? response.data[1].sbp : null,
                      response.data[2] ? response.data[2].sbp : null,
                      response.data[3] ? response.data[3].sbp : null,
                      response.data[4] ? response.data[4].sbp : null,
                      response.data[5] ? response.data[5].sbp : null,
                      response.data[6] ? response.data[6].sbp : null,
                    ]
                  : [
                      response.data[response.data.length - 7].sbp,
                      response.data[response.data.length - 7].sbp,
                      response.data[response.data.length - 6].sbp,
                      response.data[response.data.length - 5].sbp,
                      response.data[response.data.length - 4].sbp,
                      response.data[response.data.length - 3].sbp,
                      response.data[response.data.length - 2].sbp,
                      response.data[response.data.length - 1].sbp,
                    ],
              fill: false,
              lineTension: 0,
            },
            {
              label: "이완기혈압",
              fill: false,
              backgroundColor: "#03a9f4",
              borderColor: "#03a9f4",
              data:
                response.data.length < 7
                  ? [
                      response.data[0] ? response.data[0].dbp : null,
                      response.data[0] ? response.data[0].dbp : null,
                      response.data[1] ? response.data[1].dbp : null,
                      response.data[2] ? response.data[2].dbp : null,
                      response.data[3] ? response.data[3].dbp : null,
                      response.data[4] ? response.data[4].dbp : null,
                      response.data[5] ? response.data[5].dbp : null,
                      response.data[6] ? response.data[6].dbp : null,
                    ]
                  : [
                      response.data[response.data.length - 7].dbp,
                      response.data[response.data.length - 7].dbp,
                      response.data[response.data.length - 6].dbp,
                      response.data[response.data.length - 5].dbp,
                      response.data[response.data.length - 4].dbp,
                      response.data[response.data.length - 3].dbp,
                      response.data[response.data.length - 2].dbp,
                      response.data[response.data.length - 1].dbp,
                    ],
              lineTension: 0,
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
        <h2 className="text-white text-2xl">혈압 통계</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="line-chart"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}

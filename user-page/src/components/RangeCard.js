import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Progress from "@material-tailwind/react/Progress";
import MultiRangeBar from "./MultiRangeBar";
import SingleRangeBar from "./SingleRangeBar";
import Icon from "@material-tailwind/react/Icon";
import Avatar from "@mui/material/Avatar";
import { green, yellow, red, orange, blue } from "@mui/material/colors";

import { useEffect, useState, useReducer } from "react";
import { call } from "../service/ApiService";

export default function TrafficCard({ data, phone }) {
  return (
    <Card>
      <CardHeader color="blue" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">측정 결과</h2>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-1">
          <div className="">
            <div className="overflow-x-auto mr-4">
              <table
                className="items-center w-full bg-transparent border-collapse"
                style={{ tableLayout: "fixed" }}
              >
                <tbody>
                  <tr>
                    <th style={{ width: "15%" }}></th>
                    <td className="border-b border-gray-200 align-middle font-bold text-xl px-2 py-4 text-center">
                      {""}
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: green[300] }}>
                        <Icon name="thermostat" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        key={phone}
                        phone={phone}
                        id="temp"
                        name="체온"
                        value={39}
                        unit="°C"
                        min={34}
                        max={40}
                        step={0.1}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: yellow[300] }}>
                        <Icon name="monitor_heart" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        // key={data.data[0].id}
                        name="맥박"
                        value={70}
                        unit="bpm"
                        min={60}
                        max={220}
                        step={1}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: red[300] }}>
                        <Icon name="favorite" size="2xl" />
                      </Avatar>
                    </th>

                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left w-full">
                      {/* <Progress color="blue" value="60" /> */}
                      <MultiRangeBar
                        // key={data.data[0].id}
                        name="혈압"
                        values={[70, 100]}
                        unit="mmHg"
                        min={60}
                        max={220}
                        step={1}
                      />
                    </td>
                  </tr>

                  <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: orange[300] }}>
                        <Icon name="priority_high" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        // key={data.data[0].id}
                        name="몸무게"
                        value={60}
                        unit=""
                        min={50}
                        max={100}
                        step={1}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="">
            <div className="overflow-y-auto"></div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

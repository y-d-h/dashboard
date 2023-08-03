import RangeCard from "components/RangeCard";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Progress from "@material-tailwind/react/Progress";
import MultiRangeBar from "../components/MultiRangeBar";
import SingleRangeBar from "../components/SingleRangeBar";
import Icon from "@material-tailwind/react/Icon";
import Avatar from "@mui/material/Avatar";
import { green, yellow, red, orange, blue } from "@mui/material/colors";

import { call } from "../service/ApiService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { setCookie, getCookie } from "../service/Cookie";

export default function Dashboard() {
  const { phone } = useParams();

  useEffect(() => {
    call("/userinput/detail", "POST", { phone: phone }).then((response) => {
      // console.log([...response.data].reverse());
      // console.log(Object.values([...response.data].reverse())[0].normal);
      // console.log(response.data[0].normal);
      setCookie(
        "IsNormal",
        Object.values([...response.data].reverse())[0].normal
          ? "정상"
          : "비정상",
        {
          path: "/",
        }
      );
    });
  }, []);

  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-2 xl:col-end-5 px-4 mb-14">
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
                              {getCookie("IsNormal") ? (
                                <td className="text-green-500 border-b border-gray-200 align-middle font-bold text-xl px-2 py-4 text-center">
                                  {getCookie("IsNormal")}
                                </td>
                              ) : (
                                <td className="text-red-500 border-b border-gray-200 align-middle font-bold text-xl px-2 py-4 text-center">
                                  {getCookie("IsNormal")}
                                </td>
                              )}
                            </tr>

                            <tr>
                              <th style={{ width: "15%" }}>
                                <Avatar sx={{ bgcolor: green[300] }}>
                                  <Icon name="thermostat" size="2xl" />
                                </Avatar>
                              </th>
                              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <SingleRangeBar
                                  id="temp"
                                  name="체온"
                                  value={getCookie("Temperature")}
                                  // value={38}
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
                                  name="맥박"
                                  value={getCookie("Pulse")}
                                  // value={70}
                                  unit="bpm"
                                  min={40}
                                  max={210}
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
                                  values={[getCookie("Dbp"), getCookie("Sbp")]}
                                  unit="mmHg"
                                  min={20}
                                  max={200}
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
                                  value={getCookie("Weight")}
                                  unit="kg"
                                  min={0}
                                  max={150}
                                  step={1}
                                />
                              </td>
                            </tr>

                            {/* <tr>
                    <th style={{ width: "15%" }}>
                      <Avatar sx={{ bgcolor: blue[300] }}>
                        <Icon name="opacity" size="2xl" />
                      </Avatar>
                    </th>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <SingleRangeBar
                        name="산소포화도"
                        value={100}
                        unit="%"
                        min={20}
                        max={100}
                        step={1}
                      />
                    </td>
                  </tr> */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="">
                      <div className="overflow-y-auto">
                        <img
                          style={{ objectFit: "contain", height: "26vw" }}
                          class="w-full"
                          src="https://img.freepik.com/free-vector/human-anatody-on-white-background_1308-68254.jpg?w=360&t=st=1668135254~exp=1668135854~hmac=d3ad7aab338a4d0b0dd9b961b44a507383ed8e927921e74766306451f3f902f6"
                          alt="Human Image"
                        />
                        <div style={{ textAlign: "right" }}>
                          <a href="https://kr.freepik.com/free-vector/human-anatody-on-white-background_18921080.htm#query=%EC%8B%A0%EC%B2%B4&position=0&from_view=keyword">
                            작가 brgfx
                          </a>
                          출처 Freepik
                        </div>
                        {/* <img
                style={{ objectFit: "contain", height: "26vw" }}
                class="w-full"
                src="https://img.freepik.com/premium-vector/polygon-man_46706-860.jpg?w=740"
                alt="Human Image"
              /> */}
                        {/* <div className="bg-green-400 rounded-2xl border border-gray-300 h-auto w-full z-10" /> */}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

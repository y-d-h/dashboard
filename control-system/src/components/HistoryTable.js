import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import NavbarInput from "@material-tailwind/react/NavbarInput";

import { call, UserInput } from "../service/ApiService";
import { useEffect, useState } from "react";

import Icon from "@material-tailwind/react/Icon";
import SearchBar from "./SearchBar";

export default function HistoryTable() {
  const [userinput, setUserinput] = useState();

  const [name, setName] = useState("");
  const [sex, setSex] = useState(0);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [pulse, setPulse] = useState(0);
  const [sbp, setSbp] = useState(0);
  const [dbp, setDbp] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");

  function arrayui(start, end, step) {
    var array1 = [];
    for (var i = start; i < end; i += step) {
      array1.push(<option>{i}</option>);
    }
    return array1;
  }

  useEffect(() => {
    searchButtonClick();
  }, []);

  function searchButtonClick() {
    call("/userinput/search", "POST", {
      name: name,
      sex: sex,
      age: age,
      height: height,
      weight: weight,
      pulse: pulse,
      sbp: sbp,
      dbp: dbp,
      temperature: temperature,
      phone: phone,
      time: time,
    }).then((response) => {
      console.log(response.data);
      setUserinput(response.data);
      // window.location.href = "/dashboard";
    });
  }
  return (
    <Card>
      <CardHeader color="blueGray" contentPosition="left">
        <div className="grid grid-cols-6 grid-flow-row">
          <h2 className=" text-white text-2xl">사용자 이력</h2>
          <div />
          <div />
          <div />
        </div>
      </CardHeader>

      <CardBody>
        <div className="overflow-x-auto">
          <div className="searchcontent"></div>

          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  이름
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  성별
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  나이
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  키
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  몸무게
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  맥박
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  수축기혈압
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  이완기혈압
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  체온
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  전화번호
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                  측정일자
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <input
                    className="w-20 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 px-2"
                    onChange={(e) => {
                      setName(e.currentTarget.value);
                    }}
                  />
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setSex(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    <option value={1}>남</option>
                    <option value={2}>여</option>
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setAge(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    {arrayui(0, 100, 10)}
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setHeight(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    {arrayui(0, 200, 10)}
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setWeight(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    {arrayui(0, 200, 10)}
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setPulse(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    {arrayui(0, 200, 10)}
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setSbp(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    {arrayui(0, 200, 10)}
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setDbp(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    {arrayui(0, 200, 10)}
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <select
                    onChange={(e) => {
                      setTemperature(e.currentTarget.value);
                    }}
                  >
                    <option value={0}>--</option>
                    {arrayui(34, 40, 1)}
                  </select>
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <input
                    type="tel"
                    className="w-28 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 px-2"
                    onChange={(e) => {
                      setPhone(e.currentTarget.value);
                    }}
                  />
                </th>
                <th className="border-b border-gray-200 align-middle whitespace-nowrap px-2 py-4 text-center">
                  <input
                    className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 px-2"
                    type="date"
                    onChange={(e) => {
                      setTime(e.currentTarget.value);
                    }}
                  />
                </th>
                <th>
                  <button
                    className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 px-2 py-1 shadow-md pt-2"
                    onClick={() => {
                      searchButtonClick();
                    }}
                  >
                    <Icon name="search" size="2xl" />
                  </button>
                </th>
              </tr>
              {userinput &&
                userinput.map((user, idx) => (
                  <tr
                    key={idx}
                    onClick={() => {
                      var url = "/detail/" + user.phone;
                      window.location.href = url;
                    }}
                    className="cursor-pointer hover:bg-[#e2e8f0]"
                  >
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.name}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.sex === 1 ? "남" : "여"}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.age}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.height}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.weight}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.pulse}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.sbp}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.dbp}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.temperature}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.phone &&
                        user.phone
                          .replace(/[^0-9]/g, "")
                          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                          .replace(/(\-{1,2})$/g, "")}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                      {user.time}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

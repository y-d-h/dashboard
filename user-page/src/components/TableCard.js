import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "react-select";
import { call } from "../service/ApiService";

import { setCookie, getCookie } from "../service/Cookie";

export default function CardTable() {
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

  setCookie("Phone", phone, { path: "/" });
  setCookie("Temperature", temperature, { path: "/" });
  setCookie("Sbp", sbp, { path: "/" });
  setCookie("Dbp", dbp, { path: "/" });
  setCookie("Pulse", pulse, { path: "/" });
  setCookie("Weight", weight, { path: "/" });

  function buttonClick() {
    call("/userinput", "POST", {
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
    }).then((response) => {
      console.log(response);
      // alert(response);
    });
  }

  function arrayui(start, end, step) {
    var array1 = [];
    for (var i = start; i < end; i += step) {
      step !== 0.1
        ? array1.push(<option value={i}>{i}</option>)
        : array1.push(<option value={i.toFixed(1)}>{i.toFixed(1)}</option>);
    }
    return array1;
  }

  return (
    <Card>
      <CardHeader color="blue" contentPosition="left">
        <h2 className="text-white text-2xl">사용자 생체 정보 입력</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="phone_number"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  // value="01012345678"
                ></input>
              </div>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  class="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  // value="user000"
                ></input>
              </div>
              <div>
                <label
                  for="sex"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  성별
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                  // value={1}
                >
                  <option value={0}>--</option>
                  <option value={1}>남</option>
                  <option value={2}>여</option>
                </select>
              </div>
              <div>
                <label
                  for="age"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  나이
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  // value={38}
                >
                  <option value={0}>--</option>
                  {arrayui(1, 120, 1)}
                </select>
              </div>
              <div>
                <label
                  for="height"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  키
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                  // value={172}
                >
                  <option value={0}>--</option>
                  {arrayui(20, 220, 1)}
                </select>
              </div>
              <div>
                <label
                  for="weight"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  몸무게
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                  // value={67}
                >
                  <option value={0}>--</option>
                  {arrayui(0, 150, 1)}
                </select>
              </div>
              <div>
                <label
                  for="pulse"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  맥박
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setPulse(e.target.value);
                  }}
                  // value={76}
                >
                  <option value={0}>--</option>
                  {arrayui(40, 210, 1)}
                </select>
              </div>

              <div>
                <label
                  for="sbp"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  수축기 혈압
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setSbp(e.target.value);
                  }}
                  // value={140}
                >
                  <option value={0}>--</option>
                  {arrayui(40, 140, 1)}
                </select>
              </div>
              <div>
                <label
                  for="dbp"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  이완기 혈압
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setDbp(e.target.value);
                  }}
                  // value={73}
                >
                  <option value={0}>--</option>
                  {arrayui(0, 100, 1)}
                </select>
              </div>
              <div>
                <label
                  for="temperature"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  체온
                </label>
                <select
                  class="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setTemperature(e.target.value);
                  }}
                  // value={36.7}
                >
                  <option value={0}>--</option>
                  {arrayui(34, 40, 0.1)}
                </select>
              </div>
            </div>
            <div class="col-span-2 flex justify-center">
              <button
                type="submit"
                class="w-64 bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold py-2 px-4 rounded-full mt-8"
                onClick={(e) => {
                  buttonClick();
                  e.preventDefault();

                  var url = "/result/" + phone;
                  window.location.href = url;
                }}
              >
                제출
              </button>
            </div>
          </form>
        </div>
      </CardBody>
    </Card>
  );
}

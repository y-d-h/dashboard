import React from "react";
import { Link } from "react-router-dom";

import { login } from "../service/ApiService";
import { useRef, useCallback, useState } from "react";

export default function Dashboard() {
  // const [email, setEmail] = useState("");
  // const [pw, setPw] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   login({ loginId: email, password: pw });
  // };

  const idInputElement = useRef();
  const passwordInputElement = useRef();

  const formHandler = useCallback(() => (event) => {
    event.preventDefault();

    const data = {
      email: idInputElement.current?.value,
      password: passwordInputElement.current?.value,
    };

    console.log(data);
    login({ loginId: data.email, password: data.password });
  });

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden -ml-60">
      <div className="w-full p-10 m-auto bg-white rounded-2xl shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 ">
          로그인
        </h1>
        <form className="mt-6" onSubmit={formHandler()}>
          <div className="mb-2">
            <label
              for="id"
              className="block text-sm font-semibold text-gray-800"
            >
              Id
            </label>
            <input
              type="text"
              //onChange={(e) => setEmail(e.target.value)}
              placeholder="ID"
              ref={idInputElement}
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              // onChange={(e) => setPw(e.target.value)}
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              ref={passwordInputElement}
              placeholder="Password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            {/* <Link to="/dashboard"> */}
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              // onClick={() => {
              //   handleSubmit();
              // }}
              type="submit"
            >
              Login
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

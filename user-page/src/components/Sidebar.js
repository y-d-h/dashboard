import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";

import logo from "../assets/img/UserLogo2.png";

import { setCookie, getCookie } from "../service/Cookie";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");

  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <img src={logo} alt="BIDCS Inc. logo"></img>
            {/* <H6 color="gray">사용자 생체정보 측정 및 관제시스템</H6> */}
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to={"/result/" + getCookie("Phone")}
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="accessibility" size="2xl" />
                  측정결과
                </NavLink>
              </li>

              <li className="rounded-lg mb-2 ">
                <NavLink
                  to={"/detail/" + getCookie("Phone")}
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="details" size="2xl" />
                  상세정보
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

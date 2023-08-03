import { call } from "../service/ApiService";
import { useEffect, useState } from "react";

export default function Footer() {
  const [today, setToday] = useState(0);

  useEffect(() => {
    call("/userinput/reference", "GET").then((response) => {
      console.log(response);
      setToday(response.today);
    });
  });

  return (
    <footer className="py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center">
      <p>today : {today}</p>
      <div />

      <ul className="list-unstyled flex">
        <li>
          <a
            className="text-gray-700 hover:text-gray-900 font-medium block text-sm no-underline"
            target="_blank"
            rel="noreferrer"
            href="http://kocw-n.xcache.kinxcdn.com/data/document/2021/kcu/kimogson0914/5.pdf"
          >
            Reference
          </a>
        </li>
      </ul>
    </footer>
  );
}

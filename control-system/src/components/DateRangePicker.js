import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/index.css";
import { DateRangePicker } from "rsuite";

export default function DateRange() {
  const [value, setValue] = React.useState([
    new Date("2017-02-01"),
    new Date("2017-05-20"),
  ]);

  return <DateRangePicker value={value} onChange={setValue} />;
}

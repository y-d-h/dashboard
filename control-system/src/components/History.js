import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { call } from "../service/ApiService";

export default function Reservation() {
  const [rdata, setRdata] = useState([]);
  const [odata, setOdata] = useState([]);
  const [set, Set] = useState();
  const [user_input, setUser_input] = useState([]);

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  let seconds = today.getSeconds(); // 초
  let milliseconds = today.getMilliseconds();
  const time =
    year +
    "/" +
    month +
    "/" +
    date +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    ":" +
    milliseconds;
  console.log(time);

  const update = function (id) {
    call("/reservation/update", "POST", {
      r_id: id,
      status: "수락",
      responsetime: time,
      ualert: true,
      oalert: false,
    }).then((response) => {
      console.log(response);
      window.location.replace("/reservation");
      Set(time);
    });
  };

  const cancel = function (id) {
    call("/reservation/cancel", "POST", {
      r_id: id,
      status: "거절",
      canceltime: time,
      ualert: true,
      oalert: false,
    }).then((response) => {
      console.log(response);
      Set(time);
    });
  };

  const deleteAlert = function (id) {
    call("/reservation/delete", "POST", { r_id: id }).then((response) => {
      console.log(response);
      Set(time);
    });
  };

  useEffect(() => {
    call("/reservation", "GET").then((response) => {
      console.log(response.data);
      setRdata(response.data);
    });
  }, [set]);

  useEffect(() => {
    call("/reservation/owner", "GET").then((response) => {
      console.log(response.data);
      setOdata(response.data);
    });
  }, [set]);

  useEffect(() => {
    call("/userinput", "POST").then((response) => {
      setUser_input(response.data);
    });
  }, []);

  return (
    <Container>
      <br></br>
      <br></br>
      <TableContainer component={Paper} style={{ padding: "15px" }}>
        <Table
          // className={classes.table}
          aria-label="simple table"
        >
          <TableBody>
            {rdata.map((data, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {data.space.s_name}
                </TableCell>
                <TableCell align="right">{data.date}</TableCell>
                <TableCell align="right">{data.r_time}</TableCell>
                <TableCell align="right">{data.space.s_phone}</TableCell>
                <TableCell align="right">{data.status}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      deleteAlert(data.r_id);
                    }}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br></br>
        <Table
          // className={classes.table}
          aria-label="simple table"
        >
          <TableBody>
            {odata.map((data, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {data.space.s_name}
                </TableCell>
                <TableCell align="right">{data.date}</TableCell>
                <TableCell align="right">{data.r_time}</TableCell>
                <TableCell align="right">{data.user.username}</TableCell>
                <TableCell align="right">{data.status}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      update(data.r_id);
                    }}
                  >
                    수락
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      cancel(data.r_id);
                    }}
                  >
                    거절
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

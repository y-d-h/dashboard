import { useState } from "react";
import { call } from "../service/ApiService";

import Icon from "@material-tailwind/react/Icon";

const CSV = function () {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    console.log(array.length);
    array.forEach((element) => {
      const inputdata = {
        name: element.name,
        sex: element.sex,
        age: element.age,
        height: element.height,
        weight: element.weight,
        pulse: element.pulse,
        sbp: element.SBP,
        dbp: element.DBP,
        phone: element.phone,
        temperature: element.temperature,
      };
      console.log(element);
      if (element.name !== "") {
        call("/userinput", "POST", inputdata).then((response) => {
          console.log(response);
        });
      }
    });
    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: "center" }} className="mb-[30rem]">
      <h1 className="my-20">생체측정정보 데이터 업로드</h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <Icon name="upload" size="2xl" />
          <span>업로드</span>
        </button>
      </form>

      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CSV;

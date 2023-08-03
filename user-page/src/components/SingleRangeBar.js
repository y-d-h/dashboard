import { useEffect, useState, react } from "react";
import { Range, getTrackBackground } from "react-range";
import { preProcessFile } from "typescript";

import { call } from "../service/ApiService";

export default function SingleRangeBar(datas) {
  const [values, setValues] = useState([datas.value]);
  const [inputdata, setInputdata] = useState([]);

  const STEP = datas.step;
  const MIN = datas.min;
  const MAX = datas.max;

  return (
    <div
      style={
        {
          // display: "flex",
          // justifyContent: "space-between",
          // flexWrap: "wrap",
          // margin: "2em",
        }
      }
    >
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          // flexWrap: "wrap",
          // margin: "2em",
        }}
      >
        <output style={{ marginTop: "4px" }} id="output" className="text-left">
          {datas.name}
        </output>
        <output style={{ marginTop: "4px" }} id="output" className="text-left">
          {datas.name === "체온"
            ? parseFloat(datas.value).toFixed(1)
            : datas.value}

          {datas.unit}
        </output>
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues({ values })}
        renderTrack={({ props, children }) => (
          <div
            // onMouseDown={props.onMouseDown}
            // onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "10px",
                width: "100%",
                borderRadius: "4px",
                background: `linear-gradient(to right, #33cc33 0%, yellow 50%, red 100%)`,
                // getTrackBackground({
                //   values: this.state.values,
                //   colors: ["blue", "red"],
                //   min: MIN,
                //   max: MAX
                // }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              cursor: "pointer",
              pointerEvents: "none",
            }}
          >
            {/* <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC"
              }}
            /> */}
          </div>
        )}
      />

      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          // flexWrap: "wrap",
          // margin: "2em",
        }}
      >
        <output id="output" className="">
          {datas.min}
        </output>
        <output id="output" className="">
          {(datas.max - datas.min) / 4 + datas.min}
        </output>
        <output id="output" className="">
          {((datas.max - datas.min) / 4) * 2 + datas.min}
        </output>
        <output id="output" className="">
          {((datas.max - datas.min) / 4) * 3 + datas.min}
        </output>
        <output id="output" className="">
          {datas.max}
        </output>
      </div>
    </div>
  );
}

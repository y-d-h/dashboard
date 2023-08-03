import RangeCard from "components/RangeCard";

import { call } from "../service/ApiService";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userinput, setUserinput] = useState();

  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-2 xl:col-end-5 px-4 mb-14">
              <RangeCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

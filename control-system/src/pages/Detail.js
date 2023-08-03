import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { call } from "../service/ApiService";

import BPLine from "components/details/BPLine";
import PulseLine from "components/details/PulseLine";
import PersonalHistory from "components/details/PersonalHistory";

export default function Dashboard() {
  const { phone } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    call("/userinput/detail", "POST", { phone: phone }).then((response) => {
      console.log([...response.data].reverse());
      setData([...response.data].reverse());
    });
  }, []);

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"></div>
        </div>
      </div>

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <BPLine />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <PulseLine />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto mt-12">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <PersonalHistory data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

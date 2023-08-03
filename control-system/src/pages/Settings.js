// import { useState, useEffect } from "react";

// import StatusCard from "components/StatusCard";
// import Card from "@material-tailwind/react/Card";
// import CardRow from "@material-tailwind/react/CardRow";
// import CardStatus from "@material-tailwind/react/CardStatus";
// import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
// import Icon from "@material-tailwind/react/Icon";
// import CardHeader from "@material-tailwind/react/CardHeader";

// import { Output } from "@mui/icons-material";

// export default function Dashboard() {
//   //const [lowtempval, setLowtempval] = useState();

//   function ValueCheck(value) {
//     var slider = document.getElementById("customRange3");
//     var low = document.getElementById("span1");
//     low.innerHTML = value;
//   }

//   return (
//     <>
//       <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
//         <div className="container mx-auto max-w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
//             <div className="px-4 mb-10">
//               <Card>
//                 <CardRow>
//                   <CardStatus amount="amount" className="flex content-start" />
//                 </CardRow>

//                 <CardStatusFooter>
//                   <div class="relative pt-1 w-full">
//                     <label
//                       id="lowtemp"
//                       for="customRange3"
//                       className="form-label"
//                     >
//                       Value: <span id="span1"></span>
//                     </label>
//                     <input
//                       type="range"
//                       className="form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
//                       min="34"
//                       max="36"
//                       step="0.1"
//                       id="customRange3"
//                       onChange={(e) => {
//                         ValueCheck(e.currentTarget.value);
//                       }}
//                     />
//                   </div>
//                 </CardStatusFooter>
//               </Card>
//             </div>

//             <StatusCard
//               color="orange"
//               icon="groups"
//               title="New Users"
//               amount="2,356"
//               percentage="3.48"
//               percentageIcon="arrow_downward"
//               percentageColor="red"
//               date="Since last week"
//             />
//             <StatusCard
//               color="purple"
//               icon="paid"
//               title="Sales"
//               amount="924"
//               percentage="1.10"
//               percentageIcon="arrow_downward"
//               percentageColor="orange"
//               date="Since yesterday"
//             />
//             <StatusCard
//               color="blue"
//               icon="poll"
//               title="Performance"
//               amount="49,65%"
//               percentage="12"
//               percentageIcon="arrow_upward"
//               percentageColor="green"
//               date="Since last month"
//             />
//           </div>
//         </div>
//       </div>

//       {/* <div className="px-3 md:px-8 h-auto -mt-28 mb-16">
//         <div className="container mx-auto max-w-full">
//           <div className="grid grid-cols-1 px-4 h-[600px]">
//             <MapExample />
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }

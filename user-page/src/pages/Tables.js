import TableCard from "components/TableCard";

export default function Dashboard() {
  return (
    <>
      <div className="pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"></div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-[30rem]">
        <div className="container mx-auto max-w-64">
          <div className="grid xl:grid-cols-1 xl:px-[15rem] mb-16">
            <TableCard className="" />
          </div>
        </div>
      </div>
    </>
  );
}

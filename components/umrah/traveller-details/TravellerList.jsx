import DataTable from "@/components/global/data-table";
import { columns } from "@/components/umrah/traveller-details/columns";
import DataTableToolbar from "./data-table-toolbar";
import tavellers from "@/data/travellers.json";
import { Button } from "../../ui/button";
import Link from "next/link";

const TravellerList = ({ showTravellerForm }) => {
  const onBook = () => {
    console.log("Booked");
  };

  return (
    <div className="space-y-10">
      <DataTable
        data={tavellers || []}
        columns={columns}
        showTravellerForm={showTravellerForm}
        ToolbarComponent={DataTableToolbar}
      />
      <div className="flex flex-wrap justify-end gap-x-8 gap-y-4">
        <Button className="w-80" onClick={onBook}>
          Book & Exit
        </Button>
        <Button className="w-80" onClick={onBook} asChild>
          <Link href="/umrah/payment">Continue</Link>
        </Button>
      </div>
    </div>
  );
};

export default TravellerList;

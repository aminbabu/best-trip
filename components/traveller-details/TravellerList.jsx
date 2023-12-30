import DataTable from "@/components/global/data-table";
import { columns } from "@/components/traveller-details/columns";
import DataTableToolbar from "./data-table-toolbar";

const TravellerList = ({ showTravellerForm }) => {
  return (
    <DataTable
      data={[]}
      columns={columns}
      ToolbarComponent={
        <DataTableToolbar showTravellerForm={showTravellerForm} />
      }
    />
  );
};

export default TravellerList;

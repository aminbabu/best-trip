"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

const DataTableToolbar = ({ table, showTravellerForm }) => {
  const handleChange = (event) => {
    table.getColumn("name")?.setFilterValue(event.target.value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 lg:gap-x-5 gap-y-4">
      <h3 className="basis-full sm:basis-auto text-base lg:text-lg text-t-700 font-medium">
        Traveler Management ({table.getCoreRowModel()?.rows?.length})
      </h3>
      <div className="relative ml-auto text-t-700 flex-1 sm:flex-grow-0 sm:flex-shrink-0">
        <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none" />
        <Input
          placeholder="Search by name"
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={handleChange}
          className="sm:w-[272px] py-4 pl-12"
        />
      </div>
      <Button className="font-semibold" onClick={showTravellerForm}>
        <PlusCircleIcon />
        Add Traveler
      </Button>
    </div>
  );
};

export default DataTableToolbar;

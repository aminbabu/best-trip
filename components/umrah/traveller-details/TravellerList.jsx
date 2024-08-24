"use client";

import DataTable from "@/components/global/data-table";
import { columns } from "@/components/umrah/traveller-details/columns";
import DataTableToolbar from "./data-table-toolbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTravelerDetail } from "@/actions/traveler/get-traveler-detail";

const TravellerList = ({ showTravellerForm, id }) => {
  const router = useRouter();
  const [travelerDetails, setTravelerDetail] = useState([])
  let bookingId;
  if (typeof window != undefined) {
    bookingId = localStorage.getItem("bookingId")
  }
  useEffect(() => {
    const getTravelerDetails = async () => {
      try {
        const response = await getTravelerDetail(bookingId)
        setTravelerDetail(response?.data?.travelers)
      } catch (error) {
        console.log(error, "from bookings");
      }
    }
    getTravelerDetails();
  }, [bookingId])
  const onBook = () => {
    router.push("/");
  };

  return (
    <div className="space-y-10">
      <DataTable
        data={travelerDetails || []}
        columns={columns}
        showTravellerForm={showTravellerForm}
        ToolbarComponent={DataTableToolbar}
      />
      <div className="flex flex-wrap justify-end gap-x-8 gap-y-4">
        <Button className="w-80" onClick={onBook}>
          Book & Exit
        </Button>
        <Button className="w-80" onClick={onBook} asChild>
          <Link href={`/umrah/${bookingId}/payment`}>Continue</Link>
        </Button>
      </div>
    </div>
  );
};

export default TravellerList;

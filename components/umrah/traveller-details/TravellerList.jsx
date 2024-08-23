"use client";

import DataTable from "@/components/global/data-table";
import { columns } from "@/components/umrah/traveller-details/columns";
import DataTableToolbar from "./data-table-toolbar";
import tavellers from "@/data/travellers.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const TravellerList = ({ showTravellerForm, id }) => {
  const router = useRouter();
  const { data } = useSession();
  const [travelerDetails, setTravelerDetail] = useState([])
  let bookingId;
  if (typeof window != undefined) {
    bookingId = localStorage.getItem("bookingId")
  }
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/umrah/travelers/${bookingId}`, { headers: { "Authorization": `Bearer ${data?.user?.accessToken}` } });
        setTravelerDetail(response?.data?.travelers)
      } catch (error) {
        console.log(error, "from bookings");
        // Swal.fire({
        //   title: `${"error?.response?.data?.message"}`,
        //   text: "Try Another Package",
        //   icon: "error",
        //   confirmButtonText: "Ok, got it",
        //   confirmButtonColor: "#3ad965",
        // });
      }
    }
    getDetail();
  }, [bookingId,data?.user?.accessToken])
  const onBook = () => {
    console.log("Booked");

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

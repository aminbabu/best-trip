"use client";

import DataTable from "@/components/global/data-table";
// import { columns } from "@/components/umrah/traveller-details/columns";
import DataTableToolbar from "./data-table-toolbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTravelerDetail } from "@/actions/traveler/get-traveler-detail";
import Swal from "sweetalert2";
import DataTableColumnHeader from "@/components/global/data-table-column-header";
import DataTableRowActions from "@/components/umrah/traveller-details/data-table-row-actions";
import Image from "next/image";



const TravellerList = ({  id }) => {

  const router = useRouter();
  const [travelerDetails, setTravelerDetail] = useState([])
  useEffect(() => {
    const getTravelerDetails = async () => {
      try {
        const response = await getTravelerDetail(id)
        setTravelerDetail(response?.travelers)
      } catch (error) {
        console.log(error);
      }
    }
    getTravelerDetails();
  }, [id])
  // const onBook = () => {
  //   if (travelerDetails.length < 1) {
  //     Swal.fire({
  //       text: "Add At-least One Traveler",
  //       icon: "error",
  //       confirmButtonText: "Ok",
  //       confirmButtonColor: "#F70207",
  //     });
  //     return;
  //   } else {
  //     router.push(`/umrah/${id}/payment`);
  //   }
  // };

  const columns = [
    {
      accessorKey: "firstName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-x-3">
          {row.original?.avatar ? (
            <Image
              src={row.getValue("avatar")}
              alt="avatar"
              width={44}
              height={44}
              className="rounded-full w-11 h-11 object-cover flex-shrink-0"
            />
          ) : (
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-t-400/25 flex items-center justify-center text-t-700 text-lg">
              {row.getValue("firstName").charAt(0)}
            </div>
          )}
          {row.getValue("firstName")}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "country",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nationality" />
      ),
      cell: ({ row }) => row.getValue("country"),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "passportNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Passport No" />
      ),
      cell: ({ row }) => row.getValue("passportNumber") ?? "N/A",
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "travelerType",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Type" />
      ),
      cell: ({ row }) => (
        <span className="capitalize">{row.getValue("travelerType")}</span>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        switch (row.getValue("status")) {
          case "pending":
            return (
              <span className="text-[#2A0CDF] capitalize">
                {row.getValue("status")}
              </span>
            );
  
          case "completed":
            return (
              <span className="text-[#23BD33] capitalize">
                {row.getValue("status")}
              </span>
            );
  
          default:
            return (
              <span className="text-[#FD8E1F] capitalize">
                {row.getValue("status")}
              </span>
            );
        }
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Actions" />
      ),
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];
  return (
    <div className="space-y-10">
      <DataTable
        data={travelerDetails || []}
        columns={columns}
      />
    </div>
  );
};

export default TravellerList;

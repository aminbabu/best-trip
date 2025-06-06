"use client";

import DataTableColumnHeader from "@/components/global/data-table-column-header";
import DataTableRowActions from "@/components/umrah/traveller-details/data-table-row-actions";
import Image from "next/image";

export const columns = [
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

"use client";

import DataTableColumnHeader from "@/components/global/data-table-column-header";
import DataTableRowActions from "@/components/umrah/traveller-details/data-table-row-actions";

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => row.getValue("name"),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nationality",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nationality" />
    ),
    cell: ({ row }) => row.getValue("nationality"),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "password_no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Passport No" />
    ),
    cell: ({ row }) => row.getValue("password_no"),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => row.getValue("type"),
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
            <span className="text-[#9747FF] capitalize">
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

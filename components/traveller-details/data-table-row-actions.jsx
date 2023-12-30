"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import { MoreHorizontal } from "lucide-react";

const DataTableRowActions = ({ row }) => {
  const user = { ...row.original };

  const onEdit = () => {
    console.log(user, "edit");
  };

  const onDelete = async () => {
    setLoading(true);
    const response = await deleteClient(task.id);

    if (response?.error) {
      setLoading(false);
      return setError(response?.error?.message);
    }

    // set open flase to close the dialog if request is successful
    setDeleteDialogOpen(false);
    setLoading(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onEdit}>
          <Pencil />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete}>
          <Trash />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;

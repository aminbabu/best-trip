"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PencilLine, Trash2 } from "lucide-react";

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
      <DropdownMenuTrigger className="focus:border-none focus:ring-0 focus:outline-none">
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-transparent">
        <DropdownMenuItem
          className="flex items-center gap-2.5 text-sm text-t-700 cursor-pointer"
          onClick={onEdit}
        >
          <PencilLine size={16} />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2.5 text-sm text-t-700 cursor-pointer"
          onClick={onDelete}
        >
          <Trash2 size={16} />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DataTableRowActions;

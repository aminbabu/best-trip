"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PencilLine } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const DataTableRowActions = ({ row, setOpen }) => {
  const router = useRouter();
  const user = { ...row.original };
  const pathName = usePathname();
  const onEdit = () => {
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
        {/* {user.status === "incomplete" ? ( */}
        <DropdownMenuItem
          className="flex items-center gap-2.5 text-sm text-t-700 cursor-pointer"
        >
          <Link className="flex items-center gap-2" href={`/umrah/${user._id}/traveller-details/edit`}> <PencilLine size={16} />
          Edit</Link>
      </DropdownMenuItem>
      {/* // ) : (
        //   <DropdownMenuItem
        //     className="flex items-center gap-2.5 text-sm text-t-700 cursor-pointer"
        //     onClick={onDelete}
        //   >
        //     <PencilLine size={16} />
        //     Edit
        //   </DropdownMenuItem>
        // )} */}

      {/*  <DropdownMenuSeparator /> */}
    </DropdownMenuContent>
    </DropdownMenu >
  );
};

export default DataTableRowActions;

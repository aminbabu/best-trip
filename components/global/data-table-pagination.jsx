import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons/dist";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DataTablePagination = ({ table }) => {
  const pageStartIndex =
    table.getState().pagination.pageIndex *
    table.getState().pagination.pageSize;
  const pageEndIndex = pageStartIndex + table.getState().pagination.pageSize;
  const totalRows = table.getCoreRowModel()?.rows?.length;

  if (totalRows <= table.getState().pagination.pageSize) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-x-4 text-sm text-[#333333]">
        <div className="flex items-center justify-center">
          {pageStartIndex + 1} -{" "}
          {pageEndIndex < totalRows ? pageEndIndex : totalRows} of {totalRows}{" "}
          items
        </div>
        {/* <div className="flex items-center justify-center">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div> */}
        <div className="flex items-center gap-x-1">
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[60px] px-2 py-1 bg-transparent">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm font-medium">Items per page</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-x-1">
          <Button
            variant="outline"
            className="flex-shrink-0 p-3 h-[2.625rem] w-[2.625rem] min-w-[2.625rem] rounded-full bg-white border-transparent text-black"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          {table.getPageOptions().map((page) => (
            <Button
              key={page}
              variant="outline"
              className={cn(
                "flex-shrink-0 p-3 h-[2.625rem] min-w-[2.625rem] rounded-full bg-white border-transparent text-black",
                {
                  "bg-black text-white pointer-events-none":
                    table.getState().pagination.pageIndex === page,
                }
              )}
              onClick={() => table.setPageIndex(page)}
            >
              {page + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            className="flex-shrink-0 p-3 h-[2.625rem] w-[2.625rem] min-w-[2.625rem] rounded-full bg-white border-transparent text-black"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTablePagination;

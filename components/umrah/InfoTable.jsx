import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InfoTable = ({ table }) => {
  return (
    <Table className="border border-[#f5f5f5] font-normal text-center text-sm md:text-base whitespace-nowrap">
      <TableHeader>
        <TableRow className="border-b-[#f5f5f5]">
          {table?.header?.length
            ? table.header.map((item, index) => (
                <TableHead key={index} className={item.className}>
                  {item.title}
                </TableHead>
              ))
            : null}
        </TableRow>
      </TableHeader>
      <TableBody>
        {table?.body?.length ? (
          table.body.map((item, index) => (
            <TableRow key={index} className="border-b-[#f5f5f5]">
              {item.map((cell, index) => (
                <TableCell key={index} className={cell.className}>
                  {cell.cell}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow className="border-b-[#f5f5f5]">
            <TableCell
              className="p-2 border-r border-r-[#f5f5f5]"
              colspan={table?.header?.length}
            >
              No data found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default InfoTable;

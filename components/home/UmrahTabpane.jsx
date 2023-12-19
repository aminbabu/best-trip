import { Button } from "@/components/ui/button";
import { SearchIcon } from "../icons/svgr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UmrahTabpane = () => {
  return (
    <div className="py-4 flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-x-5">
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <div className="border border-border flex-1 py-8"></div>
      <div className="border border-border flex-1 py-8"></div>
      <div className="border border-border flex-1 py-8"></div>
      <div className="border border-border flex-1 py-8"></div> */}
      <Button size="lg">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default UmrahTabpane;

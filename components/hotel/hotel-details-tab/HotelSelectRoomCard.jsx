import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import RoomFacilitiesCard from "./RoomFacilitiesCard";
import { X } from "lucide-react";
import CancelletionPolicyCard from "./CancelletionPolicyCard";
import RoomDetailsCard from "./RoomDetailsCard";
import GuestAllowedCard from "./GuestAllowedCard";

const selectRoomDialogs = [
  {
    id: 1,
    name: "Room Facilities",
    title: "Room Facilities",
    element: <RoomFacilitiesCard />,
  },
  {
    id: 2,
    name: "Cancelletion Policy",
    title: "Cancelletion Policy",
    element: <CancelletionPolicyCard />,
  },
  {
    id: 3,
    name: "Room Details",
    title: "Room Details",
    element: <RoomDetailsCard />,
  },
  {
    id: 4,
    name: "Guest Allowed",
    title: "Maximum Capacity",
    element: <GuestAllowedCard />,
  },
];

const HotelSelectRoomCard = ({ data }) => {
  return (
    <Card className="border-transparent relative overflow-hidden">
      <CardContent className="p-4 sm:px-5 sm:py-[22px] xl:leading-8 flex flex-col md:flex-row lg:items-center justify-between gap-5">
        <Image
          src={data.img}
          width={266}
          height={266}
          alt={data.name}
          className="aspect-[216/224] w-full lg:max-w-[216px] md:mx-0 md:w-1/2 lg:w-60 flex-shrink-0 rounded-[0.1785rem] object-cover"
        />
        <div className="flex-1 flex flex-col gap-6 justify-between">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-3">
              <h4 className="text-base xl:text-lg text-t-800 font-medium leading-relaxed">
                {data.name}
              </h4>
              <div className="space-y-1.5">
                <p className="text-xs text-t-600 leading-relaxed">
                  Property Type : {data.propertyType}
                </p>
                <p className="text-xs text-t-600 leading-relaxed">
                  View : {data.view}
                </p>
              </div>
              <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-5">
                <ul className="flex gap-3 lg:gap-2">
                  {data.includes.map((spec) => (
                    <li
                      key={spec.id}
                      className="flex gap-x-2 text-sm lg:text-base text-t-600 leading-normal"
                    >
                      {spec.icons}
                      <span className="flex-shrink-0 text-xs leading-relaxed">
                        {spec.service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:self-end space-y-4 lg:text-right lg:w-[60%]">
              <div className="flex flex-col gap-0.5 leading-relaxed">
                <p className="text-t-600 text-xs">*Starting From per Night</p>
                <p className="text-t-900 font-medium text-sm lg:text-base xl:text-lg">
                  BDT {data.roomFee}
                </p>
                <p className="text-t-600 text-xs">
                  {data.guestAllowed.adults} Adults -{data.guestAllowed.childs}{" "}
                  Childs -{data.guestAllowed.room} Room
                </p>
              </div>
              <Button
                size="sm"
                className="font-semibold text-sm lg:text-base px-3 py-2"
                href={`/hotel/${data.id}`}
                asChild
              >
                <Link>Select Room</Link>
              </Button>
            </div>
          </div>
          <div className="bg-p-300 rounded">
            {/* Select Room Facilities Dialogs  */}
            {selectRoomDialogs.map((roomDialog) => (
              <Dialog key={roomDialog.id}>
                <DialogTrigger asChild>
                  <Button className="bg-p-300 hover:bg-p-300 text-t-600 hover:text-p-900 py-1.5 px-3.5 text-xs">
                    {roomDialog.name}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[620px] py-4 px-8">
                  <DialogHeader className="flex-row justify-between items-center">
                    <DialogTitle className="leading-8 text-t-800 font-normal">
                      {roomDialog.name}
                    </DialogTitle>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="secondary"
                        className="p-2 mt-0"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </DialogClose>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">{roomDialog.element}</div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelSelectRoomCard;

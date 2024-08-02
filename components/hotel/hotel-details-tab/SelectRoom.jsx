import React from "react";
import { hotelRoomData } from "@/data/hotel-result";
import HotelSelectRoomCard from "./HotelSelectRoomCard";

const SelectRoom = () => {
  return (
    <div className="space-y-5 lg:space-y-[30px]">
      {hotelRoomData.map((hotelRoom) => (
        <HotelSelectRoomCard key={hotelRoom.id} data={hotelRoom} />
      ))}
    </div>
  );
};

export default SelectRoom;

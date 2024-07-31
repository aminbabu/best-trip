import React from "react";
import { hotelRoomData } from "@/data/hotel-result";
import HotelSelectRoomCard from "./HotelSelectRoomCard";

const SelectRoom = () => {
  return (
    <div>
      {hotelRoomData.map((hotelRoom) => (
        <HotelSelectRoomCard key={hotelRoom.id} data={hotelRoom} />
      ))}
    </div>
  );
};

export default SelectRoom;

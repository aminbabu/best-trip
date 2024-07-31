import { TickIcon } from "@/components/icons/svgr";
import React from "react";

const RoomFacilitiesCard = () => {
  const roomFacilities = [
    { id: 1, name: "Free Valet Parking" },
    { id: 2, name: "Free  WiFi" },
    { id: 3, name: "Breakfast" },
    { id: 4, name: "Free Valet Parking" },
    { id: 5, name: "Free  WiFi" },
    { id: 6, name: "Breakfast" },
  ];
  return (
    <div className="flex flex-wrap justify-between gap-6 bg-p-300 py-2.5 px-5 text-t-600 leading-relaxed rounded">
      {roomFacilities.map((facility) => (
        <div className="flex items-center gap-2.5" key={facility.id}>
          <TickIcon />
          {facility.name}
        </div>
      ))}
    </div>
  );
};

export default RoomFacilitiesCard;

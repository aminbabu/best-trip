import { TickIcon } from "@/components/icons/svgr";
import React from "react";

const guestAllowed = [
  { id: 1, name: "Guest Allowed 4" },
  { id: 2, name: "Adults Allowed 6" },
  { id: 3, name: "Children Allowed 2" },
];

const GuestAllowedCard = () => {
  return (
    <div className="flex flex-wrap justify-between gap-2.5 bg-p-300 py-2.5 px-5 text-t-600 leading-relaxed rounded">
      {guestAllowed?.map((guest) => (
        <div className="flex items-center gap-2.5" key={guest.id}>
          <TickIcon />
          {guest.name}
        </div>
      ))}
    </div>
  );
};

export default GuestAllowedCard;

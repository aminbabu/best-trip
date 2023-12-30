"use client";

import TravellerDetailsForm from "@/components/traveller-details/TravellerDetailsForm";
import TravellerList from "@/components/traveller-details/TravellerList";
import { useState } from "react";

const AddTravellersPage = () => {
  const [addTraveller, setAddTraveller] = useState(true);

  return addTraveller ? (
    <TravellerDetailsForm hideTravellerForm={() => setAddTraveller(false)} />
  ) : (
    <TravellerList showTravellerForm={() => setAddTraveller(true)} />
  );
};

export default AddTravellersPage;

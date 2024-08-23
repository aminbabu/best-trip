"use client";

import Container from "@/components/layouts/Container";
import TravellerDetailsForm from "@/components/umrah/traveller-details/TravellerDetailsForm";
import TravellerList from "@/components/umrah/traveller-details/TravellerList";
import { useState } from "react";

const AddTravellersPage = ({ params }) => {
  const { id } = params;
  const [addTraveller, setAddTraveller] = useState(false);

  return (
    <main className="py-16 bg-[#fbfbfb]">
      <Container>
        {addTraveller ? (
          <TravellerDetailsForm
            hideTravellerForm={() => setAddTraveller(false)}
            id={id}
          />
        ) : (
          <TravellerList
            showTravellerForm={() => setAddTraveller(true)}
            id={id}
          />
        )}
      </Container>
    </main>
  );
};

export default AddTravellersPage;

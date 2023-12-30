"use client";

import Container from "@/components/layouts/Container";
import TravellerDetailsForm from "@/components/umrah/traveller-details/TravellerDetailsForm";
import TravellerList from "@/components/umrah/traveller-details/TravellerList";
import { useState } from "react";

const AddTravellersPage = () => {
  const [addTraveller, setAddTraveller] = useState(false);

  return (
    <main className="py-16 bg-secondary">
      <Container>
        {addTraveller ? (
          <TravellerDetailsForm
            hideTravellerForm={() => setAddTraveller(false)}
          />
        ) : (
          <TravellerList showTravellerForm={() => setAddTraveller(true)} />
        )}
      </Container>
    </main>
  );
};

export default AddTravellersPage;

"use client";

import Container from "@/components/layouts/Container";
import TravelerDetailsForm from "@/components/umrah/traveller-details/TravellerDetailsForm";

const AddTravellersPage = ({ params }) => {
  const { id } = params;

  return (
    <main className="py-16 bg-[#fbfbfb]">
      <Container>
          <TravelerDetailsForm
            id={id}
          />
      </Container>
    </main>
  );
};

export default AddTravellersPage;

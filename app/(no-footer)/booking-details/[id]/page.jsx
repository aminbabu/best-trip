
import ActionButtonContainer from "@/components/booking-details/ActionButtonContainer";
import FareDetailsCard from "@/components/booking-details/FareDetailsCard";
import TravellerBookingForm from "@/components/booking-details/TravellerBookingForm";
import UmrahBookingCard from "@/components/booking-details/UmrahBookingCard";
import Container from "@/components/layouts/Container";
import { Card, CardContent } from "@/components/ui/card";

const travellerList = [
  { id: 1, type: "Adult", no: 1 },
  { id: 2, type: "Child", no: 2 },
  { id: 3, type: "Infant", no: 3 },
];

const BookingDetails = () => {
  return (
    <main className="bg-[#FBFBFB]">
      <Container>
        <div className="grid grid-cols-12 lg:gap-8 pt-[72px] pb-[86px] space-y-8 lg:space-y-0">
          <div className="col-span-12 xl:col-span-9 space-y-10">
            <div>
              <div className="px-[34px] py-6 bg-[#FFEFEF] rounded-t">
                <h2 className="text-base leading-snug font-medium text-t-700">
                  Booking Reference :{" "}
                  <span className="text-p-900">BTU24000024</span>
                </h2>
              </div>
              <Card className="border-transparent relative overflow-hidden">
                <CardContent className="p-4 sm:p-5 lg:p-8 lg:leading-relaxed grid grid-cols-12 justify-between lg:items-center gap-5 xl:gap-[38px] text-t-700">
                  <div className="grid grid-cols-3 xl:flex xl:gap-x-10 col-span-12 xl:col-span-5">
                    <ul className="col-span-1 space-y-5">
                      <li>Customer</li>
                      <li>Email</li>
                      <li>Phone</li>
                      <li>Booked</li>
                      <li>Status</li>
                    </ul>
                    <ul className="col-span-2 space-y-5">
                      <li>: Md Irfanul Haque</li>
                      <li>: irfan@besttrip.travel</li>
                      <li>: 01871249015</li>
                      <li>: Md Irfanul Haque</li>
                      <li>
                        : <span className="text-[#009A34]">Success</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 xl:flex xl:gap-x-10 col-span-12 xl:col-span-6">
                    <ul className="col-span-1 space-y-5">
                      <li>Booked On</li>
                      <li>Payment</li>
                      <li>Issue At</li>
                      <li>Invoice</li>
                      <li>Supplier</li>
                    </ul>
                    <ul className="col-span-2 space-y-5">
                      <li>: 18 February, 2024 - 22:00:22</li>
                      <li>: Online - Visa Card</li>
                      <li>: 18 February, 2024 - 22:00:22</li>
                      <li>: INV24000001</li>
                      <li>: Best Trip Travel</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <UmrahBookingCard />

            <FareDetailsCard />

            {travellerList.map((traveller) => (
              <TravellerBookingForm key={traveller.id} traveller={traveller} />
            ))}
          </div>

          <ActionButtonContainer />
        </div>
      </Container>
    </main>
  );
};

export default BookingDetails;

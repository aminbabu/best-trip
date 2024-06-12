import Container from "@/components/layouts/Container";
import React from "react";
import UmrahBookingCard from "@/components/booking-details/UmrahBookingCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BookingDetails = () => {
  return (
    <main>
      <Container>
        <div className="grid grid-cols-12 gap-8 mt-[72px] mb-[86px]">
          <div className="col-span-9 space-y-10">
            <div>
              <div className="px-[34px] py-[25px] bg-[#FFEFEF] rounded-t">
                <h2 className="text-lg leading-snug font-medium text-t-700">
                  Booking Details :{" "}
                  <span className="text-p-900">BTU24000024</span>
                </h2>
              </div>
              <Card className="border-transparent relative overflow-hidden">
                <CardContent className="p-4 sm:p-5 lg:p-8 lg:leading-relaxed grid grid-cols-12 justify-between lg:items-center gap-5 xl:gap-9 text-t-700">
                  <div className="grid grid-cols-2 xl:flex justify-between col-span-12 xl:col-span-5">
                    <ul className="col-span-1 font-medium space-y-5">
                      <li>Customer</li>
                      <li>Email</li>
                      <li>Phone</li>
                      <li>Booked</li>
                      <li>Status</li>
                    </ul>
                    <ul className="col-span-1 space-y-5">
                      <li>: Md Irfanul Haque</li>
                      <li>: irfan@besttrip.travel</li>
                      <li>: 01871249015</li>
                      <li>: Md Irfanul Haque</li>
                      <li>
                        : <span className="text-[#009A34]">Success</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 xl:flex justify-between col-span-12 xl:col-span-6">
                    <ul className="col-span-1 font-medium space-y-5">
                      <li>Booked On</li>
                      <li>Payment</li>
                      <li>Issue At</li>
                      <li>Invoice</li>
                      <li>Supplier</li>
                    </ul>
                    <ul className="col-span-1 space-y-5">
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

            <div>
              <UmrahBookingCard />
            </div>
          </div>
          <div className="col-span-3 grid space-y-7">
            <Button>Show More Details</Button>
            <Button>Show More Details</Button>
            <Button>Show More Details</Button>
            <Button>Show More Details</Button>
            <Button>Show More Details</Button>
            <Button>Show More Details</Button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BookingDetails;

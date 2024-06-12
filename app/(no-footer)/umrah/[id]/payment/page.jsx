import {
  BusRedIcon,
  CalenderIcon,
  ClockAltIcon,
  HotelIcon,
  LocationCircleIcon,
  PassportIcon,
  PlaneIcon,
  SpoonKnifeIcon,
} from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const PaymentPage = ({ params }) => {
  const { id } = params;

  return (
    <main className="py-20 bg-secondary">
      <Container>
        <Card className="text-t-600 border-transparent max-w-3xl mx-auto">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-t-900 text-lg mb-1.5">
              Quad Share Basis Package
            </h1>
            <p className="mb-6">1 Friday In Makkah- 1 Friday In Madinah</p>
            <div>
              <h3 className="text-base text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Booking Summary
              </h3>
              <div className="flex flex-col md:flex-row justify-between gap-4 px-4 md:px-5 py-6">
                <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
                  <li className="flex gap-x-2 text-sm lg:text-base leading-normal">
                    <LocationCircleIcon className="mt-0.5 flex-shrink-0" />
                    <span className="flex-shrink-0">
                      From Dhaka , Bangladesh
                    </span>
                  </li>
                  <li className="flex gap-x-2 text-sm lg:text-base leading-normal">
                    <CalenderIcon className="mt-0.5 flex-shrink-0" />
                    <span className="flex-shrink-0">
                      Journey Date : 20 Jun, 2024
                    </span>
                  </li>
                  <li className="flex gap-x-2 text-sm lg:text-base leading-normal">
                    <ClockAltIcon className="mt-0.5 flex-shrink-0" />
                    <span className="flex-shrink-0">15 Days | 14 Nights</span>
                  </li>
                </ul>
                <ul className="flex gap-x-4">
                  <li className="flex flex-col items-center gap-y-1 lg:text-sm capitalize">
                    <PlaneIcon
                      className="w-4 h-4 rotate-45"
                      viewBox="0 0 14 14"
                    />
                    Flight
                  </li>
                  <li className="flex flex-col items-center gap-y-1 lg:text-sm capitalize">
                    <HotelIcon className="w-4 h-4" viewBox="0 0 14 14" />
                    Hotel
                  </li>
                  <li className="flex flex-col items-center gap-y-1 lg:text-sm capitalize">
                    <PassportIcon className="w-4 h-4" viewBox="0 0 14 14" />
                    Visa
                  </li>
                  <li className="flex flex-col items-center gap-y-1 lg:text-sm capitalize">
                    <BusRedIcon className="w-4 h-4" viewBox="0 0 16 16" />
                    Transport
                  </li>
                  <li className="flex flex-col items-center gap-y-1 lg:text-sm capitalize">
                    <SpoonKnifeIcon className="w-4 h-4 " viewBox="0 0 17 15" />
                    Food
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Adult (1 Traveller)
              </h3>
              <div className="px-4 md:px-5 py-6">
                <ul className="space-y-2">
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>Base Fare</span>
                    <span>
                      BDT <span className="text-t-800">1,30,000</span>
                    </span>
                  </li>
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>
                      <span className="text-primary">*</span>Including Tax +
                      Others
                    </span>
                    <span>(1 x 1,30,000)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Children (1 Traveller)
              </h3>
              <div className="px-4 md:px-5 py-6">
                <ul className="space-y-2">
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>Base Fare</span>
                    <span>
                      BDT <span className="text-t-800">1,10,000</span>
                    </span>
                  </li>
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>
                      <span className="text-primary">*</span>Including Tax +
                      Others
                    </span>
                    <span>(1 x 1,10,000)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Infant (1 Traveller)
              </h3>
              <div className="px-4 md:px-5 py-6">
                <ul className="space-y-2">
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>Base Fare</span>
                    <span>
                      BDT <span className="text-t-800">40,000</span>
                    </span>
                  </li>
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>
                      <span className="text-primary">*</span>Including Tax +
                      Others
                    </span>
                    <span>(1 x 40,000)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 md:px-5 flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
              <span>
                <span className="text-primary">*</span>Subtotal
              </span>
              <span>
                BDT <span className="text-t-800">2,80,000</span>
              </span>
            </div>
            <div className="grid mt-10">
              <Button asChild>
                <Link href={`/payment-method`}>Continue</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default PaymentPage;

"use client"
import { getBookingData } from "@/actions/booking/get-booking-data";
import { submitBookingForReview } from "@/actions/booking/submit-booking-for-review";
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
import { BusIcon } from "lucide-react";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PaymentPage = ({ params }) => {
  const { id } = params;
  const { data } = useSession()
  const router = useRouter()
  const [bookingData, setBookingData] = useState([])
  useEffect(() => {
    const getBookingDetail = async () => {
      try {
        const response = await getBookingData(id)
        setBookingData(response?.data?.umrahBookings)
      } catch (error) {
      }
    }
    getBookingDetail();
  }, [data?.user?.accessToken, id])
  const adultTravelers = bookingData?.travelers?.filter((traveler) => traveler?.travelerType === "adult")
  const childTravelers = bookingData?.travelers?.filter((traveler) => traveler?.travelerType === "child")
  const infantTravelers = bookingData?.travelers?.filter((traveler) => traveler?.travelerType === "infant")
  const subtotal = Number(bookingData?.umrahPackage?.adultPrice) * adultTravelers?.length + Number(bookingData?.umrahPackage?.childPrice) * childTravelers?.length + Number(bookingData?.umrahPackage?.infantPrice) * infantTravelers?.length
  const submitForReview = async () => {
    try {
      const response = await submitBookingForReview(id)
      router.push("/payment-method/online-banking")
    } catch (error) {
      Swal.fire({
        text: error?.response?.data?.message,
        icon: "error",
        confirmButtonText: "Try Another",
        confirmButtonColor: "#3ad965",
      });
    }
  }


  return (
    <main className="py-20 bg-secondary">
      <Container>
        <Card className="text-t-600 border-transparent max-w-3xl mx-auto">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-t-900 text-lg mb-1.5">
             {bookingData?.umrahPackage?.title}
            </h1>
            <p className="mb-6">{bookingData?.umrahPackage?.subtitle}</p>
            <div>
              <h3 className="text-base text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Booking Summary
              </h3>
              <div className="flex flex-col md:flex-row justify-between gap-4 px-4 md:px-5 py-6">
                <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
                  <li className="flex gap-x-2 text-sm lg:text-base leading-normal">
                    <LocationCircleIcon className="mt-0.5 flex-shrink-0" />
                    <span className="flex-shrink-0">
                      {bookingData?.umrahPackage?.outboundDepartureAirport}
                    </span>
                  </li>
                  <li className="flex gap-x-2 text-sm lg:text-base leading-normal">
                    <CalenderIcon className="mt-0.5 flex-shrink-0" />
                    <span className="flex-shrink-0">
                      Journey Date : {moment(bookingData?.umrahPackage?.journeyDate).format("DD MMMM, YYYY")}
                    </span>
                  </li>
                  <li className="flex gap-x-2 text-sm lg:text-base leading-normal">
                    <ClockAltIcon className="mt-0.5 flex-shrink-0" />
                    <span className="flex-shrink-0">{bookingData?.umrahPackage?.totalDaysAndNights?.days} Days | {bookingData?.umrahPackage?.totalDaysAndNights?.nights} Nights</span>
                  </li>
                </ul>
                <ul className="flex items-center gap-x-4">
                  {
                    bookingData?.umrahPackage?.inclusions?.includes("flight") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <PlaneIcon
                        className="w-6 h-6 rotate-45 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Flight
                    </li>
                  }
                  {
                    bookingData?.umrahPackage?.inclusions?.includes("hotel") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <HotelIcon
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Hotel
                    </li>
                  }
                  {
                    bookingData?.umrahPackage?.inclusions?.includes("visa") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <PassportIcon
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Visa
                    </li>
                  }
                  {
                    bookingData?.umrahPackage?.inclusions?.includes("transport") && <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <BusIcon
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 14 14"
                      />
                      Transport
                    </li>
                  }
                  {
                    bookingData?.umrahPackage?.inclusions?.includes("food") &&
                    <li className="flex flex-col items-center gap-y-1 text-xs lg:text-sm text-t-600 capitalize">
                      <SpoonKnifeIcon
                        fill="#F50308"
                        className="w-6 h-6 text-primary"
                        viewBox="0 0 16 16"
                      />
                      Food
                    </li>
                  }
                </ul>
              </div>
            </div>
            {adultTravelers?.length > 0 && <div>

              <h3 className="text-base text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Adult ({adultTravelers?.length} Traveller{adultTravelers?.length > 1 ? "s" : ""})
              </h3>
              <div className="px-4 md:px-5 py-6">
                <ul className="space-y-2">
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>Base Fare</span>
                    <span>
                      BDT <span className="text-t-800">{bookingData?.umrahPackage?.adultPrice}</span>
                    </span>
                  </li>
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>
                      <span className="text-primary">*</span>Including Tax +
                      Others
                    </span>
                    <span>({adultTravelers?.length} x {bookingData?.umrahPackage?.adultPrice})</span>
                  </li>
                </ul>
              </div>

            </div>}
            {childTravelers?.length > 0 && <div >
              <h3 className="text-base text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Children ({childTravelers?.length} Traveller{childTravelers?.length > 1 ? "s" : ""})
              </h3>
              <div className="px-4 md:px-5 py-6">
                <ul className="space-y-2">
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>Base Fare</span>
                    <span>
                      BDT <span className="text-t-800">{bookingData?.umrahPackage?.childPrice}</span>
                    </span>
                  </li>
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>
                      <span className="text-primary">*</span>Including Tax +
                      Others
                    </span>
                    <span>({childTravelers?.length} x {bookingData?.umrahPackage?.childPrice})</span>
                  </li>
                </ul>
              </div>
            </div>}
            {infantTravelers?.length > 0 && <div>
              <h3 className="text-lg text-t-700 bg-p-300 px-4 md:px-5 py-3.5 rounded-md">
                Infant ({infantTravelers?.length} Traveller{infantTravelers?.length > 1 ? "s" : ""})
              </h3>
              <div className="px-4 md:px-5 py-6">
                <ul className="space-y-2">
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>Base Fare</span>
                    <span>
                      BDT <span className="text-t-800">{bookingData?.umrahPackage?.infantPrice}</span>
                    </span>
                  </li>
                  <li className="flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
                    <span>
                      <span className="text-primary">*</span>Including Tax +
                      Others
                    </span>
                    <span>({infantTravelers?.length} x {bookingData?.umrahPackage?.infantPrice})</span>
                  </li>
                </ul>
              </div>
            </div>}
            <div className="px-4 md:px-5 flex gap-x-4 items-center justify-between text-sm lg:text-base leading-normal">
              <span>
                <span className="text-primary">*</span>Subtotal
              </span>
              <span>
                BDT <span className="text-t-800">{subtotal ?? 0}</span>
              </span>
            </div>
            <div className="grid mt-10">
              <Button onClick={submitForReview}>

                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </main >
  );
};

export default PaymentPage;

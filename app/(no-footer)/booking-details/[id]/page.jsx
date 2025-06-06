"use client"
import { getBookingData } from "@/actions/booking/get-booking-data";
import ActionButtonContainer from "@/components/booking-details/ActionButtonContainer";
import FareDetailsCard from "@/components/booking-details/FareDetailsCard";
import UmrahBookingCard from "@/components/booking-details/UmrahBookingCard";
import Container from "@/components/layouts/Container";
import { Card, CardContent } from "@/components/ui/card";
import TravellerList from "@/components/umrah/traveller-details/TravellerList";
import moment from "moment";
import { useEffect, useState } from "react";



const BookingDetails = ({ params }) => {

  const { id } = params
  const [bookingData, setBookingData] = useState({})
  const [refetch, setRefetch] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBookingData(id)
        setBookingData(response?.umrahBookings)
      } catch (error) {
      }
    }
    fetchData()
  }, [refetch, id])
  const {
    name,
    email,
    phone,
    status,
  } = bookingData?.customer || {};
  return (
    <main className="bg-[#FBFBFB]">
      <Container>
        <div className="grid grid-cols-12 lg:gap-8 pt-[72px] pb-[86px] space-y-8 lg:space-y-0">
          <div className="col-span-12 xl:col-span-9 space-y-10">
            <div>
              <div className="px-[34px] py-6 bg-[#FFEFEF] rounded-t">
                <h2 className="text-base leading-snug font-medium text-t-700">
                  Booking Reference :{" "}
                  <span className="text-p-900">{bookingData?.bookingRefId}</span>
                </h2>
              </div>
              <Card className="border-transparent relative overflow-hidden">
                <CardContent className="p-4 sm:p-5 lg:p-8 lg:leading-relaxed grid grid-cols-12 justify-between lg:items-center gap-5 xl:gap-[38px] text-t-700">
                  <div className="grid grid-cols-3 xl:flex xl:gap-x-10 col-span-12 xl:col-span-5 justify-center items-center">
                    <ul className="col-span-1 space-y-5">
                      <li>Customer</li>
                      <li>Email</li>
                      <li>Phone</li>
                      <li>Booked</li>
                      <li>Status</li>
                    </ul>
                    <ul className="col-span-2 space-y-5">
                      <li>: {name}</li>
                      <li>:{email}</li>
                      <li>: {phone}</li>
                      <li>: N/A</li>
                      <li>
                        : <span className="text-[#009A34]">{status}</span>
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
                      <li>: {moment(bookingData?.createdAt).format("DD MMM, YYYY")}</li>
                      <li>: {bookingData?.invoice?.paymentType ||"N/A"}</li>
                      <li>: N/A</li>
                      <li>: {bookingData?.invoice?.invoiceId||"N/A"}</li>
                      <li>: Best Trip Travel</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <UmrahBookingCard data={bookingData?.umrahPackage} />

            <FareDetailsCard bookingData={bookingData} />
            <TravellerList id={id}/>
          </div>

          <ActionButtonContainer bookingData={bookingData} setRefetch={setRefetch} />
        </div>
      </Container>
    </main>
  );
};

export default BookingDetails;

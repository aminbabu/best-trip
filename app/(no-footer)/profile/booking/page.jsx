
import { getMyBookings } from "@/actions/booking/get-my-bookings";
import { auth } from "@/auth";
import PaymentTable from "@/components/profile/PaymentTable";

const Booking = async () => {
  const session = await auth();
  let bookingData;
  try {
    const response = await getMyBookings()
    bookingData = (response?.data?.umrahBookings)
  } catch (error) {
  }
  return (
    <div>
      <PaymentTable data={bookingData} userData={session?.user} />
    </div>
  );
};

export default Booking;

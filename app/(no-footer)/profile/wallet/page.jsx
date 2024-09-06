import { getMyBookings } from "@/actions/booking/get-my-bookings";
import { auth } from "@/auth";
import BalanceCard from "@/components/profile/BalanceCard";
import PaymentTable from "@/components/profile/PaymentTable";

const BestTripWallet =async () => {
  const user = await auth()
  let bookingData;
  try {
    const response = await getMyBookings()
    bookingData = (response?.data?.umrahBookings)
  } catch (error) {
  }
  return (
    <>
      <BalanceCard user={user?.user}/>
      <PaymentTable userData={user} data={bookingData}/>
    </>
  );
};

export default BestTripWallet;

import { getPaymentRequest } from "@/actions/payment/get-payment-request";
import { auth } from "@/auth";
import BalanceCard from "@/components/profile/BalanceCard";
import PaymentRequestTable from "@/components/profile/PaymentRequestTable";

const BestTripWallet =async () => {
  const user = await auth()
  let paymentRequest;
  try {
    const response = await getPaymentRequest()
    paymentRequest = (response.paymentRequests)
  } catch (error) {
  }
  return (
    <>
      <BalanceCard user={user?.user}/>
      <PaymentRequestTable userData={user} data={paymentRequest}/>
    </>
  );
};

export default BestTripWallet;

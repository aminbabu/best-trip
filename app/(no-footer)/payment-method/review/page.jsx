import MessageCard from "@/components/global/MessageCard";
import { DocIcon } from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import Link from "next/link";

const PaymentReviewPage = ({ searchParams }) => {
  const bookingId = searchParams?.bookingId;
  const status = searchParams.status;
  const refId = searchParams.refId;
  return (
    <main className="py-20 bg-secondary">
      <Container>
        <MessageCard
          href={bookingId ? `/profile/booking` : "/"}
          buttonText={bookingId ? "See Bookings" : "Home"}
          icon={
            <div className="w-28 aspect-square rounded-full bg-p-900 text-white grid place-items-center p-2 mx-auto">
              <DocIcon />
            </div>
          }
          title={`Your ${bookingId ? "Booking" : "Payment"} Is On Under Review`}
          description={`Your ${bookingId ? "Booking" : "Payment"} confirmation we will send you soon!`}
        >
          <p className="mb-4">
            For future reference, your {bookingId ? "bookingId" : "refId"} :
            <span className="text-primary"> {bookingId ? bookingId : refId ? refId : ''}</span>
          </p>
          <p>
            If you have any query please call us at :{" "}
            <Link
              href="tel:+088 1708568965"
              className="text-primary duration-300 hover:text-primary/75"
            >
              +088 1708568965
            </Link>{" "}
            or by sending <br className="hidden sm:block" /> mail to:{" "}
            <Link
              href="mailto:support@beststrip.travel"
              className="text-primary duration-300 hover:text-primary/75"
            >
              support@beststrip.travel
            </Link>
          </p>
        </MessageCard>
      </Container>
    </main>
  );
};

export default PaymentReviewPage;

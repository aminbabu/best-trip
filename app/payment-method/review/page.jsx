import MessageCard from "@/components/global/MessageCard";
import Container from "@/components/layouts/Container";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const PaymentReviewPage = () => {
  return (
    <main className="py-20 bg-secondary">
      <Container>
        <MessageCard
          title="Your Booking Under Review"
          description="Your booking confirmation we will send you soon!"
        >
          <p className="mb-4">
            For future reference, your booking Id :{" "}
            <span className="text-primary">BTU23000024</span>
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

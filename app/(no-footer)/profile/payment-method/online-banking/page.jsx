"use client";

import MessageCard from "@/components/global/MessageCard";
import { LoaderIcon } from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import { useEffect } from "react";

const OnlineBankingPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/profile/payment-method/review";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="py-20 bg-secondary">
      <Container>
        <MessageCard
          title="Please Wait..."
          description="Your payment is currently being processed "
          icon={
            <div className="grid place-items-center">
              <LoaderIcon className="animate-[spin_2s_linear_infinite] text-p-900" />
            </div>
          }
        >
          <p className="lg:text-lg text-primary font-medium">
            Don&apos;t close the browser
          </p>
        </MessageCard>
      </Container>
    </main>
  );
};

export default OnlineBankingPage;

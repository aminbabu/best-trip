
import { getUmrahPackageByIdForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import BookingButton from "@/components/umrah/BookingButton";
import DetailsTab from "@/components/umrah/DetailsTab";
import Overview from "@/components/umrah/Overview";
import { numberSchema } from "@/schema/zod";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import numeral from "numeral";

const UmrahDetailsLayout = async ({ children, params }) => {
  const { id } = params;
  const { umrahPackages: packageDetail } = await getUmrahPackageByIdForCustomers(id)
  if (numberSchema.safeParse(numeral(id).value()).success !== true) {
    return notFound();
  }
  return (
    <main className="bg-secondary py-10 xs:py-12 sm:py-14 md:py-16 lg:py-8 space-y-6">
      <Container className="space-y-6">
        <SessionProvider >
          <Overview item={packageDetail} />
          <DetailsTab id={id} />
          {children}
          <BookingButton id={id} />
        </SessionProvider>
      </Container>
    </main>
  );
};

export default UmrahDetailsLayout;

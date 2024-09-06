
import { getUmrahPackageByIdForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import { auth } from "@/auth";
import Container from "@/components/layouts/Container";
import BookingButton from "@/components/umrah/BookingButton";
import DetailsTab from "@/components/umrah/DetailsTab";
import Overview from "@/components/umrah/Overview";
import { numberSchema } from "@/schema/zod";
import { SessionProvider } from "next-auth/react";
import { notFound } from "next/navigation";
import numeral from "numeral";

const UmrahDetailsLayout = async ({ children, params }) => {
  const session = await auth();
  const user = session?.user;
  const { id } = params;
  let packageDetail;
  try {
    packageDetail = await getUmrahPackageByIdForCustomers(id)
  } catch (error) {
    console.log(error);
  }
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
          <BookingButton id={id} user={user} />
        </SessionProvider>
      </Container>
    </main>
  );
};

export default UmrahDetailsLayout;

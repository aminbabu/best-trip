import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import DetailsTab from "@/components/umrah/DetailsTab";
import Overview from "@/components/umrah/Overview";
import { numberSchema } from "@/schema/zod";
import Link from "next/link";
import { notFound } from "next/navigation";
import numeral from "numeral";

const UmrahDetailsLayout = ({ children, params }) => {
  const { id } = params;

  if (numberSchema.safeParse(numeral(id).value()).success !== true) {
    return notFound();
  }

  return (
    <main className="bg-secondary py-10 xs:py-12 sm:py-14 md:py-16 lg:py-8 space-y-6">
      <Container className="space-y-6">
        <Overview />
        <DetailsTab id={id} />
        {children}
        <div className="grid">
          <Button asChild>
            <Link href={`/umrah/${id}/traveller-details`}>
              Continue Booking
            </Link>
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default UmrahDetailsLayout;

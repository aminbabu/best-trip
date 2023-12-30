import DetailsTab from "@/components/umrah/DetailsTab";
import Overview from "@/components/umrah/Overview";
import { numberSchema } from "@/schema/zod";
import { notFound } from "next/navigation";
import numeral from "numeral";

const UmrahDetailsLayout = ({ children, params }) => {
  const { id } = params;

  if (numberSchema.safeParse(numeral(id).value()).success !== true) {
    return notFound();
  }

  return (
    <main className="bg-secondary py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 space-y-6">
      <Overview />
      <DetailsTab id={id} />
      {children}
    </main>
  );
};

export default UmrahDetailsLayout;

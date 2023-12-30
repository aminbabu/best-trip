import Overview from "@/components/umrah/Overview";

const UmrahDetailsPage = ({ params }) => {
  const { id } = params;

  return (
    <main className="bg-secondary py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 space-y-6">
      <Overview />
    </main>
  );
};

export default UmrahDetailsPage;

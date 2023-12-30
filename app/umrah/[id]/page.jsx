import Overview from "@/components/umrah/Overview";

const UmrahDetailsPage = ({ params }) => {
  const { id } = params;

  return (
    <main className="bg-secondary py-20 space-y-6">
      <Overview />
    </main>
  );
};

export default UmrahDetailsPage;

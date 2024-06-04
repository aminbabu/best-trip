import Container from "@/components/layouts/Container";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const TravellerDetailsPage = ({ params }) => {
  const { id } = params;

  return (
    <main className="bg-secondary py-20 min-h-[calc(100vh-93px)]">
      <Container>
        <Card className="max-w-[648px] mx-auto border-transparent">
          <CardContent className="text-t-700 text-center leading-relaxed px-6 py-8 lg:px-10 lg:py-10">
            <Link
              href={`/umrah/${id}/traveller-details/add`}
              className="mb-8 inline-block text-primary duration-300 hover:text-primary/75"
            >
              <PlusCircle size={60} />
            </Link>
            <h4 className="text-2xl lg:text-[1.75rem] font-semibold mb-4">
              Add Traveler Details
            </h4>
            <p className="text-base lg:text-lg text-t-800 mb-4">
              Enter details exactly as they appear on your passport
            </p>
            <p>
              If you have any query please call us at :{" "}
              <Link
                href="tel:+088 1708568965"
                className="text-primary duration-300 hover:text-primary/75"
              >
                +088 1708568965
              </Link>{" "}
              or by sending mail to:{" "}
              <Link
                href="mailto:support@beststrip.travel"
                className="text-primary duration-300 hover:text-primary/75"
              >
                support@beststrip.travel
              </Link>
            </p>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default TravellerDetailsPage;

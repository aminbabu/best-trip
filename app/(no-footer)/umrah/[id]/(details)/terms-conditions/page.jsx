import { getUmrahPackageByIdForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import { Card, CardContent } from "@/components/ui/card";

const ItineraryPage = async ({ params }) => {
  const { id } = params;
  let packageDetail;
  try {
    packageDetail = await getUmrahPackageByIdForCustomers(id);
  } catch (error) {
  }

  return (
    <div className="space-y-4">
      <Card className="border-transparent">
        <CardContent className="space-y-8 p-4 sm:p-6 lg:p-8">
          <div className="space-y-8">
            <div className="text-t-600">
              {packageDetail?.termsConditions ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: packageDetail.termsConditions,
                  }}
                />
              ) : (
                <p>No terms and conditions available.</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItineraryPage;

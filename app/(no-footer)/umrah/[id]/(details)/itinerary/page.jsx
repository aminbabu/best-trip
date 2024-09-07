import { getUmrahPackageByIdForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import { Card, CardContent } from "@/components/ui/card";
import data from "@/data/itinerary.json";
import Image from "next/image";
const ItineraryPage =async ({ params }) => {
  const { id } = params;
  const { umrahPackages: packageDetail } = await getUmrahPackageByIdForCustomers(id)
  return (
    <div className="space-y-4">
      {data?.length ? (
        data?.map((item, index) => (
          <Card key={item?.id} className="border-transparent">
            <CardContent className="flex flex-col sm:flex-row gap-5 p-4 sm:p-6 lg:p-8">
              <div className="flex-shrink-0 rounded-md sm:w-[173px] aspect-[173/122] overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={173}
                  height={122}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg text-primary mb-1">
                  {item?.day}
                </p>
                <h3 className="text-base md:text-lg text-t-800 font-medium mb-1.5">
                  {item?.title}
                </h3>
                <p className="text-t-600 line-clamp-2">{item?.description}</p>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center">
          <p className="text-t-800 text-lg">No data found</p>
        </div>
      )}
    </div>
  );
};

export default ItineraryPage;

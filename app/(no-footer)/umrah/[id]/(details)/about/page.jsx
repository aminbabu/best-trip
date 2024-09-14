import { getUmrahPackageByIdForCustomers } from "@/actions/umrahPackages/get-umrah-packages";
import { Card, CardContent } from "@/components/ui/card";
import { generateImage } from "@/lib/utils";
import Image from "next/image";
const AboutPage = async ({ params }) => {
  const { id } = params;
  let packageDetail;
  try {
    packageDetail = await getUmrahPackageByIdForCustomers(id)
  } catch (error) {
  }
  return (
    <div className="space-y-4">
      <Card className="border-transparent">
        <CardContent className="space-y-8 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row gap-5">
            {
              packageDetail?.umrahThumbnail && <div className="flex-shrink-0 rounded-md sm:w-[173px] aspect-[173/122] overflow-hidden">
                <Image
                  src={generateImage(packageDetail?.umrahThumbnail)}
                  alt="Umrah Ziyarah"
                  width={173}
                  height={122}
                  className="w-full h-full object-cover"
                />
              </div>
            }
            <div className="flex-1">
              {/* <p className="text-lg text-primary mb-1">Day 1</p> */}
              <h3 className="text-base md:text-lg text-t-800 font-medium mb-1.5">
                {packageDetail?.umrahTitle}
              </h3>
              <p className="text-t-600 line-clamp-2">

                {packageDetail?.umrahExcerpt}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-base md:text-lg text-t-800 font-normal">

            </h2>
            <div className="text-t-600">
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: packageDetail.umrahDescription,
                  }}
                />
              }
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const ItineraryPage = () => {
  return (
    <div className="space-y-4">
      <Card className="border-transparent">
        <CardContent className="space-y-8 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-shrink-0 rounded-md sm:w-[173px] aspect-[173/122] overflow-hidden">
              <Image
                src="/images/home/umrah-ziyarah/01.png"
                alt="Umrah Ziyarah"
                width={173}
                height={122}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              {/* <p className="text-lg text-primary mb-1">Day 1</p> */}
              <h3 className="text-lg text-t-800 font-medium mb-1.5">
                What is the Umrah?
              </h3>
              <p className="text-t-600 line-clamp-2">
                Umrah is an act of worshipping Allah by entering the state of
                Ihram, circumambulating the House, running between Safa and
                Marwa, and having the head shaved or trimmed.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg text-t-800 font-normal">
              How do I enter into the state of Ihram?
            </h2>
            <p className="text-t-600">
              A Muslim enters into the state of Ihram at the place specified by
              Sharia, and shall abstain from the Ihram prohibitions He shall
              recite Talbiyah, saying: &quot;Labbayka Allaahumma Labbayk,
              Labbayka La Shareeka Laka Labbayk. Innal Hamda Wan-ni&apos;mata
              Laka Wal-Mulk, La Shareeka Lak&quot; (Here I am at your service, o
              Allah, at Your service! At Your service! You have no partner! I am
              at Your service! Indeed, all praise and grace belong to You, and
              so does the supreme authority. You have no partner)
              Circumambulation (Tawaf):
            </p>
            <p className="text-t-600">
              He/she goes to the Haram When the Kaaba is to the left, they
              circumambulate (counterclockwise) He begins and ends at the Black
              Stone After completion of the seven rounds, you pray two Rakaah in
              an appropriate place Sa’i (between Safa and Marwa):
            </p>
            <p className="text-t-600">
              A Muslim enters into the state of Ihram at the place specified by
              Sharia, and shall abstain from the Ihram prohibitions He shall
              recite Talbiyah, saying: &quot;Labbayka Allaahumma Labbayk,
              Labbayka La Shareeka Laka Labbayk. Innal Hamda Wan-ni&apos;mata
              Laka Wal-Mulk, La Shareeka Lak&quot; (Here I am at your service, o
              Allah, at Your service! At Your service! You have no partner! I am
              at Your service! Indeed, all praise and grace belong to You, and
              so does the supreme authority. You have no partner)
              Circumambulation (Tawaf):
            </p>
            <p className="text-t-600">
              He/she goes to the Haram When the Kaaba is to the left, they
              circumambulate (counterclockwise) He begins and ends at the Black
              Stone After completion of the seven rounds, you pray two Rakaah in
              an appropriate place Sa’i (between Safa and Marwa):
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItineraryPage;

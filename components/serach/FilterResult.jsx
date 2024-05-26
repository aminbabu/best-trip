import CustomsCard from "@/components/serach/CustomsCard";
import UmrahCard from "@/components/serach/UmrahCard";
import UmrahFlightCard from "@/components/serach/UmrahFlightCard";
import VisaCard from "@/components/serach/VisaCard";
import visaData from "@/data/visa-result.json";

const FilterResult = ({ slug, data }) => {
  if (data.length === 0) {
    return (
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        No result found.
      </h2>
    );
  }

  switch (slug) {
    case "umrah-flight":
      return (
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
          {data.map((item) => (
            <UmrahFlightCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "umrah":
      return (
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
          {data.map((item) => (
            <UmrahCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "visa":
      return (
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
          {visaData.map((item) => (
            <VisaCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "customs":
      return (
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
          {data.map((item) => (
            <CustomsCard key={item.id} data={item} />
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default FilterResult;

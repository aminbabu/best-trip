import CustomsCard from "./CustomsCard";
import UmrahCard from "./UmrahCard";
import UmrahFlightCard from "./UmrahFlightCard";
import VisaCard from "./VisaCard";

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
        <div className="grid grid-cols-1 gap-4 mt-8 sm:mt-10 lg:mt-12">
          {data.map((item) => (
            <UmrahFlightCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "umrah":
      return (
        <div className="grid grid-cols-1 gap-4 mt-8 sm:mt-10 lg:mt-12">
          {data.map((item) => (
            <UmrahCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "visa":
      return (
        <div className="grid grid-cols-1 gap-4 mt-8 sm:mt-10 lg:mt-12">
          {data.map((item) => (
            <VisaCard key={item.id} data={item} />
          ))}
        </div>
      );
    case "customs":
      return (
        <div className="grid grid-cols-1 gap-4 mt-8 sm:mt-10 lg:mt-12">
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

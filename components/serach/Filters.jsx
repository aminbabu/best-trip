import UmrahTabpane from "@/components/global/UmrahTabpane";
import { PencilIcon } from "@/components/icons/svgr";
import VisaTabpane from "../global/VisaTabpane";
import FlightTabpane from "../global/FlightTabpane";
import HotelTabpane from "../global/HotelTabpane";

const Filters = ({ slug }) => {
  switch (slug) {
    case "flight":
      return <FlightTabpane icon={<PencilIcon />} />;
    case "umrah":
      return <UmrahTabpane disabled icon={<PencilIcon />} />;
    case "visa":
      return <VisaTabpane disabled icon={<PencilIcon />} />;
    case "hotel":
      return <HotelTabpane disabled icon={<PencilIcon />} />;
    default:
      return null;
  }
};

export default Filters;

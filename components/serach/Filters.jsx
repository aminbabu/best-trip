import UmrahTabpane from "@/components/global/UmrahTabpane";
import { PencilIcon } from "@/components/icons/svgr";
import VisaTabpane from "../global/VisaTabpane";
import UmrahFlightTabpane from "../global/UmrahFlightTabpane";

const Filters = ({ slug }) => {
  switch (slug) {
    case "flight":
      return <UmrahFlightTabpane icon={<PencilIcon />} />;
    case "umrah":
      return <UmrahTabpane disabled icon={<PencilIcon />} />;
    case "visa":
      return <VisaTabpane disabled icon={<PencilIcon />} />;
    case "customs":
      return <h1>Customs</h1>;
    default:
      return null;
  }
};

export default Filters;

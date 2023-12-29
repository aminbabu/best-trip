import UmrahTabpane from "../global/UmrahTabpane";
import { PencilIcon } from "@/components/icons/svgr";

const Filters = ({ slug }) => {
  switch (slug) {
    case "umrah-flight":
      return <h1>Umrah Flight</h1>;
    case "umrah":
      return <UmrahTabpane disabled icon={<PencilIcon />} />;
    case "visa":
      return <h1>Visa</h1>;
    case "customs":
      return <h1>Customs</h1>;
    default:
      return null;
  }
};

export default Filters;

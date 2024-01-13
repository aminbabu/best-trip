import Tabs from "@/components/global/Tabs";
import {
  BuildingHumanIcon,
  KabaIcon,
  PassportIcon,
  PlaneIcon,
} from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import UmrahTabpane from "@/components/global/UmrahTabpane";
import BgCurve from "@/public/images/home/filters/curve.svg";
import Image from "next/image";
import VisaTabpane from "@/components/global/VisaTabpane";
import CustomsTabpane from "@/components/global/CustomsTabpane";
import UmrahFlightTabpane from "@/components/global/UmrahFlightTabpane";

const data = [
  {
    id: 1,
    icon: (
      <PlaneIcon
        className="w-5 h-5 md:w-6 md:h-6 rotate-45"
        viewBox="0 0 14 14"
      />
    ),
    title: "Umrah Flight",
    value: "umrah-flight",
    component: (
      <UmrahFlightTabpane className="rounded-t-none sm:rounded-tr-md min-h-[174px]" />
    ),
  },
  {
    id: 2,
    icon: <KabaIcon className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 26 26" />,
    title: "Umrah",
    value: "umrah",
    component: (
      <UmrahTabpane className="rounded-t-none sm:rounded-tr-md min-h-[174px]" />
    ),
  },
  {
    id: 3,
    icon: (
      <PassportIcon className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 14 14" />
    ),
    title: "Visa",
    value: "visa",
    component: (
      <VisaTabpane className="rounded-t-none sm:rounded-tr-md min-h-[174px]" />
    ),
  },
  {
    id: 4,
    icon: (
      <BuildingHumanIcon
        className="w-5 h-5 md:w-6 md:h-6"
        viewBox="0 0 26 26"
      />
    ),
    title: "Customs",
    value: "customs",
    component: (
      <CustomsTabpane className="rounded-t-none sm:rounded-tr-md min-h-[174px]" />
    ),
  },
];

const Filters = () => {
  return (
    <div className="relative -mt-[1px]">
      <div className="absolute top-0 left-0 w-full -z-10 h-3/4 lg:h-14 bg-[#FCE6E6] lg:bg-p-300/60">
        <div className="absolute top-full left-0 w-full -mt-[1px] text-[#FCE6E6] lg:text-p-300/60">
          <BgCurve
            viewBox="0 0 1439 198"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </div>
      <Container>
        <Tabs data={data} defaultValue={data[1].value} />
      </Container>
    </div>
  );
};

export default Filters;

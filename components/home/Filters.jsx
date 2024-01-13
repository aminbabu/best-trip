import Tabs from "@/components/global/Tabs";
import {
  BuildingHumanIcon,
  KabaIcon,
  PassportIcon,
  PlaneIcon,
} from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import UmrahTabpane from "@/components/global/UmrahTabpane";
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
    <div className="relative">
      <div className="absolute inset-0 -z-[1] text-[#FCE6E6] bg-[url('/images/home/filters/bg-curve-sm.svg')] lg:bg-[url('/images/home/filters/bg-curve.svg')] bg-no-repeat bg-contain lg:bg-cover 2xl:scale-105 min-[2160px]:scale-[115%] bg-[center_top_383px] lg:bg-bottom -mt-[1px] before:absolute before:inset-0 before:bg-[#FCE6E6] before:h-[384px] before:lg:hidden"></div>
      <Container>
        <Tabs data={data} defaultValue={data[1].value} />
      </Container>
    </div>
  );
};

export default Filters;

import Tabs from "@/components/global/Tabs";
import {
  BuildingHumanIcon,
  KabaIcon,
  PassportIcon,
  PlaneIcon,
} from "@/components/icons/svgr";
import Container from "@/components/layouts/Container";
import UmrahTabpane from "@/components/global/UmrahTabpane";
import BgCurve from "@/public/images/home/filters/curve.svg?url";
import Image from "next/image";
import VisaTabpane from "@/components/global/VisaTabpane";
import CustomsTabpane from "@/components/global/CustomsTabpane";
import UmrahFlightTabpane from "@/components/global/UmrahFlightTabpane";

const data = [
  {
    id: 1,
    icon: (
      <PlaneIcon
        className="rotate-45"
        width="26"
        height="26"
        viewBox="0 0 14 14"
      />
    ),
    title: "Umrah Flight",
    value: "umrah-flight",
    component: (
      <UmrahFlightTabpane className="rounded-t-none min-[618px]:rounded-tr-md min-h-[174px]" />
    ),
  },
  {
    id: 2,
    icon: <KabaIcon width="26" height="26" viewBox="0 0 26 26" />,
    title: "Umrah",
    value: "umrah",
    component: (
      <UmrahTabpane className="rounded-t-none min-[618px]:rounded-tr-md min-h-[174px]" />
    ),
  },
  {
    id: 3,
    icon: <PassportIcon width="26" height="26" viewBox="0 0 14 14" />,
    title: "Visa",
    value: "visa",
    component: (
      <VisaTabpane className="rounded-t-none min-[618px]:rounded-tr-md min-h-[174px]" />
    ),
  },
  {
    id: 4,
    icon: <BuildingHumanIcon width="26" height="26" viewBox="0 0 26 26" />,
    title: "Customs",
    value: "customs",
    component: (
      <CustomsTabpane className="rounded-t-none min-[618px]:rounded-tr-md min-h-[174px]" />
    ),
  },
];

const Filters = () => {
  return (
    <div className="relative -mt-0.5">
      <Image
        src={BgCurve}
        alt="Bg curve"
        className="absolute top-0 left-0 w-full -z-10 object-cover object-center"
      />
      <Container>
        <Tabs data={data} defaultValue={data[1].value} />
      </Container>
    </div>
  );
};

export default Filters;

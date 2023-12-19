import Tabs from "@/components/global/Tabs";
import {
  BuildingHumanIcon,
  KabaIcon,
  PassportIcon,
  PlaneIcon,
} from "../icons/svgr";
import Container from "@/components/layouts/Container";
import UmrahTabpane from "./UmrahTabpane";

const filters = {
  tabs: [
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
    },
    {
      id: 2,
      icon: <KabaIcon width="26" height="26" viewBox="0 0 26 26" />,
      title: "Umrah",
      value: "umrah",
    },
    {
      id: 3,
      icon: <PassportIcon width="26" height="26" viewBox="0 0 14 14" />,
      title: "Visa",
      value: "visa",
    },
    {
      id: 4,
      icon: <BuildingHumanIcon width="26" height="26" viewBox="0 0 26 26" />,
      title: "Customs",
      value: "customs",
    },
  ],
  tabpanes: [
    {
      id: 1,
      value: "umrah-flight",
      component: "Umrah flight in under development",
    },
    {
      id: 2,
      value: "umrah",
      component: <UmrahTabpane />,
    },
    {
      id: 3,
      value: "visa",
      component: "Visa in under development",
    },
    {
      id: 4,
      value: "customs",
      component: "Customs in under development",
    },
  ],
};

const Filters = () => {
  return (
    <div className="pt-32">
      <Container>
        <Tabs tabs={filters.tabs} tabpanes={filters.tabpanes} />
      </Container>
    </div>
  );
};

export default Filters;

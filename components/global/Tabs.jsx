import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const Tabs = ({ tabs, tabpanes }) => {
  return (
    <TabsComponent defaultValue={tabs[1].value}>
      <TabsList className="justify-start h-auto p-0 rounded-b-none rounded-t-md overflow-x-auto max-w-full">
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className={cn(
              "px-6 py-4 gap-x-1 text-base lg:text-lg text-t-700 bg-white rounded-none border-b border-[#D2D1D1] data-[state=active]:bg-p-900 data-[state=active]:text-white data-[state=active]:border-b-p-900",
              {
                "rounded-tl-md": index === 0,
                "rounded-tr-md": index === tabs.length - 1,
              }
            )}
          >
            {tab.icon} {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabpanes.map((tabpane) => (
        <TabsContent
          key={tabpane.id}
          value={tabpane.value}
          className="mt-0 p-2 lg:p-4 rounded-b-md rounded-t-none min-[618px]:rounded-tr-md"
        >
          {tabpane.component}
        </TabsContent>
      ))}
    </TabsComponent>
  );
};

export default Tabs;

import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const Tabs = ({ data, defaultValue }) => {
  return (
    <TabsComponent defaultValue={defaultValue}>
      <TabsList className="h-auto p-0 rounded-t-md rounded-b-none flex md:inline-flex bg-white">
        {data.map((tab, index) => (
          <TabsTrigger
            key={tab.id}
            value={tab.value}
            className={cn(
              "flex-1 p-3 lg:px-6 lg:py-4 flex-col xs:flex-row gap-1 text-xs sm:text-sm md:text-base lg:text-lg text-t-700 bg-white rounded-none data-[state=active]:bg-p-900 data-[state=active]:text-white data-[state=active]:border-b-p-900 font-normal focus-visible:ring-transparent",
              {
                "rounded-tl-md": index === 0,
                "rounded-tr-md": index === data.length - 1,
              }
            )}
          >
            <span>{tab.icon}</span>
            <span>{tab.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((tabpane) => (
        <TabsContent key={tabpane.id} value={tabpane.value} className="mt-0">
          {tabpane.component}
        </TabsContent>
      ))}
    </TabsComponent>
  );
};

export default Tabs;

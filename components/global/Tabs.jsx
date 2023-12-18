import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Tabs = ({ tabs, tabpanes }) => {
  return (
    <TabsComponent defaultValue={tabs[1].value}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.value}>
            {tab.icon} {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabpanes.map((tabpane) => (
        <TabsContent key={tabpane.id} value={tabpane.value}>
          {tabpane.component}
        </TabsContent>
      ))}
    </TabsComponent>
  );
};

export default Tabs;

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ItineraryDetailsTab = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <ItineraryDetailsTab />
      </TabsContent>
      <TabsContent value="password">
        <ItineraryDetailsTab />
      </TabsContent>
    </Tabs>
  );
};

export default ItineraryDetailsTab;

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const DetailsRulesContent = () => {
  return (
    <div className="px-10 py-6 space-y-6">
      <h1>Details Rules</h1>
      <Tabs defaultValue="account" className="grid grid-cols-7 gap-5 md:gap-7">
        <TabsList className="col-span-2 flex-col gap-y-5 items-start justify-normal h-auto">
          {}
          <TabsTrigger
            value="account"
            className="block focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-p-300 data-[state=active]:text-t-600 data-[state=active]:shadow-sm w-full"
          >
            <div className="flex gap-3 items-center">
              <input
                id="account"
                className="substituted"
                type="checkbox"
                aria-hidden="true"
              />
              <label
                htmlFor="account"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Account
              </label>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="block focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-p-300 data-[state=active]:text-t-600 data-[state=active]:shadow-sm w-full"
          >
            <div className="flex gap-3 items-center">
              <input
                id="password"
                className="substituted"
                type="checkbox"
                aria-hidden="true"
              />
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
            </div>
          </TabsTrigger>
          {/* <TabsTrigger value="password">Password</TabsTrigger> */}
        </TabsList>
        <TabsContent value="account" className="col-span-5  bg-p-300 p-4 pr-2">
          <p className="h-[300px] overflow-y-auto pr-4 text-xs text-t-600 leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailsRulesContent;

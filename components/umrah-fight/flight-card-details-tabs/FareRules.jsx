import { BulbOnIcon } from "@/components/icons/svgr";
import { Button } from "@/components/ui/button";
import React from "react";

const FareRules = () => {
  return (
    <div className="px-10 py-6 space-y-9">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">
          <span className="text-p-900">*</span>To view changes, click on the fee
          section
        </p>
        <Button className="px-2.5 py-2 rounded bg-p-300 hover:bg-p-300 text-p-900">
          Details Rules
        </Button>
      </div>
      <div className="w-full overflow-auto">
        <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-xs text-left overflow-hidden text-t-800">
          <ul className="grid grid-cols-3 text-t-900">
            <li className="col-span-1 px-6 py-2.5 border border-[#F5F5F5]">
              <div className="grid items-center leading-relaxed space-y-1">
                <span>Time Frame</span>
                <span className="text-t-600">
                  From Scheduled Flight Departure
                </span>
              </div>
            </li>
            <li className="col-span-1 px-6 py-2.5 border border-[#F5F5F5]">
              <div className="grid items-center leading-relaxed space-y-1">
                <span className="text-p-900">Cancellation Fee</span>
                <span className="text-t-600">(Per Passenger)</span>
              </div>
            </li>
            <li className="col-span-1 px-6 py-2.5 border border-[#F5F5F5] h-auto">
              <div className="grid items-center leading-relaxed space-y-1">
                <span>Date Change Fee</span>
                <span className="text-t-600">(Per Passenger)</span>
              </div>
            </li>
          </ul>
          <ul className="grid grid-cols-3 text-t-600 leading-relaxed">
            <li className="grid col-span1 justify-start px-6 py-2.5 border border-[#F5F5F5]">
              0 hours to 72 hours
            </li>
            <li className="grid items-center col-span-2 justify-start px-6 py-2.5 border border-[#F5F5F5] space-y-1.5">
              <span>Adult : Airlines Policy + Best Trip Service Fee</span>
              <span>Child : Airlines Policy + Best Trip Service Fee</span>
              <span>Infant : Airlines Policy + Best Trip Service Fee</span>
            </li>
          </ul>
          <ul className="grid grid-cols-3 text-t-600 leading-relaxed">
            <li className="grid col-span1 justify-start px-6 py-2.5 border border-[#F5F5F5]">
              0 hours to 72 hours
            </li>
            <li className="grid items-center col-span-2 justify-start px-6 py-2.5 border border-[#F5F5F5] space-y-1.5">
              <span>Adult : Airlines Policy + Best Trip Service Fee</span>
              <span>Child : Airlines Policy + Best Trip Service Fee</span>
              <span>Infant : Airlines Policy + Best Trip Service Fee</span>
            </li>
          </ul>
          <ul className="grid grid-cols-3 text-t-600 leading-relaxed">
            <li className="grid col-span1 justify-start px-6 py-2.5 border border-[#F5F5F5]">
              0 hours to 72 hours
            </li>
            <li className="grid items-center col-span-2 justify-start px-6 py-2.5 border border-[#F5F5F5] space-y-1.5">
              <span>
                Adult : Airlines Policy + No-Show Charge + Best Trip Service Fee
              </span>
              <span>
                Child : Airlines Policy + No-Show Charge + Best Trip Service Fee
              </span>
              <span>
                Infant : Airlines Policy + No-Show Charge + Best Trip Service
                Fee
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center leading-relaxed gap-x-2.5 text-xs text-t-800 bg-p-300 rounded-sm p-2">
        <BulbOnIcon className="text-t-600 flex-shrink-0" />
        The airline fee is indicative, which will depend upon the time of
        cancellation / re-issue as per the airline fare rules.
      </div>
    </div>
  );
};

export default FareRules;

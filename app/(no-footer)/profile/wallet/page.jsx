import { PlusIcon } from "@/components/icons/svgr";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const BestTripWallet = () => {
  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className=" space-y-4">
            <h2 className="text-base lg:text-lg text-t-900 leading-relaxed font-medium">
              Wallet Balance{" "}
            </h2>
            <div className="text-base lg:text-lg text-t-800 leading-relaxed font-medium">
              ৳ 32,487.57{" "}
              <span className="text-t-600 text-base leading-normal">BDT</span>
            </div>
          </div>
          <div>
            <Link href="/profile/add-balance">
              <Button className="px-3.5 py-2 lg:px-5 lg:py-2.5 gap-1 text-xs lg:text-sm bg-p-300 text-primary hover:text-white">
                <PlusIcon className="w-4 h-4" viewBox="0 0 24 24" /> Add Balance
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BestTripWallet;

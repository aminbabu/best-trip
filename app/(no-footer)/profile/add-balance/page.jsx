import DepositForm from "@/components/payment-method/DepositForm";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const AddBalance = () => {
  return (
    <div>
      <Card className="text-t-600 border-transparent max-w-3xl mx-auto">
        <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
          <h1 className="text-t-800 font-semibold text-2xl mb-8">
            Payment Method
          </h1>
          <p className="text-t-800 mb-4">Select Payment Method</p>
          <DepositForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBalance;

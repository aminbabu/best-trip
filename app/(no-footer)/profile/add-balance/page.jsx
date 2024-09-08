"use client"
import DepositForm from "@/components/payment-method/DepositForm";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";

const AddBalance = () => {
  const router = useRouter();
  const onSubmit = async (data) => {
    if (data?.manual) {
      router.push("/profile/manual-banking");
    }
  }
  return (
    <div>
      <Card className="text-t-600 border-transparent max-w-3xl mx-auto">
        <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
          <h1 className="text-t-800 font-medium text-xl mb-8">
            Payment Method
          </h1>
          <p className="text-t-800 mb-4">Select Payment Method</p>
          <DepositForm onSubmit={onSubmit} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBalance;

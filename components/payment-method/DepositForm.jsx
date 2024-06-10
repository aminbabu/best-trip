"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { XIcon } from "lucide-react";
import { useState } from "react";

const DepositForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const [openOnline, setopenOnline] = useState(false);
  const [openManual, setOpenManual] = useState(false);

  const form = useForm({
    defaultValues: {
      manual: false,
      online: false,
      ssl: false,
      agree: false,
      wallet: false,
    },
  });

  const handleManualBanking = (value) => {
    if (value) {
      console.log("manual banking selected", value);
      setopenOnline(false);
    }
  };

  const handleOnlineBanking = (value) => {
    if (value) {
      console.log("online banking selected", value);
      setOpenManual(false);
    }
  };

  const handleFromWallet = (value) => {
    if (value) {
      console.log("wallet is selected", value);
    }
  };

  function onSubmit(values) {
    if (values.manual) {
      router.push("/payment-method/manual-banking");
    }

    if (values.wallet) {
      // if (!values.agree) {
      //   return setError("Please agree with our terms and conditions");
      // }

      router.push("/payment-method/online-banking");
    }

    if (values.online || values.wallet) {
      if (!values.ssl) {
        return setError("Please select a payment method");
      }

      // if (!values.agree) {
      //   return setError("Please agree with our terms and conditions");
      // }

      router.push("/payment-method/online-banking");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[18px]">
          {error && (
            <div className="flex items-center gap-4 justify-between bg-p-300 border border-p-300 text-p-900 px-4 py-3 rounded-md">
              {error}
              <Button
                variant="icon"
                className="p-1"
                onClick={() => setError(null)}
                aria-label="Close"
              >
                <XIcon size={16} />
              </Button>
            </div>
          )}
          {pathname === "/payment-method" && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <FormField
                control={form.control}
                name="wallet"
                render={({ field }) => (
                  <FormItem className="col-span-2 sm:col-span-1 flex items-center gap-x-2 border border-[#F5F5F5] rounded-md px-4 py-3.5 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="border-[#EDEDED]"
                        checked={field.value}
                        onCheckedChange={(value) => {
                          field.onChange(value);
                          handleFromWallet(value);
                        }}
                        disabled={form.watch("online")}
                      />
                    </FormControl>
                    <FormLabel className="text-base font-normal">
                      From Wallet
                    </FormLabel>
                    <p className="ml-auto text-sm">
                      $ {form.watch("wallet") && 100}
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {pathname === "/profile/add-balance" && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <FormField
                control={form.control}
                name="manual"
                render={({ field }) => (
                  <FormItem className="col-span-2 sm:col-span-1 flex items-center gap-x-2 border border-[#F5F5F5] rounded-md px-4 py-3.5 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="border-[#EDEDED]"
                        checked={openManual}
                        onCheckedChange={(value) => {
                          field.onChange(value);
                          handleManualBanking(value);
                          setOpenManual(value);
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-base font-normal">
                      Manual Banking
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="online"
                render={({ field }) => (
                  <FormItem className="col-span-2 sm:col-span-1 flex items-center gap-x-2 border border-[#F5F5F5] rounded-md px-4 py-3.5 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="border-[#EDEDED]"
                        checked={openOnline}
                        onCheckedChange={(value) => {
                          field.onChange(value);
                          handleOnlineBanking(value);
                          setopenOnline(value);
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-base font-normal">
                      Online Banking
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {openManual && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-7">
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  Pubali Bank Limited
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm lg:text-base">
                      Account : Best Travels Ltd.
                    </li>
                    <li className="text-sm lg:text-base">
                      A/C Type : Current Account
                    </li>
                    <li className="text-sm lg:text-base">
                      Account No : 13876342617476218
                    </li>
                    <li className="text-sm lg:text-base">
                      Branch Name : Uttara Branch
                    </li>
                    <li className="text-sm lg:text-base">
                      Routing No : 02026439324
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  Islami Bank Ltd.
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm lg:text-base">
                      Account : Best Travels Ltd.
                    </li>
                    <li className="text-sm lg:text-base">
                      A/C Type : Current Account
                    </li>
                    <li className="text-sm lg:text-base">
                      Account No : 13876342617476218
                    </li>
                    <li className="text-sm lg:text-base">
                      Branch Name : Uttara Branch
                    </li>
                    <li className="text-sm lg:text-base">
                      Routing No : 02026439324
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  AB Bank Ltd.
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm lg:text-base">
                      Account : Best Travels Ltd.
                    </li>
                    <li className="text-sm lg:text-base">
                      A/C Type : Current Account
                    </li>
                    <li className="text-sm lg:text-base">
                      Account No : 13876342617476218
                    </li>
                    <li className="text-sm lg:text-base">
                      Branch Name : Uttara Branch
                    </li>
                    <li className="text-sm lg:text-base">
                      Routing No : 02026439324
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  Duth-Bangla Bank Limited
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm lg:text-base">
                      Account : Best Travels Ltd.
                    </li>
                    <li className="text-sm lg:text-base">
                      A/C Type : Current Account
                    </li>
                    <li className="text-sm lg:text-base">
                      Account No : 13876342617476218
                    </li>
                    <li className="text-sm lg:text-base">
                      Branch Name : Uttara Branch
                    </li>
                    <li className="text-sm lg:text-base">
                      Routing No : 02026439324
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {openOnline && (
            <div className="grid grid-cols-2 gap-x-6">
              <Separator className="bg-[#F5F5F5] mb-[18px] col-span-2" />
              <div className="space-y-10 col-span-1 ">
                <FormField
                  control={form.control}
                  name="ssl"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-x-2 border border-[#F5F5F5] rounded-md px-4 py-3.5 space-y-0">
                      <FormControl>
                        <Checkbox
                          className="border-[#EDEDED]"
                          checked={field.value}
                          onCheckedChange={(value) => {
                            field.onChange(value);
                            handleOnlineBanking(value);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="flex items-center gap-x-2 font-normal text-base">
                        <Image
                          src="/images/payment/ssl-commerz.png"
                          width={70}
                          height={16}
                          alt="SSL Commerz"
                        />
                        SSL Commerz
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="agree"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          className="border-[#EDEDED]"
                          checked={field.value}
                          onCheckedChange={(value) => {
                            field.onChange(value);
                            handleOnlineBanking(value);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="flex items-center gap-x-2 font-normal text-base">
                        I agree with Best Trips{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-primary duration-300 hover:text-primary/75"
                        >
                          Privacy Policy
                        </Link>
                        and{" "}
                        <Link
                          href="/terms-and-conditions"
                          className="text-primary duration-300 hover:text-primary/75"
                        >
                          Terms & Conditions
                        </Link>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
            </div>
          )}
          {form.watch("wallet") && (
            <div className="space-y-8">
              {/* <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="border-[#EDEDED]"
                        checked={field.value}
                        onCheckedChange={(value) => {
                          field.onChange(value);
                          handleFromWallet(value);
                        }}
                      />
                    </FormControl>
                    <FormLabel className="flex items-center gap-x-2 font-normal">
                      I agree with Best Trips{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-primary duration-300 hover:text-primary/75"
                      >
                        Privacy Policy
                      </Link>
                      and{" "}
                      <Link
                        href="/terms-and-conditions"
                        className="text-primary duration-300 hover:text-primary/75"
                      >
                        Terms & Conditions
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>
          )}
          <div className="col-span-2 grid">
            <Button
              className={`py-[15px] ${openOnline ? "" : "mt-6"} `}
              type="submit"
              disabled={
                !form.watch("manual") &&
                !form.watch("online") &&
                !form.watch("wallet")
              }
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default DepositForm;

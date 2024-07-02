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
  const [openOnline, setOpenOnline] = useState(false);
  const [openManual, setOpenManual] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [openFullPayment, setOpenFullPayment] = useState(false);
  const [openPartPaymnet, setOpenPartPaymnet] = useState(false);

  console.log(openWallet, pathname === "/booking-details");

  const form = useForm({
    defaultValues: {
      manual: false,
      online: false,
      ssl: false,
      full: false,
      partial: false,
      wallet: false,
    },
  });

  const handleManualBanking = (value) => {
    if (value) {
      console.log("manual banking selected", value);
      setOpenOnline(false);
    }
  };

  const handleOnlineBanking = (value) => {
    if (value) {
      console.log("online banking selected", value);
      setOpenManual(false);
      setOpenWallet(false);
    }
  };

  const handleFromWallet = (value) => {
    if (value) {
      console.log("wallet is selected", value);
      setOpenOnline(false);
    }
  };

  const handleFullPayment = (value) => {
    if (value) {
      console.log("full payment is selected", value);
      setOpenPartPaymnet(false);
    }
  };
  const handlePartPayment = (value) => {
    if (value) {
      console.log("partial payment is selected", value);
      setOpenFullPayment(false);
    }
  };

  function onSubmit(values) {
    if (values.manual && pathname === "/payment-method") {
      router.push("/payment-method/manual-banking");
      console.log(values.manual && pathname === "/payment-method");
    }

    if (values.manual && pathname === "/profile/add-balance") {
      router.push("/profile/manual-banking");
      console.log(values.manual && pathname === "/profile/add-balance");
    }

    console.log(!values.part, !values.full);

    if (openWallet && pathname === "/booking-details") {
      if (!values.full && !values.part) {
        return setError(
          <>
            <p className="text-sm">
              You don&apos;t have enough balance to complete this payment.
              Please{" "}
              <Link href="/profile/add-balance">
                <Button className="px-2 py-1 text-xs mx-1 rounded-sm">
                  deposit now
                </Button>
              </Link>{" "}
              to continue
            </p>
          </>
        );
      }
      router.push("/payment-method/online-banking");
    } else if (openWallet && pathname === "/profile/add-balance") {
      router.push("/payment-method/online-banking");
    }

    if (openOnline || openManual) {
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

          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {/* wallet */}
            {pathname === "/payment-method" ||
              ("/booking-details" && (
                <FormField
                  control={form.control}
                  name="wallet"
                  render={({ field }) => (
                    <FormItem className="col-span-2 sm:col-span-1 flex items-center gap-x-2 border border-[#F5F5F5] rounded-md px-4 py-3.5 space-y-0">
                      <FormControl>
                        <Checkbox
                          className="border-[#EDEDED]"
                          checked={openWallet}
                          onCheckedChange={(value) => {
                            field.onChange(value);
                            handleFromWallet(value);
                            setOpenWallet(value);
                          }}
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
              ))}
            {/* manual banking */}
            {pathname === "/payment-method" && (
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
            )}
            {/* online banking */}
            {pathname === "/profile/add-balance" ||
              ("/booking-details" && (
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
                            setOpenOnline(value);
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
              ))}
          </div>

          {openManual && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-7">
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  Pubali Bank Limited
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm">Account : Best Travels Ltd.</li>
                    <li className="text-sm">A/C Type : Current Account</li>
                    <li className="text-sm">Account No : 13876342617476218</li>
                    <li className="text-sm">Branch Name : Uttara Branch</li>
                    <li className="text-sm">Routing No : 02026439324</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  Islami Bank Ltd.
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm">Account : Best Travels Ltd.</li>
                    <li className="text-sm">A/C Type : Current Account</li>
                    <li className="text-sm">Account No : 13876342617476218</li>
                    <li className="text-sm">Branch Name : Uttara Branch</li>
                    <li className="text-sm">Routing No : 02026439324</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  AB Bank Ltd.
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm">Account : Best Travels Ltd.</li>
                    <li className="text-sm">A/C Type : Current Account</li>
                    <li className="text-sm">Account No : 13876342617476218</li>
                    <li className="text-sm">Branch Name : Uttara Branch</li>
                    <li className="text-sm">Routing No : 02026439324</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED]">
                <h3 className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                  Duth-Bangla Bank Limited
                </h3>
                <div className="px-4 md:px-5 py-6">
                  <ul className="space-y-2">
                    <li className="text-sm">Account : Best Travels Ltd.</li>
                    <li className="text-sm">A/C Type : Current Account</li>
                    <li className="text-sm">Account No : 13876342617476218</li>
                    <li className="text-sm">Branch Name : Uttara Branch</li>
                    <li className="text-sm">Routing No : 02026439324</li>
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
          {openWallet && (
            <div className="space-y-8">
              {pathname === "/booking-details" && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  <FormField
                    control={form.control}
                    name="full"
                    render={({ field }) => (
                      <FormItem className="space-y-0 col-span-2 sm:col-span-1">
                        <FormLabel className="flex gap-x-2 font-normal">
                          <FormControl>
                            <Checkbox
                              className="border-[#EDEDED]"
                              checked={openFullPayment}
                              onCheckedChange={(value) => {
                                field.onChange(value);
                                handleFullPayment(value);
                                setOpenFullPayment(value);
                              }}
                            />
                          </FormControl>
                          <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED] flex-1">
                            <div className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                              <span>Continue with full payment</span>
                            </div>
                            <div className="px-4 md:px-5 py-6 flex items-center gap-3">
                              <div>
                                Total to Pay BDT
                                <span className="text-3xl block">210500</span>
                              </div>
                            </div>
                          </div>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="partial"
                    render={({ field }) => (
                      <FormItem className="space-y-0 col-span-2 sm:col-span-1">
                        <FormLabel className="flex gap-x-2 font-normal">
                          <FormControl>
                            <Checkbox
                              className="border-[#EDEDED]"
                              checked={openPartPaymnet}
                              onCheckedChange={(value) => {
                                field.onChange(value);
                                handlePartPayment(value);
                                setOpenPartPaymnet(value);
                              }}
                            />
                          </FormControl>
                          <div className="col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED] flex-1">
                            <div className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                              <span>Continue with partial payment</span>
                            </div>
                            <div className="px-4 md:px-5 py-6 flex items-center gap-3">
                              <div>
                                Total to Pay BDT
                                <span className="text-3xl block">29500</span>
                              </div>
                            </div>
                          </div>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
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

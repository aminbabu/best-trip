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
import { usePathname } from "next/navigation";
import { XIcon } from "lucide-react";
import { useState } from "react";
const DepositForm = ({ bookingData, onSubmit, loading }) => {
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const [openOnline, setOpenOnline] = useState(false);
  const [openManual, setOpenManual] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [openFullPayment, setOpenFullPayment] = useState(false);
  const [openPartPaymnet, setOpenPartPaymnet] = useState(false);

  const [balance, setBalance] = useState(100);
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
      setOpenOnline(false);
    }
  };

  const handleOnlineBanking = (value) => {
    if (value) {
      setOpenManual(false);
      setOpenWallet(false);
    }
  };

  const handleFromWallet = (value) => {
    if (value) {
      setOpenOnline(false);
    }
  };

  const handleFullPayment = (value) => {
    if (value) {
      setOpenPartPaymnet(false);
    }
  };

  const handlePartPayment = (value) => {
    if (value) {
      setOpenFullPayment(false);
    }
  };
  // function onSubmit(values) {
  //   if (openManual && pathname === "/profile/payment-method") {
  //     // router.push("/profile/payment-method/manual-banking");
  //     router.push("/profile/manual-banking");
  //   }

  //   if (openManual && pathname === "/profile/add-balance") {
  //     router.push("/profile/manual-banking");
  //   }

  //   if (openWallet && pathname.startsWith("/booking-details")) {
  //     if (!values.full && !values.part) {
  //       if (partialTotal > balance && subTotal > balance) {
  //         return setError(
  //           <>
  //             <p className="text-sm">
  //               You don&apos;t have enough balance to complete this payment.
  //               Please{" "}
  //               <Link href="/profile/add-balance">
  //                 <Button className="px-2 py-1 text-xs mx-1 rounded-sm">
  //                   {pathname.startsWith("/booking-details")
  //                     ? "Add Money"
  //                     : " Deposit Now"}
  //                 </Button>
  //               </Link>{" "}
  //               to continue
  //             </p>
  //           </>
  //         );
  //       }
  //     }
  //     router.push("/profile/payment-method/online-banking");
  //   } else if (openWallet && pathname === "/profile/payment-method") {
  //     router.push("/profile/payment-method/online-banking");
  //   }

  //   if (openOnline) {
  //     if (!values.ssl) {
  //       return setError("Please select a payment method");
  //     }
  //     if (
  //       !values.full &&
  //       !values.part &&
  //       pathname.startsWith("/booking-details")
  //     ) {
  //       if (partialTotal > balance && subTotal > balance) {
  //         return setError(
  //           <>
  //             <p className="text-sm">
  //               You don&apos;t have enough balance to complete this payment.
  //               Please{" "}
  //               <Link href="/profile/add-balance">
  //                 <Button className="px-2 py-1 text-xs mx-1 rounded-sm">
  //                   {pathname.startsWith("/booking-details")
  //                     ? "Add Money"
  //                     : " Deposit Now"}
  //                 </Button>
  //               </Link>{" "}
  //               to continue
  //             </p>
  //           </>
  //         );
  //       }
  //     }
  //     router.push("/profile/payment-method/online-banking");

  //     // if (!values.agree) {
  //     //   return setError("Please agree with our terms and conditions");
  //     // }
  //   }
  // }

  const adultTravelers = bookingData?.travelers?.filter(
    (traveler) => traveler?.travelerType === "adult"
  );

  const childTravelers = bookingData?.travelers?.filter(
    (traveler) => traveler?.travelerType === "child"
  );

  const infantTravelers = bookingData?.travelers?.filter(
    (traveler) => traveler?.travelerType === "infant"
  );

  const subTotal =
    Number(bookingData?.umrahPackage?.adultPrice) * adultTravelers?.length +
    Number(bookingData?.umrahPackage?.childPrice) * childTravelers?.length +
    Number(bookingData?.umrahPackage?.infantPrice) * infantTravelers?.length;

  const partialTotal =
    Number(bookingData?.umrahPackage?.adultPartialPrice) *
      adultTravelers?.length +
    Number(bookingData?.umrahPackage?.childPartialPrice) *
      childTravelers?.length +
    Number(bookingData?.umrahPackage?.infantPartialPrice) *
      infantTravelers?.length;

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[18px]">
          {error && !pathname.startsWith("/booking-details") && (
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
            {(pathname === "/profile/payment-method" ||
              pathname.startsWith("/booking-details")) && (
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

                    {pathname === "/profile/payment-method" && (
                      <p className="ml-auto text-sm">
                        $ {openWallet && balance}
                      </p>
                    )}

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {/* manual banking */}
            {pathname === "/profile/add-balance" && (
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
            {(pathname === "/profile/add-balance" ||
              pathname.startsWith("/booking-details")) && (
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
            )}
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
            <>
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
              {pathname.startsWith("/booking-details") && form.watch("ssl") && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  <FormField
                    control={form.control}
                    name="full"
                    render={({ field }) => (
                      <FormItem className="space-y-0 col-span-2 sm:col-span-1">
                        <FormLabel className="flex gap-x-2 font-normal">
                          <FormControl>
                            <Checkbox
                              className="hidden"
                              checked={openFullPayment}
                              onCheckedChange={(value) => {
                                field.onChange(value);
                                handleFullPayment(value);
                                setOpenFullPayment(value);
                              }}
                            />
                          </FormControl>
                          <div
                            className={`col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED] ${
                              openFullPayment && "border-p-900"
                            } flex-1`}
                          >
                            <div className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                              <span className="leading-normal">
                                Continue with full payment
                              </span>
                            </div>
                            <div className="px-4 md:px-5 py-6 flex items-center gap-3">
                              <div className="space-y-2">
                                <p>Total to Pay BDT</p>
                                <span className="text-[20px] block">
                                  {subTotal}
                                </span>
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
                              className="hidden"
                              checked={openPartPaymnet}
                              onCheckedChange={(value) => {
                                field.onChange(value);
                                handlePartPayment(value);
                                setOpenPartPaymnet(value);
                              }}
                            />
                          </FormControl>
                          <div
                            className={`col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED] ${
                              openPartPaymnet && "border-p-900"
                            } flex-1`}
                          >
                            <div className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                              <span className="leading-normal">
                                Continue with partial payment
                              </span>
                            </div>
                            <div className="px-4 md:px-5 py-6 flex items-center gap-3">
                              <div className="space-y-2">
                                <p>Total to Pay BDT</p>
                                <span className="text-[20px] block">
                                  {partialTotal}
                                </span>
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
            </>
          )}

          {openWallet && (
            <div className="space-y-8">
              {pathname.startsWith("/booking-details") && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  {bookingData?.invoice?.paymentType !== "partial-payment" && (
                    <FormField
                      control={form.control}
                      name="full"
                      render={({ field }) => (
                        <FormItem className="space-y-0 col-span-2 sm:col-span-1">
                          <FormLabel className="flex gap-x-2 font-normal">
                            <FormControl>
                              <Checkbox
                                className="hidden"
                                checked={openFullPayment}
                                onCheckedChange={(value) => {
                                  field.onChange(value);
                                  handleFullPayment(value);
                                  setOpenFullPayment(value);
                                }}
                              />
                            </FormControl>
                            <div
                              className={`col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED] ${
                                openFullPayment && "border-p-900"
                              } flex-1`}
                            >
                              <div className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                                <span className="leading-normal">
                                  Continue with full payment
                                </span>
                              </div>
                              <div className="px-4 md:px-5 py-6 flex items-center gap-3">
                                <div className="space-y-2">
                                  <p>Total to Pay BDT</p>
                                  <span className="text-[20px] block">
                                    {subTotal}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {
                    <FormField
                      control={form.control}
                      name="partial"
                      render={({ field }) => (
                        <FormItem className="space-y-0 col-span-2 sm:col-span-1">
                          <FormLabel className="flex gap-x-2 font-normal">
                            <FormControl>
                              <Checkbox
                                className="hidden"
                                checked={openPartPaymnet}
                                onCheckedChange={(value) => {
                                  field.onChange(value);
                                  handlePartPayment(value);
                                  setOpenPartPaymnet(value);
                                }}
                              />
                            </FormControl>
                            <div
                              className={`col-span-2 sm:col-span-1 rounded-md border border-[#EDEDED] ${
                                openPartPaymnet && "border-p-900"
                              } flex-1`}
                            >
                              <div className="text-p-900 bg-p-300 px-4 md:px-5 py-3 rounded-t-md">
                                <span className="leading-normal">
                                  {bookingData?.invoice?.paymentType ===
                                  "partial-payment"
                                    ? "Continue With Due Payment"
                                    : "Continue with partial payment"}
                                </span>
                              </div>
                              <div className="px-4 md:px-5 py-6 flex items-center gap-3">
                                <div className="space-y-2">
                                  <p>Total to Pay BDT</p>
                                  <span className="text-[20px] block">
                                    {partialTotal}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  }
                </div>
              )}
            </div>
          )}

          {error && pathname.startsWith("/booking-details") && (
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

          <div className="col-span-2 grid">
            <Button
              className={`py-[15px] ${openOnline ? "" : "mt-6"} `}
              type="submit"
              disabled={
                // !form.watch("manual") &&
                // !form.watch("online") &&
                // !form.watch("wallet") &&
                loading
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

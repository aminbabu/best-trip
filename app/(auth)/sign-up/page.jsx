"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import validator from "validator";
import Link from "next/link";
import { CheckIcon, LucideLoader2 } from "lucide-react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/components/icons/svgr";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import signUp from "@/actions/auth/sign-up";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z
  .object({
    name: z.string().min(1, "Please enter your full name"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().refine(validator.isMobilePhone, {
      message: "Please enter a valid phone number",
    }),
    password: z.string().min(8, "Please enter a valid password"),
    confirmPassword: z.string().min(8, "Please enter a valid password"),
    agree: z
      .boolean()
      .refine((v) => v, { message: "Please agree to the terms & policy" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await signUp({
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        password: data?.password,
      });

      const result = await withReactContent(Swal).fire({
        title: "Success",
        text: response.message,
        icon: "success",
        confirmButtonText: "Sign In",
        confirmButtonColor: "#3ad965",
        allowOutsideClick: false,
      });

      if (result.isConfirmed) {
        router.push("/sign-in");
      }
    } catch (error) {
      await withReactContent(Swal).fire({
        title: "Error",
        text: error?.message || "An error occurred. Please try again",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ff0f2f",
        allowOutsideClick: false,
      });
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <div className="max-w-[500px] mx-auto">
      <Card className="border-transparent mb-8 shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.03)] border border-[#f1f1f4] p-6 lg:p-10 my-10">
        <CardHeader className="p-0">
          <CardTitle className="text-lg lg:text-2xl text-t-800 text-center pb-5 lg:pb-8">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-0 p-0">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[26px]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      Your name<span className="text-primary"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      Email address<span className="text-primary"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      Phone number<span className="text-primary"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Enter phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      Password<span className="text-primary"> *</span>
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <button
                        onClick={(e) => handleShowPassword(e)}
                        className="absolute right-4 bottom-4"
                      >
                        {showPassword ? (
                          <EyeSlashIcon
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                          />
                        ) : (
                          <EyeIcon viewBox="0 0 24 24" className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      Confirm password<span className="text-primary"> *</span>
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          className="h-[3.25rem] text-base p-4 text-t-900 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter confirm password"
                          {...field}
                        />
                      </FormControl>
                      <button
                        onClick={(e) => handleShowConfirmPassword(e)}
                        className="absolute right-4 bottom-4"
                      >
                        {showConfirmPassword ? (
                          <EyeSlashIcon
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                          />
                        ) : (
                          <EyeIcon viewBox="0 0 24 24" className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <FormMessage className="font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <div className="flex items-start flex-wrap gap-3">
                      <FormControl>
                        <Checkbox
                          id="agree"
                          className="w-5 h-5 border-[#f5f5f5] checked:border-primary"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="agree"
                        className="flex-1 text-t-700 text-sm lg:text-base font-normal leading-normal"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms-and-conditions"
                          className="text-primary hover:underline focus:underline"
                        >
                          Terms
                        </Link>{" "}
                        &{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-primary hover:underline focus:underline"
                        >
                          Privacy Policy
                        </Link>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid">
                <Button className="py-2.5" type="submit" disabled={loading}>
                  {loading ? <LucideLoader2 className="animate-spin" /> : null}
                  Sign up
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <p className="text-t-600 text-center pt-[26px]">
          Have an account ?{" "}
          <Link
            href="/sign-in"
            className="text-primary duration-300 hover:underline hover:opacity-75 focus:underline"
          >
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUpPage;

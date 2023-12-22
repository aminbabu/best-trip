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
import { CheckIcon } from "lucide-react";

const formSchema = z
  .object({
    fullname: z.string().min(3, "Please enter your full name"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().refine(validator.isMobilePhone, {
      message: "Please enter a valid phone number",
    }),
    password: z.string().min(8, "Please enter a valid password"),
    confirmPassword: z.string().min(8, "Please enter a valid password"),
    agree: z
      .boolean()
      .refine((v) => v, { message: "Please agree to the terms" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[648px] mx-auto">
      <Card className="border-transparent mb-8">
        <CardHeader className="lg:p-10">
          <CardTitle className="lg:text-[2rem] text-t-800 text-center pt-5">
            Create your account
          </CardTitle>
        </CardHeader>
        <CardContent className="lg:p-10 lg:pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-700 text-base lg:text-lg">
                      Your name<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="h-[3.25rem] text-t-700 placeholder:text-t-300"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-700 text-base lg:text-lg">
                      Email address<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="h-[3.25rem] text-t-700 placeholder:text-t-300"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-700 text-base lg:text-lg">
                      Phone number<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        className="h-[3.25rem] text-t-700 placeholder:text-t-300"
                        placeholder="Enter phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-700 text-base lg:text-lg">
                      Password<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="h-[3.25rem] text-t-700 placeholder:text-t-300"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-700 text-base lg:text-lg">
                      Confirm password<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="h-[3.25rem] text-t-700 placeholder:text-t-300"
                        placeholder="Enter confirm password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <div className="flex flex-wrap gap-3">
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="checkbox"
                            className="appearance-none p-0 h-5 w-5 border border-t-300 rounded-sm checked:bg-primary checked:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-primary cursor-pointer peer"
                            {...field}
                          />
                        </FormControl>
                        <CheckIcon className="invisible opacity-0 duration-200 absolute inset-0 m-auto w-4 h-4 text-white pointer-events-none peer-checked:visible peer-checked:opacity-100" />
                      </div>
                      <FormLabel className="flex-1 text-t-700 text-base font-normal leading-normal">
                        I agree to the{" "}
                        <Link
                          href="#"
                          className="text-primary hover:underline focus:underline"
                        >
                          Terms
                        </Link>{" "}
                        &{" "}
                        <Link
                          href="#"
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
                <Button type="submit">Sign up</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <p className="text-t-600 text-center">
        Have an account?{" "}
        <Link
          href="/sign-in"
          className="text-primary duration-300 hover:underline hover:opacity-75 focus:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;

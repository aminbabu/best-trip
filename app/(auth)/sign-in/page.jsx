"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Please enter a valid password"),
});

const SignInPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
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
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <CardContent className="lg:p-10 lg:pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                        className="h-[3.25rem] text-base text-t-700 placeholder:text-t-300"
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
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-t-700 text-base lg:text-lg">
                      Password<span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="h-[3.25rem] text-base text-t-700 placeholder:text-t-300"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <div className="flex items-start flex-wrap gap-3">
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
                          Remember me
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Link
                  href="/forgot-password"
                  className="text-primary duration-300 hover:underline hover:opacity-75 focus:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="grid">
                <Button type="submit">Sign in</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <p className="text-t-600 text-center">
        Don’t have an account?{" "}
        <Link
          href="/sign-up"
          className="text-primary duration-300 hover:underline hover:opacity-75 focus:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;

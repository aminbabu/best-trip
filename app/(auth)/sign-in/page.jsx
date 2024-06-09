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
import { CheckIcon, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Please enter a valid password"),
});

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

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
    <div className="max-w-[500px] mx-auto">
      <Card className="border-transparent mb-8 shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.03)] border border-[#f1f1f4] p-6 lg:p-10 my-10">
        <CardHeader className="p-0">
          <CardTitle className="text-lg lg:text-2xl text-gray-900 text-center pb-5 lg:pb-8">
            Sign In
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
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-gray-900 text-sm lg:text-base">
                      Email address<span className="text-primary"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="h-[2.75rem] text-base px-3 py-2.5 text-t-700 placeholder:text-t-300 placeholder:text-sm placeholder:lg:text-base border border-[#dbdfe9] focus-visible:ring-0 focus-visible:ring-offset-0"
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
                    <FormLabel className="text-gray-900 text-sm lg:text-base">
                      Password<span className="text-primary"> *</span>
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="h-[2.75rem] text-base px-3 py-2.5 text-t-700 placeholder:text-t-300 placeholder:text-sm placeholder:lg:text-base border border-[#dbdfe9] focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <button
                        onClick={(e) => handleShowPassword(e)}
                        className="absolute right-4 bottom-3.5"
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>

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
                        <FormLabel className="flex-1 text-sm lg:text-base text-t-700 font-normal leading-normal">
                          Remember me
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Link
                  href="/forgot-password"
                  className="text-primary text-sm lg:text-base duration-300 hover:underline hover:opacity-75 focus:underline"
                >
                  Forgot Password ?
                </Link>
              </div>
              <div className="grid">
                <Button className="py-2.5" type="submit">
                  Sign in
                </Button>
              </div>
            </form>
          </Form>
          <p className="text-t-600 text-center pt-[26px]">
            Don’t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-primary duration-300 hover:underline hover:opacity-75 focus:underline"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;

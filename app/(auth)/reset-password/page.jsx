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
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/components/icons/svgr";

const formSchema = z
  .object({
    password: z.string().min(8, "Please enter a valid password"),
    confirmPassword: z.string().min(8, "Please enter a valid password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[500px] mx-auto">
      <Card className="border-transparent mb-8 shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.03)] border border-[#f1f1f4] p-6 lg:p-10 my-10">
        <CardHeader className="p-0">
          <CardTitle className="text-lg lg:text-2xl text-t-800 text-center pb-5 lg:pb-8">
            Change Password
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
                        className="absolute right-4 bottom-3.5"
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
                          placeholder="Enter confirm password"
                          className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      <button
                        onClick={(e) => handleShowConfirmPassword(e)}
                        className="absolute right-4 bottom-3.5"
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
              <div className="grid">
                <Button className="py-2.5" type="submit">
                  Update Password
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;

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
import { EyeIcon, EyeSlashIcon } from "@/components/icons/svgr";
import { useState } from "react";
import resetPassword from "@/actions/auth/reset-password";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import changePassword from "@/actions/auth/change-password";

const formSchema = z
  .object({
    currentPassword: z.string().min(8, "Please enter a valid Current password"),
    password: z.string().min(8, "Please enter a valid password"),
    confirmPassword: z.string().min(8, "Please enter a valid password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ProfilePasswordPage = () => {
  const { data: userData } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleShowCurrentPassword = (e) => {
    e.preventDefault();
    setShowCurrentPassword(!showCurrentPassword);
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

  const onSubmit = async (data) => {
    data.userId = userData?.user?._id;
    try {
      const response = await changePassword(data)
      if (response?.error) {
        return await withReactContent(Swal).fire({
          title: "Error",
          text: response?.error || "An error occurred. Please try again",
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#ff0f2f",
          allowOutsideClick: false,
        });
      }
      await withReactContent(Swal).fire({
        title: "Success",
        text: response?.message,
        icon: "success",
        confirmButtonText: "Ok, got it",
        confirmButtonColor: "#3ad965",
      });
    } catch (error) {
      await withReactContent(Swal).fire({
        title: "Error",
        text: error?.message || "An error occurred. Please try again",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ff0f2f",
        allowOutsideClick: false,
      });
    }
  };

  return (
    <Card className="border-transparent mb-8 shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.03)] border border-[#f1f1f4] p-6 lg:p-10">
      <CardHeader className="p-0">
        <CardTitle className="text-lg lg:text-xl font-medium text-t-800 text-left pb-5 lg:pb-8">
          Change Password
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0 p-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[26px]"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      Current Password<span className="text-primary"> *</span>
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showCurrentPassword ? "text" : "password"}
                          className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter Current password"
                          {...field}
                        />
                      </FormControl>
                      <button
                        onClick={(e) => handleShowCurrentPassword(e)}
                        className="absolute right-4 bottom-4"
                      >
                        {showCurrentPassword ? (
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
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      New Password<span className="text-primary"> *</span>
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Enter New password"
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
                  <FormItem className="space-y-3 col-span-2 lg:col-span-1">
                    <FormLabel className="text-t-800 text-sm lg:text-base">
                      Confirm Password<span className="text-primary"> *</span>
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          className="h-[3.25rem] text-base p-4 text-t-700 placeholder:text-t-600 placeholder:text-sm placeholder:lg:text-base border border-[#f5f5f5] focus-visible:ring-0 focus-visible:ring-offset-0"
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
            </div>
            <div className="grid">
              <Button
                disabled={
                  form.watch("password") === "" ||
                  form.watch("confirmPassword") === "" ||
                  form.watch("password") !== form.watch("confirmPassword")
                }
                type="submit"
              >
                Update Password
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfilePasswordPage;

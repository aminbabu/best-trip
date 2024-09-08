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
import forgotPassword from "@/actions/auth/forgot-password";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { LucideLoader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleCancelClick = () => {
    return router.push("/sign-in");
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await forgotPassword(data);

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
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <div className="max-w-[500px] mx-auto">
      <Card className="border-transparent mb-8 shadow-[0px_3px_4px_0px_rgba(0, 0, 0, 0.03)] border border-[#f1f1f4] p-6 lg:p-10 my-10">
        <CardHeader className="p-0">
          <CardTitle className="text-lg lg:text-2xl text-t-800 text-center pb-5 lg:pb-8 lg:pt-1.5">
            Forgot Password
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
              <div className="grid">
                <Button className="py-2.5" type="submit" disabled={loading}>
                  {loading ? <LucideLoader2 className="animate-spin" /> : null}
                  Send
                </Button>
                <Button
                  type="button"
                  className="py-2.5 bg-[#f9f9f9] hover:bg-[#f5f5f5] text-t-800 mt-3"
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;

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

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ForgotPasswordPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
            Enter your email
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
              <div className="grid">
                <Button className="py-2.5" type="submit">
                  Send
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

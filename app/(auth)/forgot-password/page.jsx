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
    <div className="max-w-[648px] mx-auto">
      <Card className="border-transparent mb-8">
        <CardHeader className="lg:p-10">
          <CardTitle className="lg:text-[2rem] text-t-800 text-center pt-5">
            Enter your email
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
              <div className="grid">
                <Button type="submit">Send</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;

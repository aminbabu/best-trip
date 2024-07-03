import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FlightTokenIcon } from "@/components/icons/svgr";
import { ticketNumberSchema } from "@/schema/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const TicketNumberUpdate = () => {
  const [isOpenTicketDialog, setIsOpenTicketDialog] = useState(false);

  const handleTicketDialog = () => {
    setIsOpenTicketDialog(!isOpenTicketDialog);
  };

  const form = useForm({
    resolver: zodResolver(ticketNumberSchema),
    defaultValues: {
      ticket_no_one: "123456789",
      ticket_no_two: "987654321",
      ticket_no_three: "432198765",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog open={isOpenTicketDialog} onOpenChange={handleTicketDialog}>
      <DialogTrigger asChild>
        <Button className="bg-white text-base font-normal text-t-700 rounded shadow-sm px-3.5 py-5 hover:bg-[#fefefe] justify-start">
          <FlightTokenIcon /> Ticket Number Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogHeader className="bg-p-300 p-5 rounded">
          <DialogTitle className="text-xl text-t-800">
            Ticket Number Update
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 p-5 pt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full overflow-auto">
                <div className="grid grid-rows-3 min-w-max lg:min-w-fit text-base text-center overflow-hidden text-t-800">
                  <ul className="grid grid-cols-10 bg-white">
                    <li className="text-left col-span-2 px-4 py-2.5 border border-transparent">
                      Pax 1
                    </li>
                    <li className="text-left col-span-3 px-4 py-2.5 border border-transparent">
                      Pax Name
                      <span className="block uppercase">Md Irafnul Haque</span>
                    </li>
                    <li className="flex flex-col text-left col-span-2 px-4 py-2.5 border border-transparent">
                      Pax type
                      <span className="block">Adult</span>
                    </li>
                    <li className="col-span-3 px-4 py-2.5 border-b border-[#3d3d3d4d] text-left">
                      <FormField
                        control={form.control}
                        name="ticket_no_one"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-t-800 lg:text-base font-normal">
                              Ticket Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="123456789"
                                className="h-2 text-base text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-700 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </li>
                  </ul>
                  <ul className="grid grid-cols-10 bg-white">
                    <li className="text-left col-span-2 px-4 py-2.5 border border-transparent">
                      Pax 1
                    </li>
                    <li className="text-left col-span-3 px-4 py-2.5 border border-transparent">
                      Pax Name
                      <span className="block uppercase">Md Irafnul Haque</span>
                    </li>
                    <li className="flex flex-col text-left col-span-2 px-4 py-2.5 border border-transparent">
                      Pax type
                      <span className="block">Adult</span>
                    </li>
                    <li className="col-span-3 px-4 py-2.5 border-b border-[#3d3d3d4d] text-left">
                      <FormField
                        control={form.control}
                        name="ticket_no_two"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-t-800 lg:text-base font-normal">
                              Ticket Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="123456789"
                                className="h-2 text-base text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-700 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </li>
                  </ul>
                  <ul className="grid grid-cols-10 bg-white">
                    <li className="text-left col-span-2 px-4 py-2.5 border border-transparent">
                      Pax 1
                    </li>
                    <li className="text-left col-span-3 px-4 py-2.5 border border-transparent">
                      Pax Name
                      <span className="block uppercase">Md Irafnul Haque</span>
                    </li>
                    <li className="flex flex-col text-left col-span-2 px-4 py-2.5 border border-transparent">
                      Pax type
                      <span className="block">Adult</span>
                    </li>
                    <li className="col-span-3 px-4 py-2.5 border-b border-[#3d3d3d4d] text-left">
                      <FormField
                        control={form.control}
                        name="ticket_no_three"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-t-800 lg:text-base font-normal">
                              Ticket Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="123456789"
                                className="h-2 text-base text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-700 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <DialogFooter className="gap-x-2 mt-4">
                <Button
                  onClick={handleTicketDialog}
                  className="py-2"
                  type="submit"
                >
                  Update
                </Button>
                <Button
                  onClick={handleTicketDialog}
                  className="bg-slate-50 text-t-800 hover:bg-slate-100 border py-2"
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketNumberUpdate;

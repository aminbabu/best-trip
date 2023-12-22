import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormInput = () => {
  return (
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
              className="h-[3.25rem]"
              placeholder="Md Irfan"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

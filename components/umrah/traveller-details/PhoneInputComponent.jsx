import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputComponent = ({ value, onChange, onBlur, name }) => {
  return (
    <PhoneInput
      country={"bd"}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputProps={{
        name: name,
        required: true,
        autoFocus: true,
        className:
          "h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100",
        placeholder: "Enter phone number",
      }}
    />
  );
};

export default PhoneInputComponent;

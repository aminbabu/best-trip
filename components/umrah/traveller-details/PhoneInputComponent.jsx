import React from "react";
import PhoneInput from "react-phone-input-2";

const PhoneInputComponent = ({ value, onChange, onBlur, name }) => {
  return (
    <PhoneInput
      country={"bd"}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      enableSearch
      buttonClass="w-[85px] !bg-[#FFEFEF] !border-none flex"
      dropdownClass="h-[150px]"
      jumpCursorToEnd={true}
      countryCodeEditable={false}
      inputProps={{
        name: name,
        required: true,
        autoFocus: true,
        className:
          "h-[3.25rem] w-full text-base pr-5 pl-24 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100 focus-visible:outline-0",
        placeholder: "Enter phone number",
      }}
    />
  );
};

export default PhoneInputComponent;

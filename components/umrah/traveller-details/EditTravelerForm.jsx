"use client";

import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTravelerSchema, travellerSchema } from "@/schema/zod";
import { useEffect, useState } from "react";
import { generateImage, getImageData } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import moment from "moment";
import Swal from "sweetalert2"
import { Loader } from "lucide-react";
import { DocAltIcon } from "@/components/icons/svgr";
import { countries } from "@/data/countries";
import PhoneInputComponent from "./PhoneInputComponent";
import withReactContent from "sweetalert2-react-content";
import { getTravelerDetail } from "@/actions/traveler/get-traveler-detail";
import { updateTraveler } from "@/actions/traveler/update-traveler";
import Image from "next/image";

const EditTravelerForm = ({ id }) => {
    const [travelerDetails, setTravelerDetail] = useState({})
    const [travelers, setTravelers] = useState([])
    const [refetch, setRefetch] = useState(false)
    useEffect(() => {
        const getTravelerDetails = async () => {
            try {
                const response = await getTravelerDetail()
                const travelers = response?.travelers;
                setTravelers(travelers)
                const filteredTraveler = travelers?.find((traveler) => traveler?._id === id); // Use find instead of filter for a
                setTravelerDetail(filteredTraveler ? filteredTraveler : {});
            } catch (error) {
                console.log(error);
            }
        }
        getTravelerDetails();
    }, [id, refetch])
    const [loading, setLoading] = useState(false);
    const [passport, setPassport] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [nid, setNid] = useState(null);
    const [covid_certificate, setCovidCertificate] = useState(null);
    const [isOpenDob, setIsOpenDob] = useState(false);
    const [isOpenExpiryDate, setIsOpenExpiryDate] = useState(false);
    const [dobFrom, setDobFrom] = useState(1900);
    const [dobTo, setDobTo] = useState(moment().year());
    const [countryValue, setCountryValue] = useState("");
    const today = new Date();
    const twoYearsBack = new Date(today);
    const twelveYearsBack = new Date(today);
    twoYearsBack.setFullYear(today.getFullYear() - 2);
    twelveYearsBack.setFullYear(today.getFullYear() - 12);
    const [searchedValue, setSearchedValue] = useState({})


    // Get Searched Value From Local Storage
    useEffect(() => {
        if (typeof window != undefined) {
            setSearchedValue(JSON.parse(localStorage.getItem("searchedValue")))
        }
    }, [])


    // Get Total Travelers From Local Storage
    const adultTravelers = travelerDetails?.travelerType === "adult" ? 1 : 0
    const childTravelers = travelerDetails?.travelerType === "child" ? 1 : 0
    const infantsTravelers = travelerDetails?.travelerType === "infant" ? 1 : 0


    // Make An Array Up To The Total Number Of Travelers
    const adultTravellersArray = new Array(adultTravelers).fill(0);
    const childTravellersArray = new Array(childTravelers).fill(0);
    const infantTravellersArray = new Array(infantsTravelers).fill(0);


    let travelerList = [];
    const addTravelers = (travellerArray, type) => {
        // travelerList.length = 0;
        travellerArray.forEach((_, index) => {
            travelerList.push({
                id: travelerList.length + 1, // Serialize the id based on the current length
                travellerNo: travelerList.length + 1,
                travellerType: type,
            });
        });
    };

    // Add adult travelers
    addTravelers(adultTravellersArray, "adult");

    // Add child travelers
    addTravelers(childTravellersArray, "child");

    // Add infant travelers
    addTravelers(infantTravellersArray, "Infant");




    let initialSelectedDate = moment().toDate();
    if (travelerType === "A") {
        initialSelectedDate = twelveYearsBack;
    } else if (travelerType === "C") {
        initialSelectedDate = twoYearsBack;
    } else {
        initialSelectedDate = moment().toDate();
    }

    useEffect(() => {
        if (travelerType === "A") {
            setDobFrom(1900);
            setDobTo(moment().year() - 12);
        }
        if (travelerType === "C") {
            setDobFrom(moment().year() - 12);
            setDobTo(moment().year() - 2);
        }
        if (travelerType === "I") {
            setDobFrom(moment().year() - 2);
            setDobTo(moment().year());
        }
    }, [travelerType]);


    // Create A Form Instance With The Schema And Default Values
    const form = useForm({
        resolver: zodResolver(editTravelerSchema),
        defaultValues: {
            passport: travelerDetails?.passport || "",
            photo: travelerDetails?.travelerPhoto || "",
            nid: travelerDetails?.travelerNID || "",
            covid_certificate: travelerDetails?.travelerCovidCertificate || "",
            travelerType: travelerDetails?.travelerType || "",
            firstName: travelerDetails?.firstName || "",
            lastName: travelerDetails?.lastName || "",
            gender: travelerDetails?.gender || "",
            dateOfBirth: travelerDetails?.dateOfBirth || "",
            emergencyContactNo: travelerDetails?.emergencyContactNo || "",
            country: travelerDetails?.country || "",
            cityName: travelerDetails?.cityName || "",
            presentAddress: travelerDetails?.presentAddress || "",
            permanentAddress: travelerDetails?.permanentAddress || "",
            passportNumber: travelerDetails?.passportNumber || "",
            documentIssueCountry: travelerDetails?.documentIssueCountry || "",
            passportExpiryDate: travelerDetails?.passportExpiryDate || "",
            email: travelerDetails?.email || "",
            phone: travelerDetails?.phone || "",
        },
    });




    useEffect(() => {
        form.reset({
            travelerType: travelerDetails?.travelerType || "",
            firstName: travelerDetails?.firstName || "",
            lastName: travelerDetails?.lastName || "",
            gender: travelerDetails?.gender || "",
            dateOfBirth: travelerDetails?.dateOfBirth || "",
            emergencyContactNo: travelerDetails?.emergencyContactNo || "",
            country: travelerDetails?.country || "",
            cityName: travelerDetails?.cityName || "",
            presentAddress: travelerDetails?.presentAddress || "",
            permanentAddress: travelerDetails?.permanentAddress || "",
            passportNumber: travelerDetails?.passportNumber || "",
            documentIssueCountry: travelerDetails?.documentIssueCountry || "",
            passportExpiryDate: travelerDetails?.passportExpiryDate || "",
            email: travelerDetails?.email || "",
            phone: travelerDetails?.phone || "",
        });
    }, [travelerDetails, form]);
    //Create A FormData And Append The Values Send To The Server
    const onSubmit = async (data) => {
        const form = new FormData();
        // Append values to FormData only if they exist in data
        if (passport) form.append("passport", passport || travelerDetails?.passport);
        if (photo) form.append("travelerPhoto", photo || travelerDetails?.travelerPhoto);
        if (nid) form.append("travelerNID", nid || travelerDetails?.travelerNID);
        if (covid_certificate) form.append("travelerCovidCertificate", covid_certificate || travelerDetails?.travelerCovidCertificate);
        // file fields conditionally
        form.append("firstName", data.firstName || travelerDetails?.firstName);
        form.append("lastName", data.lastName || travelerDetails?.lastName);
        form.append("dateOfBirth", moment(data.dateOfBirth || travelerDetails?.dateOfBirth).format("YYYY-MM-DD"));
        form.append("country", data.country || travelerDetails?.country);
        form.append("cityName", data.cityName || travelerDetails?.cityName);
        form.append("gender", data.gender || travelerDetails?.gender);
        form.append("passportNumber", data.passportNumber || travelerDetails?.passportNumber);
        form.append("documentIssueCountry", data.documentIssueCountry || travelerDetails?.documentIssueCountry);
        form.append("passportExpiryDate", moment(data.passportExpiryDate || travelerDetails?.passportExpiryDate).format("YYYY-MM-DD"));
        form.append("presentAddress", data.presentAddress || travelerDetails?.presentAddress);
        form.append("permanentAddress", data.permanentAddress || travelerDetails?.permanentAddress);
        form.append("emergencyContactNo", data.emergencyContactNo || travelerDetails?.emergencyContactNo);
        form.append("phone", data.phone || travelerDetails?.phone);
        form.append("email", data.email || travelerDetails?.email);
        const travelerTypeFormatted = data.travelerType.split(" ")[2]?.slice(1, -1)?.toLowerCase();
        if (travelerTypeFormatted) form.append("travelerType", travelerTypeFormatted || travelerDetails?.travelerType);
        // Always append umrahPackage ID if it exists
        if (id) form.append("customerId", id);

        const editTraveler = async () => {
            try {
                const response = await updateTraveler(form, id);
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
                setRefetch(true);
                setLoading(false);
                Swal.fire({
                    title: "Traveler Updated Successfully",
                    text: response?.message,
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#3ad965",
                });
            } catch (error) {
                Swal.fire({
                    text: error?.message,
                    icon: "error",
                    confirmButtonText: "Ok, got it",
                    confirmButtonColor: "#F70207",
                });
            }
        };

        // Call the function to submit the form
        editTraveler();
    };


    return (
        <div className="space-y-7 bg-white p-4 lg:p-[50px]">
            <h2 className="text-t-500 text-lg font-medium">Traveler Details</h2>
            <div className="bg-p-300 font-normal lg:text-base text-t-800 rounded-sm px-4 py-3 flex items-center gap-x-2.5">
                <InfoCircledIcon className="w-5 h-5 text-p-900 flex-shrink-0" />
                Enter details exactly as they appear on your passport
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
                        <div className="space-y-8">
                            <FormField
                                control={form.control}
                                name="passport"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Upload Passport<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8] focus-visible:ring-0 focus-visible:ring-offset-0"
                                                accept=".png,.jpg,.jpeg"
                                                {...field}
                                                onChange={(event) => {
                                                    const { file, displayUrl } = getImageData(event);
                                                    field.onChange(event);
                                                    setPassport(file);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col items-center justify-center space-y-8 text-center text-t-500 border border-[#cccccc] rounded-sm h-[150px] w-full">
                                {
                                    travelerDetails?.passport ?
                                        <Image className="max-h-[120px] w-full object-contain" src={passport ? URL.createObjectURL(passport) : generateImage(travelerDetails?.passport)} width={120} height={120} alt="Passport" />
                                        :
                                        <>
                                            <DocAltIcon />
                                            <p>
                                                <span className="text-primary">Drag and drop</span> files here
                                                or <span className="text-primary">browse</span> to begin the
                                                upload.
                                            </p>
                                        </>
                                }
                            </div>
                        </div>
                        <div className="space-y-8">
                            <FormField
                                control={form.control}
                                name="photo"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Upload Photo<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8]"
                                                accept=".png,.jpg,.jpeg"
                                                {...field}
                                                onChange={(event) => {
                                                    const { file, displayUrl } = getImageData(event);
                                                    field.onChange(event);
                                                    setPhoto(file);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col items-center justify-center space-y-8 text-center text-t-500 border border-[#cccccc] rounded-sm h-[150px] w-full">
                                {
                                    travelerDetails?.travelerPhoto ?
                                        <Image className="max-h-[120px] w-full object-contain" src={photo ? URL.createObjectURL(photo) : generateImage(travelerDetails?.travelerPhoto)} width={120} height={120} alt="Photo" />
                                        :
                                        <>
                                            <DocAltIcon />
                                            <p>
                                                <span className="text-primary">Drag and drop</span> files here
                                                or <span className="text-primary">browse</span> to begin the
                                                upload.
                                            </p>
                                        </>
                                }
                            </div>
                        </div>
                        <div className="space-y-8">
                            <FormField
                                control={form.control}
                                name="nid"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Upload NID<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8]"
                                                accept=".png,.jpg,.jpeg"
                                                {...field}
                                                onChange={(event) => {
                                                    const { file, displayUrl } = getImageData(event);
                                                    field.onChange(event);
                                                    setNid(file);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col items-center justify-center space-y-8 text-center text-t-500 border border-[#cccccc] rounded-sm h-[150px] w-full">
                                {
                                    travelerDetails?.travelerNID ?
                                        <Image className="max-h-[120px] w-full object-contain" src={nid ? URL.createObjectURL(nid) : generateImage(travelerDetails?.travelerNID)} width={120} height={120} alt="NID" />
                                        :
                                        <>
                                            <DocAltIcon />
                                            <p>
                                                <span className="text-primary">Drag and drop</span> files here
                                                or <span className="text-primary">browse</span> to begin the
                                                upload.
                                            </p>
                                        </>
                                }
                            </div>
                        </div>
                        <div className="space-y-8">
                            <FormField
                                control={form.control}
                                name="covid_certificate"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Upload Covid Certificate<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                className="p-0 file:h-[3.25rem] file:mr-4 file:text-sm text-t-500 placeholder:text-t-300 file:py-4 file:px-5 file:rounded-l-md file:border-0 file:bg-p-300 file:text-p-900 border-transparent bg-[#F8F8F8]"
                                                accept=".png,.jpg,.jpeg"
                                                {...field}
                                                onChange={(event) => {
                                                    const { file, displayUrl } = getImageData(event);
                                                    field.onChange(event);
                                                    setCovidCertificate(file);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col items-center justify-center space-y-8 text-center text-t-500 border border-[#cccccc] rounded-sm h-[150px] w-full">
                                {
                                    travelerDetails?.travelerCovidCertificate ?
                                        <Image className="max-h-[120px] w-full object-contain" src={covid_certificate ? URL.createObjectURL(covid_certificate) : generateImage(travelerDetails?.travelerCovidCertificate)} width={120} height={120} alt="Covid Certificate" />
                                        :
                                        <>
                                            <DocAltIcon />
                                            <p>
                                                <span className="text-primary">Drag and drop</span> files here
                                                or <span className="text-primary">browse</span> to begin the
                                                upload.
                                            </p>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-8 lg:gap-x-10">
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            First Name<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter first name"
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Last Name<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                defaultValue={travelerDetails?.lastName}
                                                type="text"
                                                placeholder="Enter last name"
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Gender<span className="text-primary">*</span>
                                        </FormLabel>
                                        <Select
                                            value={field.value} // Use field.value here
                                            onValueChange={field.onChange} // Use field.onChange here
                                        >
                                            <FormControl>
                                                <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Date of Birth<span className="text-primary">*</span>
                                        </FormLabel>
                                        <Popover open={isOpenDob} onOpenChange={setIsOpenDob}>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                    >
                                                        {field.value ? (
                                                            moment(field.value).format("DD-MMM-YYYY")
                                                        ) : (
                                                            <span>Select a date</span>
                                                        )}
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    defaultMonth={field.value || initialSelectedDate}
                                                    captionLayout="dropdown-buttons"
                                                    selected={moment(field.value).toDate()}
                                                    onSelect={(value) => {
                                                        field.onChange(value);
                                                        setIsOpenDob(false);
                                                    }}
                                                    disabled={(date) => handleDisableDate(date)}
                                                    fromYear={dobFrom}
                                                    toYear={dobTo}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Country<span className="text-primary">*</span>
                                        </FormLabel>
                                        <Select
                                            value={field.value} // Use field.value here
                                            onValueChange={(value) => {
                                                field.onChange(value); // Update form state
                                                setCountryValue(value); // Update local state if needed
                                            }}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                                    <SelectValue placeholder="Select option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {countries?.map((country) => (
                                                    <SelectItem value={country.name} key={country.id}>
                                                        {country.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="cityName"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            City Name<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter city name"
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name={"passportNumber"}
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Passport Number<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Type passport number"
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="documentIssueCountry"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Document Issue Country
                                            <span className="text-primary">*</span>
                                        </FormLabel>
                                        <Select
                                            value={field.value} // Use field.value here
                                            onValueChange={(value) => field.onChange(value)} // Update form state
                                        >
                                            <FormControl>
                                                <SelectTrigger className="h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300">
                                                    <SelectValue placeholder="Select option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {countries?.map((country) => (
                                                    <SelectItem value={country.name} key={country.id}>
                                                        {country.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="passportExpiryDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Passport Expiry Date
                                            <span className="text-primary">*</span>
                                        </FormLabel>
                                        <Popover
                                            open={isOpenExpiryDate}
                                            onOpenChange={setIsOpenExpiryDate}
                                        >
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className="justify-start font-normal h-[3.25rem] text-base px-5 py-4 text-t-500 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                    >
                                                        {field.value ? (
                                                            moment(field.value).format("DD-MMM-YYYY")
                                                        ) : (
                                                            <span>Select a date</span>
                                                        )}
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    defaultMonth={
                                                        field.value && moment(field.value).toDate()
                                                    }
                                                    captionLayout="dropdown-buttons"
                                                    selected={moment(field.value).toDate()}
                                                    onSelect={(value) => {
                                                        field.onChange(value);
                                                        setIsOpenExpiryDate(false);
                                                    }}
                                                    disabled={(date) => date < new Date()}
                                                    fromYear={moment().year()}
                                                    toYear={2100}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="presentAddress"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Present Address<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter last name"
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="permanentAddress"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Permanent Address<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter last name"
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="emergencyContactNo"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Emergency Contact No.
                                            <span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter emergency contact no."
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6">
                            <h3 className="text-t-800 lg:text-base font-medium">
                                Contact Details
                            </h3>
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Email<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Enter email"
                                                className="h-[3.25rem] text-base px-5 py-4 text-t-600 border-transparent bg-[#F8F8F8] placeholder:text-t-300 disabled:bg-primary-foreground disabled:text-t-600 disabled:border-primary-foreground disabled:opacity-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 relative">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-t-800 lg:text-base font-normal">
                                            Phone<span className="text-primary">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <PhoneInputComponent
                                                value={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                                name={field.name}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-end">
                            <Button type="submit" disabled={loading}>
                                {loading && <Loader className="w-6 h-6 opacity-75" />}
                                Save & Exit
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default EditTravelerForm;

"use client";

import Slider from "@/components/global/splide/Slider";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {
    BalakaIcon,
    BulbOnIcon,
    BusIcon,
    CheckCircleFilledIcon,
    GMapIcon,
    HotelIcon,
    KabaIcon,
    LocationCircleIcon,
    LocationDistanceIcon,
    LocationIcon,
    ManWalkingIcon,
    PlaneIcon,
    StarAltIcon,
    VisaIcon,
} from "@/components/icons/svgr";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import InfoTable from "@/components/umrah/InfoTable";
import Image from "next/image";
import "@/styles/umrah/splide.css";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Minus } from "lucide-react";
import { useState } from "react";
import { airlines } from "@/data/airline";
import moment from "moment";
import { cn } from "@/lib/utils";

const table = {
    header: [
        {
            title: "Traveller Type",
            className:
                "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
        },
        {
            title: "Check in",
            className:
                "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
        },
        {
            title: "Cabin",
            className:
                "text-t-700 text-center font-normal h-auto px-3 py-2 border-r border-r-[#f5f5f5] last:border-r-0",
        },
    ],
    body: [
        [
            {
                cell: "Adult",
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
            {
                cell: 20,
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
            {
                cell: 7,
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
        ],
        [
            {
                cell: "Children",
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
            {
                cell: 20,
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
            {
                cell: 7,
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
        ],
        [
            {
                cell: "Infant",
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
            {
                cell: 0,
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
            {
                cell: 0,
                className: "px-3 py-2 border-r border-r-[#f5f5f5] last:borer-r-0",
            },
        ],
    ],
};

const options = {
    type: "loop",
    fixedWidth: 168,
    perMove: 1,
    gap: 16,
    arrows: true,
    pagination: false,
};

const PackageDetail = ({ umrahPackage }) => {
    const [showBus, isShowBus] = useState(true);
    const [showTransportTypes, isShowTransportTypes] = useState(true);
    const [showMakkah, isShowMakkah] = useState(true);
    const [showMadinah, isShowMadinah] = useState(true);
    const [packageDetail, setPackageDetail] = useState(umrahPackage || {})
    const [showTaif, isShowTaif] = useState(true);
    const handleShowBusMore = () => {
        isShowBus(!showBus);
    };

    const handleShowTrasnportTypesMore = () => {
        isShowTransportTypes(!showTransportTypes);
    };

    const handleShowMakkahMore = () => {
        isShowMakkah(!showMakkah);
    };

    const handleShowMadinahMore = () => {
        isShowMadinah(!showMadinah);
    };

    const handleShowTaifMore = () => {
        isShowTaif(!showTaif);
    };



    const {
        _id,
        thumbnail,
        title,
        subtitle,
        departureLocation,
        schedule,
        journeyDate,
        expiryDate,
        totalDaysAndNights,
        status,
        adultPrice,
        adultPartialPrice,
        childPrice,
        childPartialPrice,
        infantPrice,
        infantPartialPrice,
        partialPaymentExpiryDate,
        seats,
        inclusions,
        extraThumbnails,
        outboundAirlineCode,
        outboundFlightNumber,
        outboundBookingClass,
        outboundAirCraftModel,
        outboundDepartureAirport,
        outboundArrivalAirport,
        outboundDepartureDatetime,
        outboundArrivalDatetime,
        outboundFlightStops,
        outboundAdultBaggageCheckin,
        outboundAdultBaggageCabin,
        outboundChildBaggageCheckin,
        outboundChildBaggageCabin,
        outboundInfantBaggageCheckin,
        outboundInfantBaggageCabin,
        makkahHotelThumbnail,
        makkahHotelNoOfNights,
        makkahHotelName,
        makkahHotelAddress,
        makkahHotelRating,
        makkahHotelDistance,
        makkahHotelDistanceUnit,
        makkahHotelWalkDuration,
        makkahHotelLocation,
        makkahHotelNote,
        makkahHotelExtraThumbnails,
        madinahHotelThumbnail,
        madinahHotelNoOfNights,
        madinahHotelName,
        madinahHotelAddress,
        madinahHotelRating,
        madinahHotelDistance,
        madinahHotelDistanceUnit,
        madinahHotelWalkDuration,
        madinahHotelLocation,
        madinahHotelNote,
        madinahHotelExtraThumbnails,
        inboundAirlineCode,
        inboundFlightNumber,
        inboundBookingClass,
        inboundAirCraftModel,
        inboundDepartureAirport,
        inboundArrivalAirport,
        inboundDepartureDatetime,
        inboundArrivalDatetime,
        inboundFlightStops,
        inboundAdultBaggageCheckin,
        inboundAdultBaggageCabin,
        inboundChildBaggageCheckin,
        inboundChildBaggageCabin,
        inboundInfantBaggageCheckin,
        inboundInfantBaggageCabin,
        visaType,
        visaNoOfEntries,
        visaDuration,
        visaValidity,
        visaOptions,
        visaNote,
        transportType,
        transportAirportToHotel,
        transportVisitorPlaces,
        transportHotelToAirport,
        transportServices,
        transportServiceTypes,
        transportNote,
        ziyarahDays,
        ziyarahMakkah,
        ziyarahMadinah,
        ziyarahTaif,
        ziyarahTaifDetails,
        ziyarahNote,
        itineraryDays,
        umrahThumbnail,
        umrahTitle,
        umrahExcerpt,
        umrahDescription,
        termsConditions,
        ziyarahMadinahDetails,
        ziyarahMakkahDetails,
        type
    } = packageDetail || {};
    const airLineName = airlines?.find((airline) => airline.code === outboundAirlineCode)


    const maxRating = 5;
    const hotelRating = makkahHotelRating || 0;

    const filledStars = Math.floor(hotelRating); // Number of full stars
    const hasHalfStar = hotelRating % 1 !== 0; // Check if there's a half star
    const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0); // Calculate empty stars

    return (
        <div className="py-4 umrah-details-cards">
            <Accordion type="multiple" className="space-y-6" collapsible="true">
                <AccordionItem className="border-none" value="item-1">
                    <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
                        Outbound Flight Details
                    </h2>
                    <AccordionTrigger
                        className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
                        iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
                    >
                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                                <BalakaIcon
                                    className="text-primary h-10 w-10 md:h-[51px] md:w-[51px]"
                                    viewBox="0 0 51 51"
                                />
                                <div>
                                    <div className="text-t-900 text-base md:text-lg">
                                        {airLineName?.name}

                                    </div>
                                    <div className="text-t-800 text-sm md:text-base"> {outboundAirCraftModel}</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-around gap-x-4 px-4 xs:px-4 py-5 sm:px-6 md:px-4">
                                <div className="text-right space-y-1.5 border-l border-[#f4f4f4] pl-[1px]">
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        {outboundDepartureAirport}
                                    </p>
                                    <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                                        {outboundAirlineCode}  {moment(outboundDepartureDatetime).format("hh:mm")}
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        Wed, 25 Dec 2023
                                    </p>
                                </div>
                                <div className="text-center space-y-1.5">
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        06h 46m
                                    </p>
                                    <div className="flex items-center gap-x-2 md:gap-x-4">
                                        <PlaneIcon
                                            className="text-primary w-4 h-4 rotate-90"
                                            viewBox="0 0 14 14"
                                        />
                                        <Separator className="flex-1 bg-t-800 w-10 md:w-28" />
                                        <LocationIcon
                                            className="text-primary w-4 h-4"
                                            viewBox="0 0 14 14"
                                        />
                                    </div>
                                    {/* <div className="flex md:hidden items-center gap-x-1">
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                    <BalakaIcon
                      className="text-primary w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 51 51"
                    />
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                  </div> */}
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        (Non Stop)
                                    </p>
                                </div>
                                <div className="text-left space-y-1.5">
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        {outboundArrivalAirport}
                                    </p>
                                    <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                                        {inboundAirlineCode}        {moment(outboundArrivalDatetime).format("hh:mm")}
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        Wed, 26 Dec 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-x-10">
                            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
                                <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
                                    <p>08:00</p>
                                    <p>01 h 25m</p>
                                    <p>13:45</p>
                                </div>
                                <div className="flex sm:flex-col items-center justify-between gap-4">
                                    <PlaneIcon
                                        className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
                                        viewBox="0 0 14 14"
                                    />
                                    <Separator
                                        className="flex-1 bg-[#E1E1E1] hidden sm:block"
                                        orientation="vertical"
                                    />
                                    <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
                                    <LocationIcon
                                        className="text-primary w-4 h-4"
                                        viewBox="0 0 14 14"
                                    />
                                </div>
                                <div className="flex flex-col justify-between gap-y-4 sm:gap-y-6">
                                    <p>{outboundArrivalAirport}</p>
                                    <div className="flex items-center gap-x-2.5">
                                        <BalakaIcon
                                            className="text-primary w-6 h-6"
                                            viewBox="0 0 51 51"
                                        />
                                        <p>{airLineName?.name}
                                        </p>
                                    </div>
                                    <div className="flex gap-x-2 h-5 leading-tight">
                                        <div>BG611</div>
                                        <Separator
                                            className="bg-[#E1E1E1]"
                                            orientation="vertical"
                                        />
                                        <div>Economy</div>
                                        <Separator
                                            className="bg-[#E1E1E1]"
                                            orientation="vertical"
                                        />
                                        <div>Boing-787</div>
                                    </div>
                                    <p>{inboundArrivalAirport}</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <InfoTable table={table} />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none" value="item-2">
                    <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
                        Makkah Hotel Details
                    </h2>
                    <AccordionTrigger
                        className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 sm:pr-6 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
                        iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
                    >
                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                                <HotelIcon
                                    className="text-primary h-10 w-10 md:h-[60px] md:w-[60px]"
                                    viewBox="0 0 14 14"
                                />
                                <div>
                                    <div className="text-t-900 text-base md:text-lg">
                                        Stay {makkahHotelNoOfNights} Night
                                    </div>
                                    <div className="text-t-800 text-sm md:text-base">
                                        In Makkah
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-around gap-5 px-4 xs:px-4 py-5 sm:px-6 md:px-4 lg:px-8 xl:px-14">
                                <div className="aspect-[70/85] md:aspect-[171/127] overflow-hidden flex-shrink-0 w-[75px] md:w-44 ">
                                    <Image
                                        src={process.env.NEXT_PUBLIC_API_URL + "/" + makkahHotelThumbnail}
                                        alt="Hotel"
                                        width="171"
                                        height="127"
                                        className="rounded-sm w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 text-sm md:text-base">
                                    <h4 className="text-xs line-clamp-1 md:text-lg text-t-900 mb-1 md:line-clamp-2 leading-loose  md:leading-normal">
                                        {makkahHotelName}
                                    </h4>
                                    <p className="text-xs md:text-base line-clamp-1 text-t-800 mb-1 md:line-clamp-2 leading-loose md:leading-normal">
                                        {makkahHotelAddress}
                                    </p>
                                    <div className="flex items-center gap-x-2 text-t-600 leading-loose md:leading-normal">
                                        <ul className="flex items-center gap-x-1 md:gap-x-2">
                                            {Array.from({ length: filledStars })?.map((_, index) => (
                                                <li key={`filled-${index}`} className="text-[#FF7B39]">
                                                    <StarAltIcon size={18} />
                                                </li>
                                            ))}
                                            {hasHalfStar && (
                                                <li className="text-[#FF7B39]">
                                                    <StarAltIcon size={18} className="half-star-class" /> {/* Implement a half-star if available */}
                                                </li>
                                            )}
                                            {Array.from({ length: emptyStars })?.map((_, index) => (
                                                <li key={`empty-${index}`} className="text-gray-300"> {/* You can use a different color or icon for empty stars */}
                                                    <StarAltIcon size={18} />
                                                </li>
                                            ))}
                                        </ul>
                                        <span className="mt-1.5 md:mt-1 text-xs md:text-base">
                                            {hotelRating.toFixed(1)} {/* Display the rating as a decimal with one decimal point */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-[352px]">
                                <Slider hasTrack={false} options={options}>
                                    <SplideTrack>
                                        {makkahHotelExtraThumbnails?.map((item, index) => (
                                            <SplideSlide key={index}>
                                                <div className="aspect-square overflow-hidden  rounded-sm">
                                                    <Image
                                                        src={process.env.NEXT_PUBLIC_API_URL + "/" + item}
                                                        alt={"Hotel image"}
                                                        width={156}
                                                        height={146}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </SplideSlide>
                                        ))}
                                    </SplideTrack>
                                </Slider>
                            </div>
                            <Separator
                                className="bg-[#E1E1E1] hidden md:block h-auto"
                                orientation="vertical"
                            />
                            <Separator className="bg-[#E1E1E1] md:hidden" />
                            <div className="text-t-600 space-y-3">
                                <p> {makkahHotelName} </p>
                                <ul className="grid gap-y-3">
                                    <li className="flex gap-x-2.5">
                                        <LocationCircleIcon className="text-primary flex-shrink-0" />
                                        <span>
                                            {makkahHotelAddress}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-2.5">
                                        <LocationDistanceIcon className="text-primary flex-shrink-0" />
                                        <span>
                                            Hotel Distance from Masjid Al Haram : {makkahHotelDistance} {makkahHotelDistanceUnit}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-2.5">
                                        <ManWalkingIcon className="text-primary flex-shrink-0" />
                                        <span> moment.duration
                                            Hotel to Majid Al Haram Walking Distance : {makkahHotelWalkDuration < 60
                                                ? `${makkahHotelWalkDuration} minutes`
                                                : `${moment.duration(makkahHotelWalkDuration, 'minutes').asHours().toFixed(1)} hours`}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-2.5">
                                        <GMapIcon className="text-primary flex-shrink-0" />
                                        <span>
                                            Google Map Link :
                                            <a href={makkahHotelLocation} target="_blank" className="text-primary">
                                                Click Here
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
                            <BulbOnIcon className="text-t-600 flex-shrink-0" />
                            Breakfast / Lunch / Dinner facilities depend on your booking
                            package
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none" value="item-3">
                    <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
                        madinah Hotel Details
                    </h2>
                    <AccordionTrigger
                        className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 sm:pr-6 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
                        iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
                    >
                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                                <HotelIcon
                                    className="text-primary h-10 w-10 md:h-[60px] md:w-[60px]"
                                    viewBox="0 0 14 14"
                                />
                                <div>
                                    <div className="text-t-900 text-base md:text-lg">
                                        Stay {madinahHotelNoOfNights} Night
                                    </div>
                                    <div className="text-t-800 text-sm md:text-base">
                                        In madinah
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-around gap-5 px-4 xs:px-4 py-5 sm:px-6 md:px-4 lg:px-8 xl:px-14">
                                <div className="aspect-[70/85] md:aspect-[171/127] overflow-hidden flex-shrink-0 w-[75px] md:w-44 ">
                                    <Image
                                        src={process.env.NEXT_PUBLIC_API_URL + "/" + madinahHotelThumbnail}
                                        alt="Hotel"
                                        width="171"
                                        height="127"
                                        className="rounded-sm w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 text-sm md:text-base">
                                    <h4 className="text-xs line-clamp-1 md:text-lg text-t-900 mb-1 md:line-clamp-2 leading-loose  md:leading-normal">
                                        {madinahHotelName}
                                    </h4>
                                    <p className="text-xs md:text-base line-clamp-1 text-t-800 mb-1 md:line-clamp-2 leading-loose md:leading-normal">
                                        {madinahHotelAddress}
                                    </p>
                                    <div className="flex items-center gap-x-2 text-t-600 leading-loose md:leading-normal">
                                        <ul className="flex items-center gap-x-1 md:gap-x-2">
                                            {Array.from({ length: filledStars })?.map((_, index) => (
                                                <li key={`filled-${index}`} className="text-[#FF7B39]">
                                                    <StarAltIcon size={18} />
                                                </li>
                                            ))}
                                            {hasHalfStar && (
                                                <li className="text-[#FF7B39]">
                                                    <StarAltIcon size={18} className="half-star-class" /> {/* Implement a half-star if available */}
                                                </li>
                                            )}
                                            {Array.from({ length: emptyStars })?.map((_, index) => (
                                                <li key={`empty-${index}`} className="text-gray-300"> {/* You can use a different color or icon for empty stars */}
                                                    <StarAltIcon size={18} />
                                                </li>
                                            ))}
                                        </ul>
                                        <span className="mt-1.5 md:mt-1 text-xs md:text-base">
                                            {hotelRating.toFixed(1)} {/* Display the rating as a decimal with one decimal point */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-[352px]">
                                <Slider hasTrack={false} options={options}>
                                    <SplideTrack>
                                        {madinahHotelExtraThumbnails?.map((item, index) => (
                                            <SplideSlide key={index}>
                                                <div className="aspect-square overflow-hidden  rounded-sm">
                                                    <Image
                                                        src={process.env.NEXT_PUBLIC_API_URL + "/" + item}
                                                        alt={"Hotel image"}
                                                        width={156}
                                                        height={146}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </SplideSlide>
                                        ))}
                                    </SplideTrack>
                                </Slider>
                            </div>
                            <Separator
                                className="bg-[#E1E1E1] hidden md:block h-auto"
                                orientation="vertical"
                            />
                            <Separator className="bg-[#E1E1E1] md:hidden" />
                            <div className="text-t-600 space-y-3">
                                <p> {madinahHotelName} </p>
                                <ul className="grid gap-y-3">
                                    <li className="flex gap-x-2.5">
                                        <LocationCircleIcon className="text-primary flex-shrink-0" />
                                        <span>
                                            {madinahHotelAddress}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-2.5">
                                        <LocationDistanceIcon className="text-primary flex-shrink-0" />
                                        <span>
                                            Hotel Distance from Masjid Al Haram : {madinahHotelDistance} {madinahHotelDistanceUnit}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-2.5">
                                        <ManWalkingIcon className="text-primary flex-shrink-0" />
                                        <span> moment.duration
                                            Hotel to Majid Al Haram Walking Distance : {madinahHotelWalkDuration < 60
                                                ? `${madinahHotelWalkDuration} minutes`
                                                : `${moment.duration(madinahHotelWalkDuration, 'minutes').asHours().toFixed(1)} hours`}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-2.5">
                                        <GMapIcon className="text-primary flex-shrink-0" />
                                        <span>
                                            Google Map Link :
                                            <a href={madinahHotelLocation} target="_blank" className="text-primary">
                                                Click Here
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
                            <BulbOnIcon className="text-t-600 flex-shrink-0" />
                            Breakfast / Lunch / Dinner facilities depend on your booking
                            package
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none" value="item-4">
                    <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
                        Inbound Flight Details
                    </h2>
                    <AccordionTrigger
                        className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
                        iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
                    >
                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                                <BalakaIcon
                                    className="text-primary h-10 w-10 md:h-[51px] md:w-[51px]"
                                    viewBox="0 0 51 51"
                                />
                                <div>
                                    <div className="text-t-900 text-base md:text-lg">
                                        {airLineName?.name}

                                    </div>
                                    <div className="text-t-800 text-sm md:text-base"> {inboundAirCraftModel}</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-around gap-x-4 px-4 xs:px-4 py-5 sm:px-6 md:px-4">
                                <div className="text-right space-y-1.5 border-l border-[#f4f4f4] pl-[1px]">
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        {inboundDepartureAirport}
                                    </p>
                                    <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                                        {inboundAirlineCode}  {moment(inboundDepartureDatetime).format("hh:mm")}
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        Wed, 25 Dec 2023
                                    </p>
                                </div>
                                <div className="text-center space-y-1.5">
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        06h 46m
                                    </p>
                                    <div className="flex items-center gap-x-2 md:gap-x-4">
                                        <PlaneIcon
                                            className="text-primary w-4 h-4 rotate-90"
                                            viewBox="0 0 14 14"
                                        />
                                        <Separator className="flex-1 bg-t-800 w-10 md:w-28" />
                                        <LocationIcon
                                            className="text-primary w-4 h-4"
                                            viewBox="0 0 14 14"
                                        />
                                    </div>
                                    {/* <div className="flex md:hidden items-center gap-x-1">
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                    <BalakaIcon
                      className="text-primary w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 51 51"
                    />
                    <Separator className="flex-1 bg-t-800 w-6 sm:w-10" />
                  </div> */}
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        (Non Stop)
                                    </p>
                                </div>
                                <div className="text-left space-y-1.5">
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        {inboundArrivalAirport}
                                    </p>
                                    <div className="text-xs font-medium md:font-normal sm:text-base md:text-lg lg:text-[1.375rem] text-t-900">
                                        {inboundAirlineCode}        {moment(inboundArrivalDatetime).format("hh:mm")}
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-t-800">
                                        Wed, 26 Dec 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-x-10">
                            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-6">
                                <div className="flex sm:flex-col justify-between gap-x-8 gap-y-4">
                                    <p>08:00</p>
                                    <p>01 h 25m</p>
                                    <p>13:45</p>
                                </div>
                                <div className="flex sm:flex-col items-center justify-between gap-4">
                                    <PlaneIcon
                                        className="text-primary w-4 h-4 rotate-90 sm:rotate-180"
                                        viewBox="0 0 14 14"
                                    />
                                    <Separator
                                        className="flex-1 bg-[#E1E1E1] hidden sm:block"
                                        orientation="vertical"
                                    />
                                    <Separator className="flex-1 bg-[#E1E1E1] sm:hidden" />
                                    <LocationIcon
                                        className="text-primary w-4 h-4"
                                        viewBox="0 0 14 14"
                                    />
                                </div>
                                <div className="flex flex-col justify-between gap-y-4 sm:gap-y-6">
                                    <p>{inboundArrivalAirport}</p>
                                    <div className="flex items-center gap-x-2.5">
                                        <BalakaIcon
                                            className="text-primary w-6 h-6"
                                            viewBox="0 0 51 51"
                                        />
                                        <p>{airLineName?.name}
                                        </p>
                                    </div>
                                    <div className="flex gap-x-2 h-5 leading-tight">
                                        <div>BG611</div>
                                        <Separator
                                            className="bg-[#E1E1E1]"
                                            orientation="vertical"
                                        />
                                        <div>Economy</div>
                                        <Separator
                                            className="bg-[#E1E1E1]"
                                            orientation="vertical"
                                        />
                                        <div>Boing-787</div>
                                    </div>
                                    <p>{inboundArrivalAirport}</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <InfoTable table={table} />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none" value="item-5">
                    <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
                        Visa Details
                    </h2>
                    <AccordionTrigger
                        className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
                        iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
                    >
                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                                <VisaIcon
                                    className="text-primary flex-shrink-0 w-10 h-10 md:w-[61px] md:h-[62px]"
                                    viewBox="0 0 61 62"
                                />
                                <div>
                                    <div className="text-t-900 text-base md:text-lg">
                                        Visa Type
                                    </div>
                                    <div className="text-t-800 text-sm md:text-base">
                                        {visaType}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 md:gap-x-16 px-4 py-5 sm:px-6 md:pl-[50px] md:pr-1 lg:px-4 xl:pl-14 xl:pr-2">
                                <div className="flex-1 text-right sm:text-left border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Number Of Entries
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {visaNoOfEntries}
                                    </div>
                                </div>
                                <div className="flex-1 text-center md:text-left border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Max Stay
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {visaDuration} Days
                                    </div>
                                </div>
                                <div className="flex-1 border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Visa Valid
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {visaValidity} Days
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
                        <div className="space-y-4">
                            <p className="text-t-800">Visa Required</p>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                                <li className="col-span-2 md:col-span-1">
                                    *Passport copy with minimum 6 months validity
                                </li>
                                <li className="col-span-2 md:col-span-1">
                                    *Passport size photo (white background)
                                </li>
                                <li className="col-span-2 md:col-span-1">
                                    *ID card / Birth certificate
                                </li>
                                <li className="col-span-2 md:col-span-1">
                                    *Return ticket booking copy
                                </li>
                                <li className="col-span-2 md:col-span-1">
                                    *Hotel booking copy
                                </li>
                                <li className="col-span-2 md:col-span-1">
                                    *Required covid 19 vaccines certificate
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
                            <BulbOnIcon className="text-t-600 flex-shrink-0" />
                            <span>
                                Visa Fee is <span className="text-primary">Non-Refundable</span>{" "}
                                ** Visa Fee is{" "}
                                <span className="text-primary">Non-Refundable</span> ** Visa Fee
                                is <span className="text-primary">Non-Refundable</span>
                            </span>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none" value="item-6">
                    <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
                        Transport Details
                    </h2>
                    <AccordionTrigger
                        className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
                        iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
                    >
                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 px-4 py-6 md:p-6 lg:px-8 lg:py-12 lg:w-80">
                                <BusIcon
                                    className="text-primary flex-shrink-0 w-10 h-10 md:w-[60px] md:h-[60px]"
                                    viewBox="0 0 14 14"
                                />
                                <div>
                                    <div className="text-t-900 text-base md:text-lg">
                                        Transport Type
                                    </div>
                                    <div className="text-t-800 text-sm md:text-base">by {transportType}</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 md:gap-x-16 px-4 py-5 sm:px-6 md:pl-[50px] md:pr-1 lg:px-4 xl:pl-14 xl:pr-2">
                                <div className="flex-1 text-right sm:text-left border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Airport to Hotel
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {transportAirportToHotel}
                                    </div>
                                </div>
                                <div className="flex-1 text-center md:text-left border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Visitor Place
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {transportVisitorPlaces}
                                    </div>
                                </div>
                                <div className="flex-1 border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Hotel to Aiport
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {transportHotelToAirport}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
                        <div className="space-y-4">
                            <p className="text-t-800">Bus Service (Round Trip)</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 md:col-span-1 flex flex-col md:items-start">
                                    <ul
                                        className={`space-y-3 h-40 lg:h-44 ${showBus ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                                    >
                                        {transportServices?.map((service, ind) => (
                                            <li key={ind} className="flex gap-x-2 items-center">
                                                <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant="ghost"
                                        className="text-primary justify-start px-0.5 hover:bg-transparent"
                                        onClick={handleShowBusMore}
                                    >
                                        <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                                            {showBus ? <Plus size={16} /> : <Minus size={16} />}
                                        </span>
                                        {showBus ? "Show more" : "Show less"}
                                    </Button>
                                </div>
                                <div className="col-span-2 md:col-span-1 flex flex-col md:items-start">
                                    <ul
                                        className={`space-y-3 h-40 lg:h-44 ${showTransportTypes ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                                    >
                                        {transportServiceTypes?.map((type, ind) => (
                                            <li key={ind} className="flex gap-x-2 items-center">
                                                <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                                                {type}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant="ghost"
                                        className="text-primary justify-start px-0.5 hover:bg-transparent"
                                        onClick={handleShowTrasnportTypesMore}
                                    >
                                        <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                                            {showTransportTypes ? (
                                                <Plus size={16} />
                                            ) : (
                                                <Minus size={16} />
                                            )}
                                        </span>
                                        {showTransportTypes ? "Show more" : "Show less"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
                            <BulbOnIcon className="text-t-600 flex-shrink-0" />
                            <span>
                                Note : {transportNote}.
                            </span>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-none" value="item-7">
                    <h2 className="text-sm md:text-base text-t-800 mb-4 lg:mb-6">
                        Ziyara Details
                    </h2>
                    <AccordionTrigger
                        className="bg-white hover:no-underline relative font-normal text-left py-0 pr-0 lg:pr-8 shadow-[0_3px_12px_0_rgba(0,0,0,0.03)]"
                        iconClassName="h-5 w-5 text-primary absolute lg:static top-[2.125rem] right-4 md:top-[3.25rem] lg:top-0 md:-translate-y-1/2 lg:translate-y-0 md:right-4 lg:right-0"
                    >
                        <div className="flex-1 flex flex-col lg:flex-row">
                            <div className="flex-shrink-0 flex items-center gap-x-4 bg-p-300 p-6 lg:px-8 lg:py-12 lg:w-80">
                                <KabaIcon
                                    className="text-primary flex-shrink-0 w-10 h-10 md:w-[60px] md:h-[60px]"
                                    viewBox="0 0 26 27"
                                />
                                <div>
                                    <div className="text-t-900 text-base md:text-lg">
                                        Ziyara /Sightseeing
                                    </div>
                                    <div className="text-t-800 text-sm md:text-base">
                                        Within {ziyarahDays} Days
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-between md:justify-around gap-x-4 md:gap-x-16 px-4 py-5 sm:px-6 md:pl-[50px] md:pr-1 lg:px-4 xl:pl-14 xl:pr-2">
                                <div className="flex-1 text-right sm:text-left border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Makkah Ziyara
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {ziyarahMakkah}
                                    </div>
                                </div>
                                <div className="flex-1 text-center md:text-left border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Madina Ziyara
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {ziyarahMadinah}
                                    </div>
                                </div>
                                <div className="flex-1 border-l border-[#f4f4f4] pl-[1px]">
                                    <div className="text-t-900 text-sm sm:text-base lg:text-lg">
                                        Taif Ziyara
                                    </div>
                                    <div className="text-t-800 text-xs sm:text-sm lg:text-base">
                                        {ziyarahTaif}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-sm md:text-base text-t-600 p-4 sm:p-6 md:p-8 xl:px-12 space-y-8">
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div className="flex flex-col md:items-start gap-y-4">
                                    <p className="text-t-800">Makkah Ziyarah</p>
                                    <div>
                                        <ul
                                            className={cn("space-y-3  pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]", {
                                                "overflow-hidden": showMakkah,
                                                "overflow-y-auto": !showMakkah,
                                                "h-40 lg:h-44": ziyarahMakkahDetails?.length > 4
                                            })}
                                        >
                                            {ziyarahMakkahDetails?.map((item, ind) => (
                                                <li key={ind} className="flex gap-x-2 items-center">
                                                    <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        {
                                            ziyarahMakkahDetails?.length > 4 && (
                                                <Button
                                                    variant="ghost"
                                                    className="text-primary justify-start px-0.5 hover:bg-transparent"
                                                    onClick={handleShowMakkahMore}
                                                >
                                                    <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                                                        {showMakkah ? <Plus size={16} /> : <Minus size={16} />}
                                                    </span>
                                                    {showMakkah ? "Show more" : "Show less"}
                                                </Button>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-start gap-y-4">
                                    <p className="text-t-800">Madinah Ziyarah</p>
                                    <div>
                                        <ul
                                            className={`space-y-3 h-40 lg:h-44 ${showMadinah ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                                        >
                                            {ziyarahMadinahDetails?.map((item, ind) => (
                                                <li key={ind} className="flex gap-x-2 items-center">
                                                    <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            variant="ghost"
                                            className="text-primary justify-start px-0.5 hover:bg-transparent"
                                            onClick={handleShowMadinahMore}
                                        >
                                            <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                                                {showMadinah ? <Plus size={16} /> : <Minus size={16} />}
                                            </span>
                                            {showMadinah ? "Show more" : "Show less"}
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-start gap-y-4">
                                    <p className="text-t-800">Taif Ziyarah</p>
                                    <div>
                                        <ul
                                            className={`space-y-3 h-40 lg:h-44 ${showTaif ? "overflow-hidden" : "overflow-y-auto"} pr-4 scrollbar-thin scrollbar-thumb-[#CFD1D4] scrollbar-track-[#F4F4F4]`}
                                        >
                                            {ziyarahTaifDetails?.map((item, ind) => (
                                                <li key={ind} className="flex gap-x-2 items-center">
                                                    <CheckCircleFilledIcon className="text-primary flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            variant="ghost"
                                            className="text-primary justify-start px-0.5 hover:bg-transparent"
                                            onClick={handleShowTaifMore}
                                        >
                                            <span className="flex-shrink-0 w-4 h-4 inline-flex items-center justify-center bg-primary text-white rounded-full">
                                                {showTaif ? <Plus size={16} /> : <Minus size={16} />}
                                            </span>
                                            {showTaif ? "Show more" : "Show less"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2.5 text-t-800 bg-p-300 rounded-sm p-2.5">
                                <BulbOnIcon className="text-t-600 flex-shrink-0" />
                                <span>
                                    Note : {ziyarahNote}.
                                </span>
                            </div>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default PackageDetail;

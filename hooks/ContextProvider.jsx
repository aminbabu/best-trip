"use client"
import { createContext } from "react";
import PropTypes from "prop-types";
export const Context = createContext("");

const ContextProvider = ({ children }) => {
    const [bookingId, setBookingId] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const contextValue = {
        bookingId,
        paymentType,
        setPaymentType,
        setBookingId
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

ContextProvider.propTypes = {
    children: PropTypes.node,
};

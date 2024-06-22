import Link from "next/link";

export const bookingListTable = {
  title: "Booking List",

  tableHeads: [
    {
      id: 1,
      item: "booking id",
    },
    {
      id: 2,
      item: "status",
    },
    {
      id: 3,
      item: "supplier",
    },
    {
      id: 4,
      item: "booking type",
    },
    {
      id: 5,
      item: "book on",
    },
    {
      id: 6,
      item: "book by",
    },
    {
      id: 7,
      item: "travel date",
    },
    {
      id: 8,
      item: "summery",
    },
    {
      id: 9,
      item: "prime pax",
    },
    {
      id: 10,
      item: "mobile app",
    },
    {
      id: 11,
      item: "api booking",
    },
    {
      id: 12,
      item: "documents",
    },
    {
      id: 13,
      item: "sales amount",
    },
  ],

  tableRows: [
    {
      id: 1,
      item: (
        <Link href="/booking-details">
          <span className="text-primary underline hover:no-underline">
            BTU24000024
          </span>
        </Link>
      ),
    },
    {
      id: 2,
      item: (
        <span className="px-2.5 py-1 text-xs bg-blue-400 text-white rounded">
          Booked
        </span>
      ),
    },
    {
      id: 3,
      item: "1BU-01",
    },
    {
      id: 4,
      item: "Umrah Package",
    },
    {
      id: 5,
      item: "Jan 08, 2024-16:25",
    },
    {
      id: 6,
      item: "BTC24000001",
    },
    {
      id: 7,
      item: "Jan 08, 2024",
    },
    {
      id: 8,
      item: "12 Travellers",
    },
    {
      id: 9,
      item: "Majarul Islam Safoyan",
    },
    {
      id: 10,
      item: "Yes",
    },
    {
      id: 11,
      item: "Yes",
    },
    {
      id: 12,
      item: "Yes",
    },
    {
      id: 13,
      item: "BDT 10,00,000",
    },
  ],
};

export const bestPayTable = {
  title: "Payment Records",

  tableHeads: [
    {
      id: 1,
      item: "ref. number",
    },
    {
      id: 2,
      item: "status",
    },
    {
      id: 3,
      item: "type",
    },
    {
      id: 4,
      item: "amount",
    },
    {
      id: 5,
      item: "created at",
    },
    {
      id: 6,
      item: "reason",
    },
  ],

  tableRows: [
    {
      id: 1,
      item: "BF000000009",
    },
    {
      id: 2,
      item: (
        <span className="px-2.5 py-1 text-xs bg-blue-400 text-white rounded">
          Request
        </span>
      ),
    },
    {
      id: 3,
      item: "Bank Transfer",
    },
    {
      id: 4,
      item: "1,500.00 BDT",
    },
    {
      id: 5,
      item: "14 Dec 2020, 8:43 pm",
    },
    {
      id: 6,
      item: "NA",
    },
  ],
};

export const partialPaymentTable = {
  title: "Partial Payment Bookings",

  tableHeads: [
    {
      id: 1,
      item: "sl",
    },
    {
      id: 2,
      item: "customer number",
    },
    {
      id: 3,
      item: "booking ref. no.",
    },
    {
      id: 4,
      item: "type",
    },
    {
      id: 5,
      item: "booking date",
    },
    {
      id: 6,
      item: "travel date",
    },
    {
      id: 7,
      item: "due date",
    },
    {
      id: 8,
      item: "total amount",
    },
    {
      id: 9,
      item: "paid amount",
    },
  ],

  tableRows: [
    {
      id: 1,
      item: "101",
    },
    {
      id: 2,
      item: "10095",
    },
    {
      id: 3,
      item: "DEF00978",
    },
    {
      id: 4,
      item: "Bank Transfer",
    },
    {
      id: 5,
      item: "14 Dec 2020, 8:43 pm",
    },
    {
      id: 6,
      item: "14 Dec 2020, 8:43 pm",
    },
    {
      id: 7,
      item: "14 Dec 2020, 8:43 pm",
    },
    {
      id: 8,
      item: "10,00,000 BDT",
    },
    {
      id: 9,
      item: "6,00,000 BDT",
    },
  ],
};

export const generalLedgerTable = {
  title: "General Ledger",

  tableHeads: [
    {
      id: 1,
      item: "customer name",
    },
    {
      id: 2,
      item: "type",
    },
    {
      id: 3,
      item: "transaction type",
    },
    {
      id: 4,
      item: "amount",
    },
    {
      id: 5,
      item: "running balance",
    },
    {
      id: 6,
      item: "created at",
    },
    {
      id: 7,
      item: "description",
    },
  ],

  tableRows: [
    {
      id: 1,
      item: "Md. Irfanul Haque",
    },
    {
      id: 2,
      item: (
        <span className="px-2.5 py-1 text-xs bg-blue-400 text-white rounded">
          Request
        </span>
      ),
    },
    {
      id: 3,
      item: "Bank Transfer",
    },
    {
      id: 4,
      item: "30,00,000 BDT",
    },
    {
      id: 5,
      item: "15,00,00 BDT",
    },
    {
      id: 6,
      item: "14 Dec 2020, 8:43 pm",
    },
    {
      id: 7,
      item: "NA",
    },
  ],
};

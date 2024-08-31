import { Button } from "../ui/button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { bookPackage } from "@/actions/booking/book-package";

const BookingForm = ({ data, bookingData }) => {
  const router = useRouter();
  console.log(data);

  const submitBooking = async (event) => {
    event.preventDefault();

    if (!data) {
      Swal.fire({
        title: "Login Required",
        text: "You have to log in to book a package!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok!",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/sign-in`);
        }
      });
      return;
    }

    try {
      const response = await bookPackage(bookingData);
      const bookingId = response?.data?.data?._id;
      return console.log(response);

      Swal.fire({
        title: `Booking Successful! BookingId: ${bookingId}`,
        text: "Your package booking was successful.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

      router.push(`/umrah/${bookingId}/traveller-details`);
    } catch (error) {
      console.error(error);

      if (error?.response?.data?.id) {
        const bookingId = error?.response?.data?.id;

        router.push(`/umrah/${bookingId}/traveller-details`);
      }
    }
  };

  return (
    <form onSubmit={submitBooking}>
      <div className="grid">
        <Button type="submit">Continue Booking</Button>
      </div>
    </form>
  );
};

export default BookingForm;

const handleAxiosError = ({ request, response, message }) => {
  if (response) {
    // console.log(response, "FROM AXIOS ERROR RESPONSE");
    return (
      response?.data?.message || "Something is wrong. Please try again later."
    );
  }

  if (request) {
    // console.log(request, "FROM AXIOS ERROR REQUEST");
    return (
      request?.data?.message || "Something is wrong. Please try again later."
    );
  }

  // console.log(message, "FROM AXIOS ERROR MESSAGE");
  return message;
};

export default handleAxiosError;

const handleAxiosError = ({ request, response, message }) => {
  if (response) {
    // console.log(response, "FROM AXIOS ERROR RESPONSE");
    return {
      error:
        response?.data?.message ||
        "Something is wrong. Please try again later.",
    };
  }

  if (request) {
    // console.log(request, "FROM AXIOS ERROR REQUEST");
    return {
      error:
        request?.data?.message || "Something is wrong. Please try again later.",
    };
  }

  // console.log(message, "FROM AXIOS ERROR MESSAGE");
  return { error: message };
};

export default handleAxiosError;

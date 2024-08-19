const handleAxiosError = ({ request, response, message }) => {
  console.log("FROM AXIOS ERROR HANDLER:");

  if (response) {
    return (
      response?.data?.message || "Something is wrong. Please try again later."
    );
  }

  if (request) {
    console.log(request);
    return (
      request?.data?.message || "Something is wrong. Please try again later."
    );
  }
  console.log("Error", message);
  return message;
};

export default handleAxiosError;

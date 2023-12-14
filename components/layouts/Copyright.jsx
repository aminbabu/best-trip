import moment from "moment";

const Copyright = () => {
  return (
    <div className="pb-10 lg:pb-16">
      <p className="text-t-600 text-base lg:text-lg text-center mb-0">
        Best Trip Ltd. | © {moment().format("YYYY")} All Rights Reserved
      </p>
    </div>
  );
};

export default Copyright;

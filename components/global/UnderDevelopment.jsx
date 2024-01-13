const UnderDevelopment = ({ children }) => {
  return (
    <div className="px-4 py-3 bg-p-300 rounded sm:text-sm lg:text-base">
      {children ? children : "Under development"}
    </div>
  );
};

export default UnderDevelopment;

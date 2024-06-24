const UnderDevelopment = ({ children }) => {
  return (
    <div className="lg:flex-1 lg:self-start px-4 py-3 bg-p-300 rounded text-sm lg:text-base">
      {children ? children : "Under development"}
    </div>
  );
};

export default UnderDevelopment;

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full relative max-w-[1440px] xl:w-[1320px] lg:px-5 px-3 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

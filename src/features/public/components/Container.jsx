const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full relative max-w-[1440px] xl:px-10 lg:px-5 px-3 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

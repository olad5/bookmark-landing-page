interface IProps {
  color?: string;
  state?: string;
  padding?: string;
  fontSize?: string;
}

const Button: React.FC<IProps> = ({
  children,
  color,
  padding,
  fontSize,
  state = "inline-block",
}) => {
  return (
    <a
      href="#"
      className={`w-full  max-w-max ${padding} px-4 sm:px-9 lg:px-5 xl:px-10 ${fontSize}  sm:text-[.8rem] ${state}  py-3  text-sm lg:text-xs lg:text-[.7rem] text-white  
              rounded ${
                color === "red" ? "bg-primary-softRed" : "bg-primary-softBlue"
              } 
              ${
                color === "red"
                  ? "hover:text-primary-softRed hover:ring-red-700"
                  : "hover:text-primary-softBlue hover:ring-primary-softBlue"
              } 
              hover:bg-white hover:ring-2  `}
    >
      {children}
    </a>
  );
};

export default Button;

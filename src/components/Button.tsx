interface IProps {
  color?: string;
  state?: string;
  padding?: string;
  fontSize?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = ({
  children,
  color,
  padding,
  fontSize,
  handleClick,
  state = "inline-block",
}) => {
  return (
    <button
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
      onClick={(event) => handleClick && handleClick(event)}
    >
      {children}
    </button>
  );
};

export default Button;

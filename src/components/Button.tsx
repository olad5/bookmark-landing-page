interface IProps {
  color?: string;
  state?: string;
}

const Button: React.FC<IProps> = ({
  children,
  color,
  state = "inline-block",
}) => {
  return (
    <a
      href="#"
      className={`px-4 text-[.7rem] sm:text-[.8rem] ${state} xl:px-10 py-3 lg:px-5 text-sm sm:px-9 lg:text-xs text-white  
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

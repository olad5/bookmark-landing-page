interface IProps {
  onClick: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
}

// TODO: remove the props and interface here
// export const LogoIcon: React.FC<IProps> = ({ fillColor }) => (
export const MenuIcon: React.FC<IProps> = ({ onClick }) => (
  <svg
    onClick={onClick}
    className="w-full "
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="15"
  >
    <path
      fill="#242A45"
      fillRule="evenodd"
      // onClick={onClick}
      d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
    />
  </svg>
);

interface IProps {
  onClick: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
}

// TODO: add the handlemenuclick prop
// export const LogoIcon: React.FC<IProps> = ({ fillColor }) => (
export const CloseIcon: React.FC<IProps> = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
  >
    <path
      fill="#FFF"
      fillRule="evenodd"
      // onClick={onClick}
      d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
    />
  </svg>
);

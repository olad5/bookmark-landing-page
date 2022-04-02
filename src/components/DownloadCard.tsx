import Button from "./Button";
interface IProps {
  card: {
    id: number;
    title: string;
    version: string;
    icon: string;
  };
}

const DownloadCard: React.FC<IProps> = ({ card }) => {
  return (
    <div
      // this is to creat the stairs effect for each of the cards
      className={`container mt-${
        card.id * 8
      } py-7 flex flex-col items-center mx-auto shadow-xl rounded-lg`}
    >
      <img src={`${card.icon}`} className="mt-4 " alt="browser-icon" />
      <h3 className="mb-2 text-xl mt-4 font-medium text-center">
        {` Add to ${card.title} `}
      </h3>
      <p className="w-full px-4 lg:w-4/5 m-auto lg:text-sm text-center text-gray-400">
        {` Minimium version ${card.version} `}
      </p>

      <hr className="my-4 w-full border-t-4 border-dotted   border-slate-200" />

      <Button> Add & Install Extension </Button>
    </div>
  );
};

export default DownloadCard;

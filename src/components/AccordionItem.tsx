interface IProps {
  question: {
    id: number;
    question: string;
    answer: string;
  };

  active: boolean;
  onClick: VoidFunction;
}

const AccordionItem: React.FC<IProps> = ({ active, onClick, question }) => {
  return (
    <div>
      <div
        className=" flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <div className=" inline-block py-3 text-xs sm:text-sm md:text-md lg:text-lg  w-fit text-black  hover:text-primary-softRed">
          {question.question}
        </div>
        {active ? (
          <img
            src="/images/icon-arrow.svg"
            className="w-3 object-contain rotate-180 h-4 mr-4"
            alt=""
          />
        ) : (
          <img
            src="/images/icon-arrow.svg"
            className="w-3 object-contain  h-4 mr-4"
            alt=""
          />
        )}
      </div>
      <div className={active ? "answer show" : "answer"}>{question.answer}</div>
      <hr className=" w-full border-t-1 border-slate-200  " />
    </div>
  );
};

export default AccordionItem;

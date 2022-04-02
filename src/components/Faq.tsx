import Button from "./Button";
const FaqSection: React.FC = () => {
  // TODO: mayb this is where you would have your questions
  const questions = [
    {
      id: 0,
      question: " What is Bookmark? ",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis. ",
    },
    {
      id: 1,
      question: " How can I request a new browser? ",
      answer:
        " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. ",
    },
    {
      id: 2,
      question: " Is there a mobile app? hrome",
      answer:
        " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum. ",
    },
    {
      id: 3,
      question: " What about other Chromium browsers? ",
      answer:
        " Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. ",
    },
  ];

  return (
    <div className="container flex  w-11/12 xl:w-7/12 flex-col items-center mx-auto mb-12">
      <h3 className="mb-4 text-2xl font-medium text-center">
        Frequently Asked Questions
      </h3>
      <p className="w-full px-4 lg:w-3/5 m-auto lg:text-lg text-center text-gray-400">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="  border-t-[.5px] border-b-[.5px]  flex flex-col  w-3/5 border-slate-200 mx-6 mt-4 mb-12  ">
        {/* TODO: change all these a tags to divs, so you can have a text and the dropdown arrow inside of it */}
        {questions.map((question) => (
          <>
            <div className="flex items-center justify-between">
              <a
                href=""
                className="inline-block py-3 text-xs sm:text-sm md:text-md lg:text-lg  w-fit text-black  hover:text-primary-softBlue"
              >
                {question.question}
              </a>
              <img
                src="/images/icon-arrow.svg"
                className="w-3 object-contain h-4 mr-4"
                alt=""
              />
            </div>
            <hr className=" w-full border-t-1 border-slate-200  " />
          </>
        ))}
      </div>
      <div>
        <Button state="">More Info</Button>
      </div>
    </div>
  );
};

export default FaqSection;

import Button from "./Button";
const ContactForm: React.FC = () => {
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
    <div className=" flex  text-white bg-primary-softBlue  lg:px-24 flex-col py-12 items-center mb-12">
      <p className="w-[17rem] text-center contact-joined uppercase text-[.7rem] lg:text-[.6rem] font-medium mb-8 ">
        {" "}
        35,000+ already joined{" "}
      </p>
      <h3 className="mb-8 text-white w-[23rem] text-xl px-8 lg:text-2xl font-medium text-center ">
        Stay up-to-date with what we’re doing
      </h3>

      <div className="flex w-full  lg:w-2/5 lg:px-14">
        <form action="" className="flex w-full  justify-between">
          <input
            type="email"
            placeholder="Enter your email address"
            className=" rounded px-4 flex-1 outline-none "
          />
          <div className="ml-3 w-max">
            <Button color="red">Contact Us</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

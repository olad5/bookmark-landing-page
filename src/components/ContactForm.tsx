import Button from "./Button";

const ContactForm: React.FC = () => {
  return (
    <div className=" flex  text-white bg-primary-softBlue  lg:px-24 flex-col py-12 items-center mb-12">
      <p className="w-[17rem] text-center contact-joined uppercase text-[.7rem] lg:text-[.6rem] font-medium mb-8 ">
        {" "}
        35,000+ already joined{" "}
      </p>
      <h3 className="mb-8 text-white font-medium text-center  text-xl px-4 lg:w-[23rem] lg:text-2xl ">
        Stay up-to-date with what we’re doing
      </h3>

      <div className="flex px-4 sm:w-[28rem] lg:w-[28rem] lg:px-14">
        <form
          action=""
          className="flex flex-col w-full  lg:flex-row justify-between"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className=" rounded px-4 py-2  flex-1 outline-none "
          />
          <div className="mt-4 flex  justify-center items-center lg:block lg:mt-0 lg:ml-3 lg:w-max">
            <Button
              padding="py-2 px-20  sm:px-[10.93rem] lg:py-3   xl:px-4"
              color="red"
            >
              Contact Us
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

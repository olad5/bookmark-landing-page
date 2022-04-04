import Button from "./Button";

const ContactForm: React.FC = () => {
  return (
    <div className=" flex  text-white bg-primary-softBlue  lg:px-24 flex-col py-12 items-center mb-12">
      <p className="w-[17rem] text-center contact-joined uppercase text-[.7rem] lg:text-[.6rem] font-medium mb-8 ">
        {" "}
        35,000+ already joined{" "}
      </p>
      <h3 className="mb-8 text-white w-[23rem] text-xl px-4 lg:text-2xl font-medium text-center ">
        Stay up-to-date with what we’re doing
      </h3>

      <div className="flex   px-4   lg:w-[28rem] lg:px-14">
        <form
          action=""
          className="flex flex-col w-full  lg:flex-row justify-between"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className=" rounded px-4 flex-1 outline-none "
          />
          <div className="w-full lg:ml-3 lg:w-max">
            <Button padding="xl:px-4" color="red">
              Contact Us
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

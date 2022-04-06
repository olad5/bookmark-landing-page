import Button from "./Button";
import validator from "validator";
import { useState } from "react";

const ContactForm: React.FC = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [isEmailValid, setEmailValid] = useState<boolean>(true);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTextInput(event.currentTarget.value);
  };

  const validateEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (validator.isEmail(textInput)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

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
          <div className="flex flex-col items-center  sm:w-full lg:w-56  justify-center">
            {isEmailValid ? (
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full  rounded px-4 py-2 text-black  flex-1 outline-none  "
                onChange={handleChange}
              />
            ) : (
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full  border-2 border-primary-softRed rounded-t-md px-4 py-2 text-black  flex-1 outline-none pr-7  "
                  onChange={handleChange}
                />
                <img
                  src="/images/icon-error.svg"
                  alt="error-logo"
                  className="absolute top-3 right-2"
                />
              </div>
            )}
            {isEmailValid ? (
              <div className="hidden bg-red-600 w-full ">
                Whoops, make sure it's an email
              </div>
            ) : (
              <div className=" pl-3 py-0.5 text-[.5rem] italic rounded-b bg-primary-softRed w-full ">
                Whoops, make sure it's an email
              </div>
            )}
          </div>
          <div className="mt-4 flex  justify-center items-center lg:block lg:mt-0 lg:ml-3 lg:w-max">
            <Button
              padding="py-2 px-20  sm:px-[10.93rem] lg:py-3   xl:px-4"
              color="red"
              handleClick={validateEmail}
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

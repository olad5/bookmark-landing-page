import { LogoIcon } from "../components/Icons/LogoIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-veryDarkBlue">
      <div className="container px-4 py-3 mx-auto ">
        <nav className="flex flex-col lg:flex-row  justify-between items-center lg:px-4 ">
          <div className="flex flex-col lg:flex-row">
            <a
              href="#"
              className="inline-block lg:inline-block py-2 justify-items-start"
            >
              <LogoIcon fillColor="#fff" />
            </a>
            <a
              href="#"
              className="text-center inline-block xl:px-8 py-3 lg:px-5 text-sm lg:text-xs text-white uppercase hover:text-primary-softRed"
            >
              features
            </a>
            <a
              href="#"
              className="text-center inline-block xl:px-8 py-3 lg:px-5 text-sm lg:text-xs text-white uppercase hover:text-primary-softRed"
            >
              pricing
            </a>
            <a
              href="#"
              className="text-center inline-block xl:px-8 py-3 lg:px-5 text-sm lg:text-xs text-white uppercase hover:text-primary-softRed"
            >
              contact
            </a>
          </div>
          <div className=" mb-9 mt-3 justify-between items-center flex w-20 lg:mb-0 lg:mt-0">
            <a href="https://github.com/olad5/bookmark-landing-page">
              <img
                className="inline-block object-scale-down mr-0 lg:mr-8"
                src="images/icon-facebook.svg"
              />
            </a>
            <a href="https://www.twitter.com/_olad5">
              <img
                className="inline-block object-scale-down stroke-gray-800 "
                src="images/icon-twitter.svg"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

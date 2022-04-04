import { LogoIcon } from "../components/LogoIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-veryDarkBlue">
      <div className="container px-4 py-3 mx-auto ">
        <nav className="flex justify-between items-center lg:px-4 ">
          <div className="flex">
            <a
              href="#"
              className="inline-block lg:inline-block py-2 justify-items-start"
            >
              <LogoIcon fillColor="#fff" />
            </a>
            <a
              href="#"
              className="inline-block xl:px-8 py-3 lg:px-5 text-sm lg:text-xs text-white uppercase hover:text-primary-softRed"
            >
              features
            </a>
            <a
              href="#"
              className="inline-block xl:px-8 py-3 lg:px-5 text-sm lg:text-xs text-white uppercase hover:text-primary-softRed"
            >
              pricing
            </a>
            <a
              href="#"
              className="inline-block xl:px-8 py-3 lg:px-5 text-sm lg:text-xs text-white uppercase hover:text-primary-softRed"
            >
              contact
            </a>
          </div>
          <div className=" flex w-20 ">
            <img
              className="inline-block object-scale-down mr-8"
              src="images/icon-facebook.svg"
            />
            <img
              className="inline-block object-scale-down"
              src="images/icon-twitter.svg"
            />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

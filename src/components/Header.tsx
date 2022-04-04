import Button from "./Button";
import { LogoIcon } from "../components/LogoIcon";

const Header: React.FC = () => {
  return (
    /* page container */
    <header className="container px-4 py-8 mx-auto">
      {/* nav bar */}
      <nav className="flex justify-between item-center lg:px-4 ">
        <div>
          <a href="#" className="flex lg:inline-block py-3 justify-items-start">
            <LogoIcon />
          </a>
        </div>
        <div className="hidden lg:block">
          <a
            href="#"
            className="inline-block xl:px-10 py-3 lg:px-5 text-sm lg:text-xs text-black uppercase hover:text-primary-softRed"
          >
            features
          </a>
          <a
            href="#"
            className="inline-block xl:px-10 py-3 lg:px-5 text-sm lg:text-xs text-black uppercase hover:text-primary-softRed"
          >
            pricing
          </a>
          <a
            href="#"
            className="inline-block xl:px-10 py-3 lg:px-5 text-sm lg:text-xs text-black uppercase hover:text-primary-softRed"
          >
            contact
          </a>
          <div className="inline-block">
            <Button color="red">LOGIN</Button>
          </div>
        </div>
      </nav>
      {/* hero section */}
      <div className="flex flex-col lg:flex-row lg:py-20 lg:px-4 lg:w-full ">
        {/* cta section */}
        <div className="order-last lg:order-1 lg:mt-16">
          <h1 className="text-2xl text-center font-medium lg:text-left xl:text-5xl ">
            A Simple Bookmark Manager
          </h1>
          <p className="lg:w-3/4 py-6 text-center lg:text-left xl:text-lg text-gray-400">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          {/* cta buttons */}
          <div className=" gap-4 h-19 w-full  flex justify-center item-center  md:w-auto md:h-auto sm:flex sm:justify-center sm:w-auto lg:justify-start">
            <div className="inline-block">
              <Button padding="xl:px-4" color="blue">
                Get it on Chrome
              </Button>
            </div>
            <a
              href="#"
              className={`px-4 text-[.7rem] sm:text-[.8rem] inline-block xl:px-4 py-3 lg:px-5 text-sm sm:px-9 lg:text-xs text-black  
                          rounded bg-slate-100 hover:bg-white hover:ring-2 hover:ring-slate-900  shadow-2xl`}
            >
              Get it on Firefox
            </a>
          </div>
        </div>
        <img
          src="images/illustration-hero.svg"
          alt="hero"
          className=" mt-8 w-full md:w-[92rem] lg:w-[28rem] xl:w-[92rem] md:-mr-24 lg:-mr-4 lg:order-last "
        />
      </div>
    </header>
  );
};

export default Header;

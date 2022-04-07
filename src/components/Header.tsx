import Button from "./Button";
import { LogoIcon } from "../components/Icons/LogoIcon";
import HamMenu from "./HamMenu";
import { useState } from "react";
import { MenuIcon } from "./Icons/MenuIcon";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [menuActive, setMenuActive] = useState<"open" | "close">("close");

  const handleMenuClick = () => {
    if (menuActive === "open") {
      setMenuActive("close");
      setOpen(false);
      return;
    }
    setMenuActive("open");
    setOpen(!open);
  };

  return (
    /* page container */
    <div className="relative">
      {open ? (
        <div className=" w-full fixed  h-[100vh]">
          <HamMenu handleMenuClick={handleMenuClick} />
        </div>
      ) : null}
      <header className="container px-4 py-8 mx-auto">
        {!open ? (
          <nav className="flex justify-between items-center lg:px-4 ">
            {" "}
            {/* nav bar */}
            <div>
              <a
                href="#"
                className="flex lg:inline-block py-3 justify-items-start"
              >
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
            <div className="lg:hidden">
              <a href="#">
                <MenuIcon onClick={handleMenuClick} />
              </a>
            </div>
          </nav>
        ) : (
          <div className="h-11"></div>
        )}

        {/* hero section */}
        <div className="flex flex-col lg:flex-row lg:py-20 lg:px-4 lg:w-full ">
          {/* cta section */}
          <div className="order-last lg:order-1 lg:mt-16">
            <h1 className="text-2xl text-center font-medium lg:text-left xl:text-5xl ">
              A Simple Bookmark Manager
            </h1>
            <p className="lg:w-3/4 py-6 text-center lg:text-left xl:text-lg text-gray-400">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            {/* cta buttons */}
            <div className=" gap-4 h-19 w-full  flex sm:justify-center justify-center   md:w-auto md:h-auto sm:flex  sm:w-auto lg:justify-start">
              <div className="inline-block h-10">
                <Button padding="xl:px-4" fontSize="text-[.65rem]" color="blue">
                  Get it on Chrome
                </Button>
              </div>
              <a
                href="#"
                className={` text-[.65rem] py-2  px-4  sm:text-[.8rem] inline-block xl:px-4 md:py-3 lg:px-5 text-sm sm:px-9 lg:text-xs text-black  
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
    </div>
  );
};

export default Header;

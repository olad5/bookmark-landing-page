import { CloseIcon } from "./Icons/CloseIcon";
import { LogoIcon } from "./Icons/LogoIcon";

interface IProps {
  handleMenuClick: VoidFunction;
}

const HamMenu: React.FC<IProps> = ({ handleMenuClick }) => {
  return (
    <div className=" flex flex-col  w-full  items-center mx-auto mb-12 bg-neutral-veryDarkBlue  py-8 lg:hidden">
      <nav className="px-4 w-full flex flex-col items-center ">
        <div className="flex w-full  xs:px-0 justify-between items-center   ">
          <div>
            <a
              href="#"
              className="flex lg:inline-block py-3 justify-items-start"
            >
              <LogoIcon fillColor="#fff" />
            </a>
          </div>
          <div className="lg:hidden">
            <CloseIcon onClick={handleMenuClick} />
          </div>
        </div>
        <div className="  border-t-[.5px] border-b-[.5px] items-center flex flex-col border-slate-200  w-full mt-4 mb-4 lg:w-fit lg:border-t-0 lg:px-0 lg:flex-row lg:justify-center">
          <a
            href=""
            className="inline-block uppercase py-3 lg:text-lg w-fit text-white  lg:px-10  "
          >
            features
          </a>
          <hr className=" w-full border-t-1 border-slate-200 mx-6 lg:hidden" />
          <a
            href=""
            className="inline-block py-3 uppercase lg:text-lg w-fit text-white  lg:px-10 hover:text-primary-softRed"
          >
            pricing
          </a>
          <hr className=" w-full border-t-1 border-slate-200 mx-6 lg:hidden" />
          <a
            href=""
            className="inline-block uppercase py-3 lg:text-lg w-fit text-white  lg:px-10 hover:text-primary-softRed"
          >
            contact
          </a>
        </div>
        <a
          href="#"
          className={` text-center text-[.85rem] py-2 w-full  px-14 inline-block md:py-3  text-sm sm:px-9  text-white  rounded bg-none border-4 border-white`}
        >
          LOGIN
        </a>
        <div className=" mb-9 mt-24 justify-between items-center flex w-16 ">
          <a href="#">
            <img
              className="inline-block object-scale-down mr-0 "
              src="images/icon-facebook.svg"
            />
          </a>
          <a href="#">
            <img
              className="inline-block object-scale-down stroke-gray-800 "
              src="images/icon-twitter.svg"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HamMenu;

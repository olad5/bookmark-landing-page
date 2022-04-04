import Button from "./Button";

const Features: React.FC = () => {
  return (
    /* page container */
    <div className="container flex flex-col items-center mx-auto mb-12">
      <h3 className="mb-4 text-3xl font-medium text-center">Features</h3>
      <p className="w-full px-4 lg:w-2/5 m-auto lg:text-xl text-center text-gray-400">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      {/* feature sections */}
      <div className="  border-t-[.5px] border-b-[.5px] items-center flex flex-col  w-4/5 border-slate-200 mx-6 mt-4 mb-12 lg:w-fit lg:border-t-0 lg:px-0 lg:flex-row lg:justify-center">
        <a
          href=""
          className="inline-block py-3 lg:text-lg w-fit text-black border-b-4 border-primary-softRed lg:px-10 focus:border-b-4 focus:border-primary-softRed hover:text-primary-softRed"
        >
          Simple Bookmarking
        </a>
        <hr className=" w-full border-t-1 border-slate-200 mx-6 lg:hidden" />
        <a
          href=""
          className="inline-block py-3 lg:text-lg w-fit text-black focus:border-b-4 focus:border-primary-softRed lg:px-10 hover:text-primary-softRed"
        >
          Speedy Searching
        </a>
        <hr className=" w-full border-t-1 border-slate-200 mx-6 lg:hidden" />
        <a
          href=""
          className="inline-block py-3 lg:text-lg w-fit text-black focus:border-b-4 focus:border-primary-softRed lg:px-10 hover:text-primary-softRed"
        >
          Easy Sharing
        </a>
      </div>

      {/* features hero */}
      <div className="px-3 lg:flex lg:px-6 lg:gap-12 xl:gap-0">
        <img
          src="images/illustration-features-tab-1.svg"
          alt="hero"
          className=" w-full md:w-[97rem] lg:w-[27rem] xl:w-[97rem] md:mr-24 xl:mr-24 lg:mr-2"
        />

        <div className="mt-16 sm:flex sm:flex-col  items-center lg:block">
          <h1 className="text-center mb-2 text-2xl lg:text-4xl lg:text-left font-medium">
            Bookmark in one click
          </h1>
          <p className="text-center sm:m-0  md:text-center  sm:w-3/4 md:w-full  md:py-6 lg:text-left md:text-lg text-gray-400">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          {/* cta buttons */}
          <div className="w-2/4">
            <Button padding="xl:px-4" state="hidden lg:inline-block">
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

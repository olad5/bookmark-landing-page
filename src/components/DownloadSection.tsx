import DownloadCard from "./DownloadCard";

const DownloadSection: React.FC = () => {
  const cards = [
    {
      id: 0,
      title: "Chrome",
      version: "62",
      icon: "/images/logo-chrome.svg",
    },
    {
      id: 1,
      title: "Firefox",
      version: "55",
      icon: "/images/logo-firefox.svg",
    },
    {
      id: 2,
      title: "Opera",
      version: "46",
      icon: "/images/logo-opera.svg",
    },
  ];

  return (
    <div className="container flex  w-11/12 xl:w-7/12 flex-col items-center mx-auto mb-12">
      <h3 className="mb-4 text-2xl font-medium text-center">
        Download the extension
      </h3>
      <p className="w-full px-4 lg:w-3/5 m-auto lg:text-md text-center text-gray-400">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      {/* Download cards */}
      <div className=" w-10/12 lg:w-full lg:flex items-start  mt-4 gap-5 min-h-[25rem] ">
        {cards.map((card) => (
          <DownloadCard key={card.id} card={card}></DownloadCard>
        ))}
      </div>
    </div>
  );
};

export default DownloadSection;

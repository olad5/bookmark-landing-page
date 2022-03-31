const Header: React.FC = () => {

    return (
        /* page container */
        <header className='container px-4 py-8 mx-auto'>
            {/* nav bar */}
            <div className='flex justify-between item-center'>
                <div>
                    <a href="#" className="flex lg:inline-block py-3 justify-items-start"><img src='images/logo-bookmark.svg' /></a>
                </div>
                <div className='hidden lg:block'>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-black uppercase hover:text-primary-softRed">features</a>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-black uppercase hover:text-primary-softRed">pricing</a>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-black uppercase hover:text-primary-softRed">contact</a>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-white uppercase rounded bg-primary-softRed hover:text-primary-softRed hover:ring-2 hover:ring-red-700 hover:bg-white "> login </a>
                </div>
            </div>
            {/* hero section */}
            <div className='flex flex-col lg:flex-row lg:py-20 '>
                {/* cta section */}
                <div className='order-last lg:order-1 lg:mt-16'>
                    <h1 className='text-2xl text-center font-medium lg:text-left lg:text-5xl'>A Simple Bookmark Manager</h1>
                    <p className='lg:w-3/4 py-6 text-center lg:text-left lg:text-lg text-gray-400'>
                        A clean and simple interface to organize your favourite websites. Open a new
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    {/* cta buttons */}
                    <div className="h-11 w-11  md:w-auto md:h-auto sm:flex sm:justify-center sm:w-auto lg:justify-start">
                        <a href="#" className="whitespace-nowrap text-[.8rem] text-center px-3 py-3 md:inline-block md:px-10 md:py-3 md:text-sm text-white rounded bg-primary-softBlue  hover:ring-2 hover:ring-primary-softBlue hover:bg-white hover:text-primary-softBlue ">Get it on Chrome</a>
                        <a href="#" className="whitespace-nowrap text-[.8rem] text-center px-3 py-3 mx-5 md:inline-block md:px-9 md:py-3 md:mx-10 md:text-sm text-black rounded shadow-2xl bg-slate-100  hover:ring-2 hover:ring-slate-900 hover:bg-white hover:text-slate-900">Get it on Firefox</a>
                    </div>
                </div>
                <img src="images/illustration-hero.svg" alt="hero" className=' mt-8 w-full lg:w-[92rem] lg:-mr-24 lg:order-last' />
            </div>

        </header>
    )

}

export default Header;

const Header: React.FC = () => {

    return (
        /* page container */
        <header className='container px-4 py-8 mx-auto'>
            {/* nav bar */}
            <div className='flex justify-between item-center'>
                <div>
                    <a href="#" className="inline-block  py-3   flex justify-items-start"><img src='images/logo-bookmark.svg' /></a>
                </div>
                <div>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-black uppercase hover:text-primary-softRed">features</a>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-black uppercase hover:text-primary-softRed">pricing</a>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-black uppercase hover:text-primary-softRed">contact</a>
                    <a href="#" className="inline-block px-10 py-3 text-sm text-white uppercase rounded bg-primary-softRed hover:text-primary-softRed hover:ring-2 hover:ring-red-700 hover:bg-white "> login </a>
                </div>
            </div>
            {/* hero section */}
            <div className='flex py-20 '>
                {/* cta section */}
                <div className='mt-16'>
                    <h1 className='text-5xl font-medium'>A Simple Bookmark Manager</h1>
                    <p className='py-6 w-3/4 text-lg text-gray-400'>
                        A clean and simple interface to organize your favourite websites. Open a new
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    {/* cta buttons */}
                    <div>
                        <a href="#" className="inline-block px-10 py-3 text-sm text-white rounded bg-primary-softBlue hover:text-primary-softRed hover:ring-2 hover:ring-primary-softBlue hover:bg-white hover:text-primary-softBlue ">Get it on Chrome</a>
                        <a href="#" className="inline-block px-12 mx-10 py-3 text-sm text-black rounded bg-slate-100 shadow-2xl hover:text-primary-softRed hover:ring-2 hover:ring-slate-900 hover:bg-white hover:text-slate-900">Get it on Firefox</a>
                    </div>
                </div>
                <img src="images/illustration-hero.svg" alt="hero" className='w-[92rem] -mr-24' />
            </div>

        </header>
    )

}

export default Header;

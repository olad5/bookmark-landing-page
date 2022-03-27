const Features: React.FC = () => {

    return (
        /* page container */
        <div className='container flex flex-col items-center mx-auto'>

            <h3 className='mb-4 text-3xl font-medium text-center'>Features</h3>
            <p className='w-2/5 m-auto text-xl text-center text-gray-400'>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            {/* feature sections */}
            <div className='flex justify-center w-3/5 mt-4'>
                <a href="" className="inline-block px-10 py-3 text-lg text-black border-b-4 border-primary-softRed focus:border-b-4 focus:border-primary-softRed hover:text-primary-softRed">Simple Bookmarking</a>
                <a href="" className="inline-block px-10 py-3 text-lg text-black focus:border-b-4 focus:border-primary-softRed hover:text-primary-softRed">Speedy Searching</a>
                <a href="" className="inline-block px-10 py-3 text-lg text-black focus:border-b-4 focus:border-primary-softRed hover:text-primary-softRed">Easy Sharing</a>
            </div>
            <hr className='mb-12 w-[36rem] border-t-1 border-slate-200' />

            {/* features hero */}
            <div className='flex'>
                <img src="images/illustration-features-tab-1.svg" alt="hero" className='w-[97rem] mr-24' />

                <div className='mt-16'>
                    <h1 className='text-4xl font-medium'>
                        Bookmark in one click
                    </h1>
                    <p className='w-3/4 py-6 text-lg text-gray-400'>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.
                    </p>
                    {/* cta buttons */}
                    <div>
                        <a href="#" className="inline-block px-10 py-3 text-sm text-white rounded bg-primary-softBlue hover:text-primary-softRed hover:ring-2 hover:ring-primary-softBlue hover:bg-white hover:text-primary-softBlue ">More Info</a>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Features;

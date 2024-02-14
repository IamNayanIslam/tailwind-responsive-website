

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4">
        <div className="md:max-w-screen-lg mx-auto grid md:grid-cols-2 text-center md:text-left md:text-wrap  ">
            <div className=" flex flex-col justify-center mb-4 md:mb-0">
                <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
                Want tips & tricks to optimize your flow?
                </h1>
                <p className="md:text-xl">Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className=" w-full flex flex-col justify-center items-center md:ml-8">
                <div className="w-full flex flex-col md:flex-row md:space-x-1">
                    <input type="email" placeholder="Enter Your Email Address" className="rounded-md py-4 px-4 w-[100%] md:w-[100%] mb-4 md:mb-0"/>
                    <button className="bg-[#00df9a] hover:bg-[#259773] py-4 px-6 rounded-md font-bold cursor-pointer text-black ease-in-out duration-300">
                        Subscribe
                    </button>
                </div>
                <p className="py-2">We care about the protection of your data. Read our <span className="text-[#00df9a] cursor-pointer hover:underline">Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
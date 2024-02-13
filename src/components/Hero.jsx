import { ReactTyped } from "react-typed"


const Hero = () => {
  return (
    <>
        <div className="text-white">
            <div className="max-w-800px mt-[-96px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA  ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                        Fast, flexible financing for
                    </p>
                    <ReactTyped strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500"/>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 py-4 px-4">
                    Monitor your data analytics to increase revenue for BTB, BTC & SASS paltforms.
                </p>
                <button className="bg-[#00df9a] hover:bg-[#259773] py-4 px-6 w-[200px] rounded-md font-bold cursor-pointer text-black ease-in-out duration-300">
                    Get Started
                </button>
            </div>
        </div>
    </>
  )
}

export default Hero
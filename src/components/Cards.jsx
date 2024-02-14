

const Cards = () => {
  return (
    <div className="w-full bg-white px-4">
        <div className="md:max-w-screen-lg mx-auto text-black flex flex-col md:flex-row md:justify-between py-[100px]">
            <div className="shadow-xl flex flex-col items-center p-4 mt-[50px]  md:w-[32%] my-4 rounded-lg hover:scale-105 hover:bg-gray-300 ease-in-out duration-300">
              <img src="./single.png" className="w-[120px] h-[120px] mt-[-4rem]" alt="" />
                <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                <p className="text-center text-4xl font-bold">$149</p>
                <div className="text-center font-medium w-full">
                  <p className="py-2 border-b mt-8">500 GB Storage</p>
                  <p className="py-2 border-b ">1 Granted User</p>
                  <p className="py-2 border-b ">Send up to 2GB</p>
                </div>
                <button className="bg-[#00df9a] hover:bg-[#259773] mt-4 py-3 px-8 rounded-md font-bold cursor-pointer text-black ease-in-out duration-300">Start Trial</button>
            </div>
            <div className="shadow-xl  flex flex-col items-center md:mt-[50px] my-[80px] md:w-[32%] p-4 md:my-4 rounded-lg hover:scale-105 hover:bg-gray-300 ease-in-out duration-300">
            <img src="./double.png" className="w-[120px] h-[120px] mt-[-4rem]" alt="" />
            <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
                <p className="text-center text-4xl font-bold">$299</p>
                <div className="text-center font-medium w-full">
                  <p className="py-2 border-b mt-8">750 GB Storage</p>
                  <p className="py-2 border-b ">2 Granted User</p>
                  <p className="py-2 border-b ">Send up to 3GB</p>
                </div>
                <button className="bg-[#00df9a] hover:bg-[#259773] mt-4 py-3 px-8 rounded-md font-bold cursor-pointer text-black ease-in-out duration-300">Start Trial</button>
            </div>


            <div className="shadow-xl flex flex-col items-center mt-[50px]  md:w-[32%] p-4 my-4 rounded-lg hover:scale-105 hover:bg-gray-300 ease-in-out duration-300">
              <img src="./triple.png" className="w-[120px] h-[120px] mt-[-4rem]" alt="" />
              <h2 className="text-2xl font-bold text-center py-8">Triple Upser</h2>
                  <p className="text-center text-4xl font-bold">$399</p>
                  <div className="text-center font-medium w-full">
                    <p className="py-2 border-b mt-8">1000 GB Storage</p>
                    <p className="py-2 border-b  ">3 Granted User</p>
                    <p className="py-2 border-b  ">Send up to 5GB</p>
                  </div>
                  <button className="bg-[#00df9a] hover:bg-[#259773] mt-4 py-3 px-8 rounded-md font-bold cursor-pointer text-black ease-in-out duration-300">Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
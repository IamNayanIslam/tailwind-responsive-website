

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="md:max-w-screen-lg mx-auto grid md:grid-cols-2 px-6">
            <div className="flex justify-center items-center mb-6 md:mb-0">
            <img src="./laptop.jpg" alt="" className="w-[200px] md:w-[300px]"/>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <p className="text-[#00df9a] font-bold md:text-2xl text-xl">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-3xl text-2xl text-[#000300] font-bold py-3">Manage Data Analytics Centrally</h1>
                <p className="text-[#000300]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, consequuntur nisi quo quae ipsam blanditiis, possimus assumenda necessitatibus error doloribus natus a illum. </p>
                <button className="bg-[#000300] hover:bg-[#00df9a]  w-[200px] py-3 rounded-md mt-4 text-[#00df9a] hover:text-[#000300] ease-in-out duration-300 font-bold">Analytics</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
import { useState } from "react";
import { CgMenu, CgCloseR  } from "react-icons/cg";


const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
        <nav className="max-w-screen-lg mx-auto px-4 text-white flex justify-between items-center  h-24">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">NAYAN.</h1>
            <ul className="md:flex md:space-x-8 hidden uppercase font-bold">
                <li className="cursor-pointer py-2 hover:text-[#00df9a] ease-in-out duration-300 border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-[#00df9a]">Home</li>
                <li className="cursor-pointer py-2 hover:text-[#00df9a] ease-in-out duration-300 border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-[#00df9a]">Company</li>
                <li className="cursor-pointer py-2 hover:text-[#00df9a] ease-in-out duration-300 border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-[#00df9a]">Resources</li>
                <li className="cursor-pointer py-2 hover:text-[#00df9a] ease-in-out duration-300 border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-[#00df9a]">Contact</li>
                <li className="cursor-pointer py-2 hover:text-[#00df9a] ease-in-out duration-300 border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-[#00df9a]">About</li>
            </ul>
            <div className="open-close block md:hidden">
              {
                nav ? <CgCloseR size={20} className="cursor-pointer" onClick={handleNav}/> :  <CgMenu size={20} className="cursor-pointer" onClick={handleNav}/>
              }
            
            
            </div>
            <div className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed md:hidden left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-8">NAYAN.</h1>
            <ul className="pt-12 uppercase p-4">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">Contact</li>
                <li className="p-4">About</li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Header



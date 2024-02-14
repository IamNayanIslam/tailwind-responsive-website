import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full px-2 md:px-4 py-4">
        <div className="md:max-w-screen-lg mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between">
            <div className='flex flex-col space-y-4 md:w-[30%]'>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">NAYAN.</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatem quibusdam veritatis non esse maiores! Amet inventore cupiditate veniam beatae!</p>
                    <div className='flex space-x-5 text-4xl'>
                        <FaDribbbleSquare className='cursor-pointer'/>
                        <FaFacebookSquare className='cursor-pointer'/>
                        <FaGithubSquare className='cursor-pointer'/>
                        <FaInstagram className='cursor-pointer'/>
                        <FaTwitterSquare className='cursor-pointer'/>
                    </div>
            </div>
            <div className="md:w-[60%] flex justify-between">
                <div className="mt-4">
                    <h6 className="text-medium">Solutions</h6>
                    <ul>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Analytics</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Marketing</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Commerce</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Insights</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h6 className="text-medium">Support</h6>
                    <ul>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Pricing</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Documentation</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Guides</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">API Status</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h6 className="text-medium">Company</h6>
                    <ul>
                        <li className="text-sm py-2 cursor-pointer hover:underline">About</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Blog</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Jobs</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Press</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Career</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h6 className="text-medium">Legal</h6>
                    <ul>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Claim</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Policty</li>
                        <li className="text-sm py-2 cursor-pointer hover:underline">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
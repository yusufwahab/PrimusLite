// import AddButton from "./AddButton";
import primusLogo from './assets/logo-primus.png';

export default function Header ({addCameraStream}) {

    return (
        <nav className="bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700">
        <div className="ml-10 mr-10 mx-auto ">
            <div className="flex items-center justify-between h-16 xl:h-20">
                <a className="flex items-center"><img src={primusLogo} alt="primus logo" className="w-10 h-10 xl:w-10 xl:h-10 cursor-pointer" /><span className=" text-2xl font-bold text-white cursor-pointer">Primus<span
                            className="text-cyan-400 font-light font-black cursor-pointer">Lite</span></span></a>
                <div className="flex items-center space-x-1">
                    <a className="focus:bg-gray-700 active:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-1 hover:outline-cyan-800 cursor-pointer bg-gray-700"
                        aria-current="page">Home</a>
                        <a className=" text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-1 hover:outline-cyan-800 cursor-pointer focus:bg-gray-700 active:bg-gray-700"
                        aria-current="page">Dashboard</a>
                    <a
                        className="text-white focus:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-1 hover:outline-cyan-800 cursor-pointer focus:bg-gray-700 active:bg-gray-700">History</a>
                    <a 
                        className="text-white focus:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-1 hover:outline-cyan-800 cursor-pointer focus:bg-gray-700 active:bg-gray-700">Settings</a>
                </div>
            </div>
        </div>
    </nav>
    )
}
// import AddButton from "./AddButton";
import primusLogo from '/LogoPrimus.png';

export default function Header ({addCameraStream}) {

    return (
        <nav className="bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700">
        <div className="ml-10 mr-10 mx-auto ">
            <div className="flex items-center justify-between h-16 xl:h-20">
                <a href="index.html" className="flex items-center"><img src={primusLogo} alt="primus logo" className="w-20 h-10 xl:w-25 xl:h-15" /><span className=" text-2xl font-bold text-white">Primus<span
                            className="text-cyan-400 font-light font-black">Lite</span></span></a>
                <div className="flex items-center space-x-1">
                    <a href="app.html" className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        aria-current="page">Dashboard</a>
                    <a href="history.html"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">History</a>
                    <a href="settings.html"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
                </div>
            </div>
        </div>
    </nav>
    )
}
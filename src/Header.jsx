import { useState } from "react";
import primusLogo from './assets/logo-primus.png';
// import { useNavStore } from "./store/navigation-store";
import { useNavStore } from "./store/navigation-store";


export default function Header({ addCameraStream }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDashboardOpen, setIsDashboarddownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  // const active = useNavStore((s) => s.active);
  // const setActive = useNavStore((s) => s.setActive);
  const {active, setActive} = useNavStore();



  


  function handleDropdownDashboard() {
    setIsDashboarddownOpen(!isDashboardOpen)
  }

  function handledropdownSettings() {
    setIsSettingsOpen(!isSettingsOpen)
  }


  return (
    <header className="bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <nav className="mx-4 sm:mx-6 lg:mx-10">
        <section className="flex items-center justify-between h-16 xl:h-20">
          {/* Logo */}
          <a className="flex items-center">
            <img
              src={primusLogo}
              alt="primus logo"
              className="w-10 h-10 md:w-8 md:h-8 xl:w-10 xl:h-10 cursor-pointer"
            />
            <span className="text-2xl font-bold text-white cursor-pointer ml-2 md:text-[16px] lg:text-[20px]">
              Primus
              <span className="text-cyan-400 font-medium font-black">Lite</span>
            </span>
          </a>

          {/* NOTIFICATION AND ALERT ICON FOR MOBILE */}
          <div className="md:hidden flex items-center rounded-full w-10 h-10 p-1  outline-cyan-400 outline-2">
          <button className=" relative group  inline-block text-white md: px-2 md:py-1 lg:px-3 lg:py-2 rounded-md text-sm font-medium  cursor-pointer focus:bg-gray-700 active:bg-gray-700"><span><i className="fa-regular fa-bell text-yellow-400 text-[20px] md:text-[16px]"></i></span>
            <div className="absolute top-full left  hidden group-hover:block bg-gray-800 text-white whitespace-nowrap z-10"><span>Intrusion Alert</span></div></button>
          </div>


          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 text-cyan-400 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links (Desktop) */}
          <article className="hidden md:flex space-x-1 items-center">
        
          <a key="dashboard" onClick={() => {handleDropdownDashboard(), setActive('dashboard')}} className={`text-white md: px-2 md:py-1 px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 md:text-[10px] xl:text-[16px] relative lg:text-[12px] ${active === 'dashboard'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}><article className="flex items-center gap-2 group"><i className="fa-solid fa-table-columns group-hover:text-cyan-400"></i><span className="group-hover:text-white">Dashboard</span><span><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="xl:w-5 xl:h-4  md:w-4 md:h-3 text-[#FFFFFF]">
            <path d="M6 9l6 6 6-6" />
            </svg></span></article>
                {isDashboardOpen && <article className=" w-[200px] h-[150px] bg-gray-900 rounded-md absolute flex   justify-around flex-col  p-5 mt-10 transition-all duration-300 ease-out">
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-camera group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> Security Cameras</span>
                </h3>
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-video group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]">Heatmap/Analytics</span>
                </h3>
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-chart-line group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> Active Alerts</span>
                </h3>
                </article>}
              </a>
              

              
              <a key="zones" onClick={() => {setActive('zones')}} className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 xl:text-[16px] flex items-center gap-2 group md:text-[10px] xl:text-[16px] lg:text-[12px] ${active === 'zones'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}><span className="group-hover:text-cyan-400"><i className="fa-solid fa-money-bill-trend-up"></i></span> <span className="group-hover:text-white">Zone Management</span></a>
              
              
             
              
              <a   key="history" onClick={() => {setActive('history')}} className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 xl:text-[16px] flex items-center gap-2 group md:text-[10px] xl:text-[16px] lg:text-[12px] ${active === 'history'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}><span className="group-hover:text-cyan-400"><i className="fa-solid fa-clock-rotate-left"></i></span> <span className="group-hover:text-white">History</span></a>

              <a  key="settings" onClick={() => {setActive('settings'), handledropdownSettings()}} className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 md:text-[10px] lg:text-[12px] xl:text-[16px] ${active === 'settings'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}><article className="flex items-center gap-2 group"><i className="fas fa-gear group-hover:text-cyan-400"></i> <span className="group-hover:text-white">Settings</span><span><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="xl:w-5 xl:h-4  md:w-4 md:h-3 text-[#FFFFFF]">
            <path d="M6 9l6 6 6-6" />
            </svg></span></article>
            {isSettingsOpen &&<article className=" w-[220px] h-[150px] bg-gray-900 rounded-md absolute flex   justify-around flex-col  p-5 mt-10 transition-all duration-300 ease-out">
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-camera group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> System settings</span>
                </h3>
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-video group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> Device Management</span>
                </h3>
                </article>}</a>
          </article>


          <div className="hidden md:flex space-x-1 items-center lg:gap-1">
            <a onClick={() => {setActive('profile')}}className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 bg-gray-900 lg:text-[12px] xl:text-[16px] ${active === 'profile'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}><span><i className="fa-regular fa-user text-cyan-400"></i></span> <span className="hidden lg:inline">Profile</span></a>
            <a onClick={() => {setActive('notification')}}className={`text-white md: px-2 md:py-1 lg:px-3 lg:py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 bg-gray-900 lg:text-[12px] xl:text-[16px] ${active === 'notification'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}><span><i className="fa-regular fa-envelope text-cyan-400 "></i></span> <span className="hidden lg:inline">Notification</span></a>

            <a onClick={() => {setActive('alert')}}className={`relative group  inline-block text-white md: px-2 md:py-1 lg:px-3 lg:py-2 rounded-md text-sm font-medium hover:outline-1 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700  ${active === 'alert'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}><span><i className="fa-regular fa-bell text-yellow-400 text-[20px] md:text-[16px]"></i></span>
            <div className="absolute top-full left 1/2 -translate-x-1/2  hidden group-hover:block bg-gray-800 text-white whitespace-nowrap z-10"><span>Intrusion Alert</span></div></a>

            <a onClick={() => {setActive('logout')}} className={`text-white md: px-2 md:py-1 lg:px-3 lg:py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 bg-cyan-700 md:text-[10px] xl:text-[16px]  ${active === 'logout'? 'bg-gray-700 outline-2 outline-cyan-400' : 'hover:outline-2 hover:outline-cyan-400'}`}>Logout</a>
            
          </div>
        </section>

        {/* Nav Links (Mobile dropdown) */}
        {menuOpen && (
          <div>
          <div className="flex flex-col md:hidden mt-2 space-y-1 pb-4">
            <a className="text-white md: px-2 md:py-1 px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 md:text-[10px] xl:text-[16px] relative lg:text-[12px]" onClick={handleDropdownDashboard}><article className="flex items-center gap-2 group"><i className="fa-solid fa-table-columns group-hover:text-cyan-400"></i><span className="group-hover:text-white">Dashboard</span><i class="fa-solid fa-caret-down"></i></article>
                {isDashboardOpen && <article className=" w-[200px] h-[150px] bg-gray-900 rounded-md absolute flex   justify-around flex-col  p-5 mt-10 transition-all duration-300 ease-out">
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-camera group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> Security Cameras</span>
                </h3>
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-video group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]">Heatmap/Analytics</span>
                </h3>
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-chart-line group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> Active Alerts</span>
                </h3>
                </article>}
              </a>
              

              
              <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 xl:text-[16px] flex items-center gap-2 group md:text-[10px] xl:text-[16px] lg:text-[12px]"><span className="group-hover:text-cyan-400"><i className="fa-solid fa-money-bill-trend-up"></i></span> <span className="group-hover:text-white">Zone Management</span></a>
              
              
             
              
              <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 xl:text-[16px] flex items-center gap-2 group md:text-[10px] xl:text-[16px] lg:text-[12px]"><span className="group-hover:text-cyan-400"><i className="fa-solid fa-clock-rotate-left"></i></span> <span className="group-hover:text-white">History</span></a>
              <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 md:text-[10px] lg:text-[12px] xl:text-[16px]" onClick={handledropdownSettings}><article className="flex items-center gap-2 group"><i class="fas fa-gear group-hover:text-cyan-400"></i> <span className="group-hover:text-white">Settings</span><span><i class="fa-solid fa-caret-down"></i></span></article>
            {isSettingsOpen &&<article className=" w-[220px] h-[150px] bg-gray-900 rounded-md absolute flex   justify-around flex-col  p-5 mt-10 transition-all duration-300 ease-out">
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-camera group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> System settings</span>
                </h3>
                <h3 className="group flex items-center gap-2">
                <span><i className="fa-solid fa-video group-hover:text-cyan-400"></i></span><span className="text-gray-400 group-hover:text-[#FFFFFF]"> Device Management</span>
                </h3>
                </article>}</a>
                <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:outline-2 hover:outline-cyan-400 cursor-pointer focus:bg-gray-700 active:bg-gray-700 xl:text-[16px] flex items-center gap-2 group md:text-[10px] xl:text-[16px] lg:text-[12px] bg-cyan-700 w-40 mt-5"> <span className="group-hover:text-white">Logout</span></a>
            </div>
          
        
        </div>)
      }</nav>
    </header>
  );
}


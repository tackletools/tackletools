// import React from 'react'
// import { Menus } from "../../utils/utils";
// import Logo from "../../assets/logo-dark.png";
// import DesktopMenu from "./DesktopMenu";
// import MobMenu from "./MobMenu";


// const Navbar = () => {
//   return (
//     <div>
//       <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181a92] z-50 shadow-[rgba(255,255,255,0.1)_1px_1px_1px_0px]">
//         <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
//           <div className="flex-center gap-x-3 z-[999] relative">
//             <img src={Logo} alt="" className="size-10 -mr-3" />
//             <h3 className="text-lg font-bold tracking-widest"><a href='/'>TACKLE<span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">TOOLS</span></a></h3>
//           </div>

//           <ul className="gap-x-1 lg:flex-center hidden">
//             {Menus.map((menu) => (
//               <DesktopMenu menu={menu} key={menu.name} />
//             ))}
//           </ul>
//           <div className="flex-center gap-x-5">
//             <button
//               aria-label="sign-in"
//               className="bg-white/5 z-[999] relative px-3 py-1.5 shadow-[rgba(255,255,255,0.1)_2px_1px_2px_2px] rounded-xl flex-center"
//             >
//               <a href="https://amit.tackletools.tech" className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text font-semibold">Portfolio</a>
//             </button>
//             <div className="lg:hidden">
//               <MobMenu Menus={Menus} />
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { Menus } from "../../utils/utils";
import Logo from "../../assets/logo-dark.png";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";


const Navbar = () => {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181a92] z-50 shadow-[rgba(255,255,255,0.1)_1px_1px_1px_0px]">
        <nav className="px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto"> {/* Changed flex-center-between to flex items-center justify-between */}
          <div className="flex items-center gap-x-3 z-[999] relative"> {/* Changed flex-center to flex items-center */}
            <img src={Logo} alt="" className="size-10 -mr-3" />
            <h3 className="text-lg font-bold tracking-widest"><a href='/'>TACKLE<span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">TOOLS</span></a></h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex items-center gap-x-5"> {/* Changed flex-center to flex items-center */}
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow-[rgba(255,255,255,0.1)_2px_1px_2px_2px] rounded-xl flex-center"
            >
              <a href="https://amit.tackletools.tech" className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text font-semibold">Portfolio</a>
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar

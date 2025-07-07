import { Menus } from "../../utils/utils";
import Logo from "../../assets/logo-dark.png";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Phone, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181a92] z-50 shadow-[rgba(255,255,255,0.1)_1px_1px_1px_0px]">
        <nav className="px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="" className="size-10 -mr-3" />
            <h3 className="font-bold tracking-widest sm:text-2xl"><a href='/'>TACKLE<span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">TOOLS</span></a></h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          
          <div className="flex items-center gap-x-2">
            {/* Phone Icon */}
            <a 
              href="tel:+7289095248" 
              aria-label="Call us"
              className="z-[999] relative p-2.5 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5 text-green-500" />
            </a>
            
            {/* Email Icon */}
            <a 
              href="mailto:tackletools.tech@gmail.com" 
              aria-label="Email us"
              className="z-[999] relative p-2.5 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Mail className="w-5 h-5 text-blue-500" />
            </a>
            
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
import { Menu, X } from "lucide-react";
import { useState } from "react";
export const Header = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)

  const handleToggleMenuMobile = () => {
    setIsMenuMobileOpen(prevState => !prevState)
  }

  const handleLinkClick = () => {
    setIsMenuMobileOpen(false);
  };

  return (
    <header className="bg-[#fffdfb] h-20">
      <nav className="wrapper flex justify-between items-center h-full scrollOne">

        <a
          className="flex items-center gap-6 text-xl font-medium"
          href="/"
        >
          <img
            src="/logo.png"
            alt="A logo portraying the letter M"
            className="h-8 md:h-6"
          />
          <span>|</span> Midttveit
        </a>

        <div className="hidden md:flex items-center gap-8 interval">
          <a
            className="text-lg font-medium hover:text-gray-700 transition-all nav-link"
            href="#about"
          >
            About
          </a>
          <a
            className="text-lg font-medium hover:text-gray-700 transition-all nav-link"
            href="#portfolio"
          >
            Projects
          </a>
          <a
            className="text-lg font-medium hover:text-gray-700 transition-all nav-link"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <div className="md:hidden flex items-center">
          {isMenuMobileOpen ? <X cursor={"pointer"} onClick={handleToggleMenuMobile} /> : <Menu cursor={"pointer"} onClick={handleToggleMenuMobile} />}
        </div>

        <div className="absolute top-20 left-0 w-full bg-[#fffdfb] border-t border-b border-gray-300 flex flex-col items-center gap-3 p-4 z-50 transition-all duration-300" style={{
          top: isMenuMobileOpen ? "5rem" : '-50rem'
        }}>
          <a
            className="text-lg font-medium w-full text-center py-3 hover:bg-gray-100"
            href="#about"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            className="text-lg font-medium w-full text-center py-3 hover:bg-gray-100"
            href="#portfolio"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a
            className="text-lg font-medium w-full text-center py-3 hover:bg-gray-100"
            href="#contact"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

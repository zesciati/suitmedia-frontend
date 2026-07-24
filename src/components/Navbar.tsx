import { useState, useEffect, useRef, type FC } from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Ideas", path: "/ideas" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar: FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [isTransparent, setIsTransparent] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const controlNavbar = (): void => {
      const currentScrollY: number = window.scrollY;

      if (currentScrollY <= 0) {
        // di paling atas, tampilkan solid
        setShowNav(true);
        setIsTransparent(false);
      } else if (currentScrollY > lastScrollY.current) {
        // scroll ke bawah -> sembunyikan
        setShowNav(false);
      } else {
        // scroll ke atas -> tampilkan dengan transparan
        setShowNav(true);
        setIsTransparent(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav
      className={`
        flex bg-[#F76641] items-center justify-around max-h-26
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${isTransparent ? "bg-[#F76641]/70 backdrop-blur-sm" : "bg-[#F76641]"}
      `}
    >
      <img src="/images/icon-suitmedia.png" alt="" />
      <div className="flex gap-5 text-white text-lg">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              pb-1 transition-colors duration-200
              hover:border-b-2 active:border-b-2
              ${isActive ? "border-b-2 font-semibold" : ""}
            `}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
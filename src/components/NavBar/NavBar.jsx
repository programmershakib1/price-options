import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
            open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
        }
        
      </div>
      <ul className={`${open ? "top-16" : "-top-60"} duration-1000 md:flex absolute md:static bg-yellow-200 px-6`}>
        {routes.map((route, idx) => (
          <Link key={idx} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

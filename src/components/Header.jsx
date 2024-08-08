import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from "/logo_aluraflix.png";

function Header() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  const routes = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/nuevo-video",
      name: "Nuevo video",
    },
  ];

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header className="relative p-6 bg-white border-b">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo_aluraflix" />
        </Link>

        <div className="sm:hidden text-2xl cursor-pointer" onClick={handleShow}>
          {show ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <nav
          className={`sm:static top-24 sm:w-auto sm:h-auto absolute w-full sm:border-y-0 border-y transition-transform left-0 sm:translate-x-0 ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="sm:flex-row sm:bg-inherit sm:p-0 flex flex-col gap-5 p-6 text-xl bg-white">
            {routes.map((r, index) => (
              <li key={index}>
                <Link
                  to={r.route}
                  className={`hover:text-sky-600 transition-colors ${
                    r.route === pathname && "text-sky-600"
                  }`}
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

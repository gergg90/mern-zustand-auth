import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="col-span-2 flex items-center justify-center">
      <div className="bottom-0 fixed">
        <div className="flex justify-center items-center w-full text-xs mb-8 ">
          <NavLink to="/">
            <span className="bg-primary text-white rounded-md p-2">
              <span className={` antialiased font-bold`}>APP </span>
              <span>| Auth</span>
              <span> © {new Date().getFullYear()}</span>
            </span>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

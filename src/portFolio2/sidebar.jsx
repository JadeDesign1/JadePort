import { Link, useLocation } from "react-router-dom";
import { Links } from "./data";
import "../App.css";
import { HiLightBulb, HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <aside className="bg-dark px-2 pt-6">
      {/* Sidebar content */}
      <section className="h-full px-6 w-full flex flex-col ">
        <article className="flex flex-col justify-center items-center gap-4">
          <img
            src="fm.jpg"
            alt=""
            className="h-32 w-32 rounded-2xl border-4 border-primary"
          />
          <h3 className="text-center text-primary text-[24px] font-bold ">
            Oluwafemi Joseph
          </h3>
        </article>

        <article>
          <ul className="mt-8 flex flex-col  gap-2">
            {Links.map((navLink, i) => {
              return (
                <Link
                  key={i}
                  to={`${navLink.heading}`}
                  className={`text-[24px] hover:bg-plight pb-2 ${
                    path === `/${navLink.heading}` ? "active" : ""
                  } px-4 pt-4 font-semibold flex flex-row items-center gap-4 tracking-wider cursor-pointer hover:text-pdark group capitalize duration-200 text-light`}
                >
                  {navLink.icon && (
                    <span
                      className={` ${
                        path === `/${navLink.heading} `
                          ? "active"
                          : "text-[#208383]"
                      }  group-hover:text-pdark text-[30px]`}
                    >
                      <navLink.icon />
                    </span>
                  )}
                  <span>{navLink.heading}</span>
                </Link>
              );
            })}
          </ul>
        </article>
      </section>
    </aside>
  );
};

export default Sidebar;

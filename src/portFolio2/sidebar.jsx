import { Link, useLocation } from "react-router-dom";
import { Links } from "./data";
import "../App.css";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <aside className="px-2 pt-6 fixed">
      {/* Sidebar content */}
      <section className="h-full px-6 w-full flex flex-col ">
        <article className="flex flex-col justify-center items-center gap-4">
          <img
            src="fm.jpg"
            alt=""
            className="h-32 w-32 rounded-2xl border-4 border-[var(--primary)]"
          />
          <h3 className="text-center text-[var(--primary)] lg:text-[24px] text-[20px] font-bold ">
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
                  className={`navContainer group ${
                    path === `/${navLink.heading}` ? "active" : ""
                  } `}
                >
                  {navLink.icon && (
                    <span
                      className={` ${
                        path === `/${navLink.heading} ` ? "active" : ""
                      }  text-[30px]`}
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

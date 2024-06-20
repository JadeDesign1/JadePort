import { Links } from "./data";

const Sidebar = () => {
  return (
    <aside className="bg-black px-2 w-[200px] pt-6 md:block md:fixed hidden h-[100vh]">
      {/* Sidebar content */}
      <section className="h-full items-center w-full flex flex-col ">
        <article className="flex flex-col gap-6">
          <img src="demola.jpg" alt="" className="h-24 w-24 rounded-full" />
          <h3 className="text-center text-primary font-bold ">Micheal A</h3>
        </article>

        <article>
          <ul className="mt-8 flex flex-col gap-10">
            {Links.map((Link, i) => {
              return (
                <li key={i}>
                  <a
                    className="text-[24px] font-semibold flex flex-row items-center gap-4 tracking-wider cursor-pointer hover:text-primary capitalize duration-200 text-slate-400"
                    href={Link.heading === "home" ? `/` : `#${Link.heading}`}
                  >
                    {Link.icon && (
                      <span className="text-primary">
                        <Link.icon />
                      </span>
                    )}
                    <span>{Link.heading}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </aside>
  );
};

export default Sidebar;

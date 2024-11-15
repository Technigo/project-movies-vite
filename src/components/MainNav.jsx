import SidebarNavLink from "./ui/SidebarNavLink";
import HomeIcon from "../assets/icons/cottage.svg?react";
import PopularIcon from "../assets/icons/chart_data.svg?react";
import UpcomingIcon from "../assets/icons/chair.svg?react";
import NowPlayingIcon from "../assets/icons/autoplay.svg?react";

const navItems = [
  {
    slug: "/",
    icon: HomeIcon,
    label: "Home",
  },
  {
    slug: "/movies/popular",
    icon: PopularIcon,
    label: "Popular movies",
  },
  {
    slug: "/movies/upcoming",
    icon: UpcomingIcon,
    label: "Upcoming movies",
  },
  {
    slug: "/movies/now-playing",
    icon: NowPlayingIcon,
    label: "Now playing",
  },
];

const MainNav = ({ isSidebarOpen, onClick }) => {
  return (
    <nav
      id="main-nav"
      aria-label="Primary menu"
      aria-hidden={!isSidebarOpen}
      className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ${isSidebarOpen ? "grid-rows-1fr" : "grid-rows-0fr"} lg:grid-rows-1fr`}
    >
      <ul className="space-y-2 overflow-hidden">
        {navItems.map((item, index) => (
          <li key={item.slug} className={index === 0 ? "mt-2" : ""}>
            <SidebarNavLink
              slug={item.slug}
              onClick={onClick}
              tabIndex={isSidebarOpen ? -1 : 0}
            >
              <item.icon className="mr-4" /> {item.label}
            </SidebarNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;

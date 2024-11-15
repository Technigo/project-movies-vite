import SidebarNavLink from "./ui/SidebarNavLink";
import HomeIcon from "../assets/icons/cottage.svg?react";
import PopularIcon from "../assets/icons/chart_data.svg?react";
import UpcomingIcon from "../assets/icons/chair.svg?react";
import NowPlayingIcon from "../assets/icons/autoplay.svg?react";

const MainNav = ({ isSidebarOpen, onClick }) => {
  return (
    <nav
      id="main-nav"
      aria-label="Primary menu"
      aria-hidden={!isSidebarOpen}
      className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ${isSidebarOpen ? "grid-rows-1fr" : "grid-rows-0fr"} lg:grid-rows-1fr`}
    >
      <ul className="space-y-2 overflow-hidden">
        <li className="mt-2">
          <SidebarNavLink slug="/" onClick={onClick}>
            <HomeIcon className="mr-4" /> Home
          </SidebarNavLink>
        </li>
        <li>
          <SidebarNavLink slug="/movies/popular" onClick={onClick}>
            <PopularIcon className="mr-4" /> Popular movies
          </SidebarNavLink>
        </li>
        <li>
          <SidebarNavLink slug="/movies/upcoming" onClick={onClick}>
            <UpcomingIcon className="mr-4" /> Upcoming movies
          </SidebarNavLink>
        </li>
        <li>
          <SidebarNavLink slug="/movies/now-playing" onClick={onClick}>
            <NowPlayingIcon className="mr-4" /> Now playing
          </SidebarNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

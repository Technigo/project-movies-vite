import { Link } from "react-router-dom";
import SidebarNavLink from "./ui/SidebarNavLink";
import Logo from "../assets/MovieHut-logo.svg?react";
import HomeIcon from "../assets/icons/cottage.svg?react";
import PopularIcon from "../assets/icons/chart_data.svg?react";
import UpcomingIcon from "../assets/icons/chair.svg?react";
import NowPlayingIcon from "../assets/icons/autoplay.svg?react";

const Sidebar = ({ onClick, className }) => {
  return (
    <aside className={`rounded-lg bg-white p-6 ${className}`}>
      <div className="flex justify-center p-6">
        <Link to="/">
          <Logo />
          <span className="sr-only">MovieHut</span>
        </Link>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
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
    </aside>
  );
};

export default Sidebar;

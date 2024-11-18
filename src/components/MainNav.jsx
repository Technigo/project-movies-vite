import SidebarNavLink from "./ui/SidebarNavLink";
import HomeIcon from "../assets/icons/cottage.svg?react";
import PopularIcon from "../assets/icons/chart_data.svg?react";
import UpcomingIcon from "../assets/icons/chair.svg?react";
import NowPlayingIcon from "../assets/icons/autoplay.svg?react";
import SearchBar from "./SearchBar";

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

const MainNav = ({
  toggleSidebar,
  isSidebarOpen,
  onClick,
  handleSearch,
  searchQuery,
}) => {
  const onNavLinkClick = () => {
    if (onClick) {
      onClick();
    }
    if (toggleSidebar) {
      toggleSidebar();
    }
  };

  const onSearch = (query) => {
    if (handleSearch) {
      handleSearch(query);
    }
    if (toggleSidebar) {
      toggleSidebar();
    }
  };

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
              onClick={onNavLinkClick}
              tabIndex={isSidebarOpen ? -1 : 0}
            >
              <item.icon className="mr-4" /> {item.label}
            </SidebarNavLink>
          </li>
        ))}
        <li className="pb-2 lg:hidden">
          <div className="rounded-full border border-green-300 bg-green-100 has-[:focus]:shadow has-[:focus]:outline-none has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-green-950">
            <SearchBar onSearch={onSearch} value={searchQuery} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

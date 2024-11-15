import HamburgerIcon from "../assets/icons/hamburger-icon.svg?react";

const HamburgerMenuButton = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <button
      className={`hamburger-button rounded-12 h-10 px-3 lg:hidden ${isSidebarOpen ? "is-open" : ""}`}
      onClick={toggleSidebar}
      aria-label={`${isSidebarOpen ? "Close menu" : "Open menu"}`}
      aria-expanded={isSidebarOpen}
      aria-controls="main-nav"
    >
      <HamburgerIcon />
    </button>
  );
};

export default HamburgerMenuButton;

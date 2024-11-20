import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SidebarNavLink = ({ slug = "/", onClick, children }) => {
  return (
    <NavLink
      to={slug}
      className={({ isActive }) =>
        `flex w-full rounded px-4 py-3 text-green-950 hover:bg-green-100 ${isActive ? "bg-green-100" : "bg-transparent"}`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

SidebarNavLink.propTypes = {
  slug: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default SidebarNavLink;

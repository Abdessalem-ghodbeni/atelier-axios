import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
    return (
        <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink
                to="/events"
                className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                }
            >
                Profile
            </NavLink>
        </nav>
    );
};

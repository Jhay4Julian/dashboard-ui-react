import { FiBarChart2, FiDollarSign, FiHome, FiLink, FiPaperclip, FiSettings, FiShoppingCart, FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const RouteSelect = () => {

    const links = [
        { path: '/dashboard', title: 'Dashboard', icon: <FiHome /> },
        { path: '/analytics', title: 'Analytics', icon: <FiBarChart2 /> },
        { path: '/orders', title: 'Orders', icon: <FiShoppingCart /> },
        { path: '/invoices', title: 'Invoices', icon: <FiPaperclip /> },
        { path: '/settings', title: 'Settings', icon: <FiSettings /> },
    ]
    // return (
    //     <div className="space-y-1">
    //         <Route Icon={FiHome} active={true} title="Dashboard" />
    //         <Route Icon={FiUsers} active={false} title="Team" />
    //         <Route Icon={FiPaperclip} active={false} title="Invoices" />
    //         <Route Icon={FiLink} active={false} title="Integrations" />
    //         <Route Icon={FiDollarSign} active={false} title="Finance" />
    //     </div>   
    // )

    return (
        <ul className="space-y-1">
            {links.map((link) => (
                <li key={link.path}>
                    <NavLink
                        to={link.path}
                        className={({ isActive }) => `flex items-center justify-start gap-2 text-sm w-full rounded px-2 py-1.5 transition-[box-shadow_background-color_color] cursor-pointer ${isActive
                            ? "bg-white text-stone-950 shadow"
                            : "hover:bg-stone-200 bg-transparent text-stone-600 shadow-none"
                            }`}
                    >
                        {link.icon} {link.title}
                    </NavLink>
                </li>
            )
            )}
        </ul>
    )
}

export default RouteSelect
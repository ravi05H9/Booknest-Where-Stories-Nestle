import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { HiMiniBars3CenterLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import avatarImg from "../assets/avatar.png";
import { useAuth } from "../context/AuthContext";

const navigation = [
    { name: "Dashboard", href: "/user-dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const { currentUser, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    const token = localStorage.getItem("token");

    return (
        <header className="max-w-screen-2xl mx-auto px-6 py-4 shadow-md bg-white">
            <nav className="flex justify-between items-center">
                {/* Left Side - Menu Icon */}
                <div className="flex items-center gap-6">
                    <Link to="/">
                        <HiMiniBars3CenterLeft className="size-7 text-gray-700 hover:text-primary transition-all" />
                    </Link>
                </div>

                {/* Center - BookNest Title */}
                <div className="flex flex-col items-center w-full max-w-lg">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text tracking-wide mb-2">
                        <Link to="/">BookNest</Link>
                    </div>
                </div>

                {/* Right Side - User Options */}
                <div className="relative flex items-center space-x-4">
                    {/* User Profile */}
                    <div>
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img
                                        src={avatarImg}
                                        alt="User Avatar"
                                        className="size-8 rounded-full border-2 border-blue-500 hover:shadow-md transition-all"
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                                        <ul className="py-2">
                                            {navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link
                                                        to={item.href}
                                                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : token ? (
                            <Link to="/dashboard" className="border-b-2 border-primary text-primary">
                                Dashboard
                            </Link>
                        ) : (
                            <Link to="/login">
                                <HiOutlineUser className="size-7 text-gray-700 hover:text-primary transition" />
                            </Link>
                        )}
                    </div>

                    {/* Cart */}
                    <Link to="/cart" className="bg-primary text-white p-2 flex items-center rounded-lg shadow-md hover:bg-blue-600 transition">
                        <HiOutlineShoppingCart className="size-6" />
                        {cartItems.length > 0 ? (
                            <span className="text-sm font-semibold ml-1">{cartItems.length}</span>
                        ) : (
                            <span className="text-sm font-semibold ml-1">0</span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

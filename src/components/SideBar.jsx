import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaChevronLeft,
  FaBars,
  FaGlobe,
  FaCoins,
  FaChartBar,
  FaTerminal,
  FaCog,
  FaExchangeAlt,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation to track current route
import { IoCubeOutline } from "react-icons/io5";

// Define pulse animation variant
const pulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
  },
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Menu Item Component
const MenuItem = ({
  icon: Icon,
  text,
  subItems,
  isOpen,
  activeItem,
  setActiveItem,
  link,
}) => {
  const location = useLocation(); // Get the current URL path
  const hasSubItems = subItems && subItems.length > 0;
  const [submenuVisible, setSubmenuVisible] = useState(false);
  let hideTimeout = null;

  // Check if the current route matches the item or any subitem
  const isSubItemActive =
    hasSubItems &&
    subItems.some((subItem) => location.pathname === subItem.link);
  const isActive = location.pathname === link || isSubItemActive; // Active if main item or any subitem is active

  const handleMouseEnter = () => {
    if (hasSubItems) {
      clearTimeout(hideTimeout); // Clear any scheduled hiding of the submenu
      setActiveItem(text);
      setSubmenuVisible(true); // Show the submenu when hovering
    }
  };

  const handleMouseLeave = () => {
    if (hasSubItems) {
      hideTimeout = setTimeout(() => {
        setSubmenuVisible(false); // Hide the submenu after a delay
        setActiveItem(null);
      }, 500); // 300ms delay before hiding submenu
    }
  };

  const handleSubMenuMouseEnter = () => {
    clearTimeout(hideTimeout); // Prevent the submenu from hiding when hovering over it
    setSubmenuVisible(true);
  };

  const handleSubMenuMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setSubmenuVisible(false); // Hide the submenu after a delay
      setActiveItem(null);
    }, 300);
  };

  return (
    <li
      className={`mb-2 relative group ${
        isActive ? "bg-[#1b1357]" : ""
      } rounded-lg`} // Apply active class for active item/subitem
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={link}
        className={`flex items-center w-full px-4 py-2 rounded-lg hover:text-[#FF9700] ${
          isActive ? "bg-[#1b1357] " : ""
        }`} // Apply active class only, no hover background color
      >
        {/* Pulse animation on the icon */}
        <motion.div
          className="mr-3"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        >
          <Icon size={20} style={{ minWidth: "20px" }} />
        </motion.div>
        {/* Show text only when sidebar is open */}
        {isOpen && <span>{text}</span>}
        {isOpen && hasSubItems && (
          <FaChevronRight className="ml-auto" size={16} />
        )}
      </Link>

      {/* Sub-menu for open sidebar */}
      {isOpen && submenuVisible && hasSubItems && (
        <motion.ul
          className="z-10 absolute top-0 left-40 bg-white dark:bg-[#0e0b29] text-black dark:text-white shadow-lg rounded-md p-2 ml-2"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ minWidth: "250px" }}
          onMouseEnter={handleSubMenuMouseEnter}
          onMouseLeave={handleSubMenuMouseLeave}
        >
          {subItems.map((subItem) => (
            <li
              key={subItem.text}
              className={`py-1 ${
                location.pathname === subItem.link
                  ? "dark:bg-[#161357] bg-[#] rounded-lg"
                  : ""
              }`} // Highlight subitems when active
            >
              <Link
                to={subItem.link}
                className="flex items-center w-full px-4 py-2 text-gray-300 hover:text-[#FF9700] "
              >
                <subItem.icon className="mr-3" size={16} />
                <span>{subItem.text}</span>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}

      {/* Sub-menu modal on hover for closed sidebar */}
      {!isOpen && submenuVisible && hasSubItems && (
        <motion.ul
          className="absolute top-0 left-full bg-gray-800 dark:bg-[#0E0B29] text-gray-300 dark:text-gray-300 shadow-lg rounded-md p-2 ml-2"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ minWidth: "200px" }}
          onMouseEnter={handleSubMenuMouseEnter}
          onMouseLeave={handleSubMenuMouseLeave}
        >
          {subItems.map((subItem) => (
            <li
              key={subItem.text}
              className={`py-1 ${
                location.pathname === subItem.link
                  ? "bg-[#1b1357] rounded-lg"
                  : ""
              }`} // Highlight subitems when active
            >
              <Link
                to={subItem.link}
                className="flex items-center w-full px-4 py-2 text-white hover:text-[#FF9700] rounded-lg"
              >
                <subItem.icon className="mr-3" size={16} />
                <span>{subItem.text}</span>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );
};
const Sidebar = ({ isOpen, onToggle }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const menuItems = [
    {
      icon: FaGlobe,
      text: "Blockchain",
      subItems: [
        {
          icon: FaExchangeAlt,
          text: "Transactions",
          link: "/txs",
        },
        { icon: IoCubeOutline, text: "Blocks", link: "/blocks" },
        { icon: FaUsers, text: "Top accounts", link: "/accounts" },
        {
          icon: FaCheckCircle,
          text: "Verified contracts",
          link: "/verified-contracts",
        },
      ],
    },
    { icon: FaCoins, text: "Tokens", link: "/tokens" },
    { icon: FaChartBar, text: "Charts & stats", link: "/stats" },
    {
      icon: FaTerminal,
      text: "API",
      subItems: [
        { icon: FaGlobe, text: "REST API", link: "/api-docs" },
        { icon: FaTerminal, text: "GraphQL", link: "/api/graphql" },
        { icon: FaCog, text: "RPC API", link: "/api/rpc" },
        { icon: FaCog, text: "Eth RPC API", link: "/api/eth-rpc" },
      ],
    },
    {
      icon: FaCog,
      text: "Other",
      subItems: [
        {
          icon: FaCheckCircle,
          text: "Verified Contracts",
          link: "/contract-verification",
        },
        { icon: FaChartBar, text: "Gas Tracker", link: "/gas-tracker" },
      ],
    },
  ];

  return (
    <div className="flex h-screen z-5 relative group">
      {/* Desktop Sidebar */}
      <motion.nav
        className={`fixed inset-y-0 left-0 bg-white dark:bg-[#070136] border-r border-gray-800 shadow-lg ease-linear ${
          isOpen ? "w-60" : "w-18"
        } hidden md:block`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, width: isOpen ? 200 : 80 }}
        transition={{ ease: "linear" }}
        exit={{ opacity: 0 }}
      >
        {/* Sidebar open close button */}
        <button
          className="absolute top-1/4 -right-2.5  dark:bg-[#070136] hover:text-[#FF9700] rounded-full p-1"
          onClick={onToggle}
          style={{ transform: "translateY(-50%)", cursor: "pointer" }}
        >
          {isOpen ? <FaChevronLeft size={10} /> : <FaChevronRight size={10} />}
        </button>
        <div className="p-4">
          {/* Intelchain logo with 50px margin */}
          <Link to="/">
            {isOpen ? (
              <img
                src="../src/assets/images/intel-logo.png"
                alt="Intelchain Logo"
                className="h-8 mb-8"
                style={{
                  marginTop: "100px",
                  width: "150px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src="../src/assets/images/intel-close-logo.png"
                alt="Intelchain Logo Icon"
                className="h-8 mb-8"
                style={{
                  marginTop: "100px",
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
            )}
          </Link>

          {/* Sidebar Menu Items */}
          <ul>
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                subItems={item.subItems}
                isOpen={isOpen}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                link={item.link}
              />
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 dark:bg-[#070136] rounded-full p-2 shadow-md"
        onClick={toggleMobileMenu}
      >
        <FaBars size={24} />
      </button>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.nav
            className="fixed top-0 left-0 h-full bg-gray-800 dark:bg-gray-900 shadow-lg w-80 z-50"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween" }}
          >
            <div className="p-2">
              <img
                src="../src/assets/images/intel-logo.png"
                alt="Harmony Logo"
                className="h-8 mb-8"
              />
              <ul>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    icon={item.icon}
                    text={item.text}
                    subItems= {item.subItems}
                    isOpen={true}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    link={item.link}
                  />
                ))}
              </ul>
            </div>
          </motion.nav>
        </motion.div>
      )}

      {/* Main Content */}
    </div>
  );
};

export default Sidebar;

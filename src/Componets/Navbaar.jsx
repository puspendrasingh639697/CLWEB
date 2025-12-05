
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaChevronDown, 
  FaUser, 
  FaUsers,
  FaAngleRight
} from 'react-icons/fa';
import logo from "../assets/logo.png";

export default function Navbaar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isProfileMobileOpen, setIsProfileMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
        setIsProfileMobileOpen(false);
      }
    };

    // Current route ke hisab se active tab set karo
    const path = location.pathname;
    if (path === '/') setActiveTab('home');
    else if (path === '/servicesCards') setActiveTab('services');
    else if (path === '/about') setActiveTab('about');
    else if (path === '/team') setActiveTab('team');
    else if (path === '/technology') setActiveTab('technology');
    else if (path === '/contact') setActiveTab('contact');
    else if (path === '/portfolio') setActiveTab('portfolio');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { 
      id: 'profile', 
      label: 'Company', 
      path: '/about',
      submenu: [
        { id: 'about', label: 'About Page', path: '/about', icon: <FaUser /> },
        { id: 'team', label: 'Our Team Page', path: '/team', icon: <FaUsers /> }
      ]
    },
    { id: 'services', label: 'Services', path: '/servicesCards' },
    { id: 'technology', label: 'Technology', path: '/technology' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const handleMenuItemClick = (item) => {
    if (item.submenu) {
      // Agar submenu hai to pehla option open karo (About Page)
      navigate(item.submenu[0].path);
      setActiveTab(item.submenu[0].id);
    } else {
      setActiveTab(item.id);
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
    setIsProfileMobileOpen(false);
  };

  const handleSubmenuClick = (subItem, parentItem) => {
    setActiveTab(subItem.id);
    navigate(subItem.path);
    setIsProfileHovered(false);
    setIsProfileMobileOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full
        ${isScrolled 
          ? 'bg-gradient-to-br from-black/95 via-green-900/85 to-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-md border-b border-white/5'
        }`}
      >
       

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 relative">
          {/* Logo Section */}
          <div className="flex items-center">
            <div 
              onClick={() => handleMenuItemClick({ id: 'home', path: '/' })}
              className="relative flex items-center gap-2 sm:gap-3 cursor-pointer transition-all 
                duration-300 hover:scale-105 group"
            >
              <img 
                src={logo}
                alt="logo"
                className="w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
              />
              

              {/* Hover effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => item.submenu && setIsProfileHovered(true)}
                onMouseLeave={() => item.submenu && setIsProfileHovered(false)}
              >
                <button
                  onClick={() => !item.submenu && handleMenuItemClick(item)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1
                    ${activeTab === item.id || (item.submenu && item.submenu.some(sub => sub.id === activeTab))
                      ? 'text-white bg-green-600/20' 
                      : 'text-gray-300 hover:text-white hover:bg-green-500/10'
                    }`}
                >
                  <span className="font-medium text-sm md:text-base">
                    {item.label}
                  </span>
                  
                  {/* Dropdown icon for profile */}
                  {item.submenu && (
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${
                      isProfileHovered ? 'rotate-180' : ''
                    }`} />
                  )}
                  
                  {/* Active indicator */}
                  {(activeTab === item.id || (item.submenu && item.submenu.some(sub => sub.id === activeTab))) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 
                      bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full" />
                  )}
                </button>

                {/* Profile Dropdown Menu */}
                {item.submenu && isProfileHovered && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg 
                    border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50
                    animate-fadeIn"
                    onMouseEnter={() => setIsProfileHovered(true)}
                    onMouseLeave={() => setIsProfileHovered(false)}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubmenuClick(subItem, item)}
                          className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200
                            ${activeTab === subItem.id
                              ? 'bg-green-600/20 text-white' 
                              : 'text-gray-300 hover:text-white hover:bg-green-500/10'
                            }`}
                        >
                          <div className="text-green-400">
                            {subItem.icon}
                          </div>
                          <div className="text-left">
                            <div className="font-medium text-sm">{subItem.label}</div>
                          </div>
                          <FaAngleRight className="ml-auto text-xs opacity-50" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button - Hidden on mobile */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => handleMenuItemClick({ id: 'contact', path: '/contact' })}
              className="relative px-6 py-2.5 bg-[#5c9c6d] 
                text-white font-semibold rounded-xl transition-all duration-300 
                hover:scale-105 hover:shadow-lg hover:shadow-green-500/30
                active:scale-95"
            >
              <span className="relative z-10">Get Started</span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Mobile Menu Button - Visible only on mobile/tablet */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => handleMenuItemClick({ id: 'contact', path: '/contact' })}
              className="
                hidden sm:inline-flex items-center
                px-5 py-2.5
                bg-gradient-to-r from-green-500 to-green-600
                text-white text-sm font-semibold
                rounded-xl
                shadow-[0_4px_0_#166534]
                hover:shadow-[0_6px_15px_rgba(34,197,94,0.7)]
                hover:-translate-y-1
                active:translate-y-0 active:shadow-[0_2px_0_#166534]
                transition-all duration-300
              "
            >
              Get Started
            </button>

            {/* Hamburger Menu Button */}
            <button 
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5
                transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              
              {/* Background effect */}
              <div className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Shows when hamburger is clicked */}
        <div className={`lg:hidden absolute left-0 right-0 top-full bg-gradient-to-b from-gray-900 via-green-900/95 to-gray-900 
          backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300
          ${isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
          }`}>
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.submenu ? (
                    <>
                      {/* Profile with submenu toggle */}
                      <button
                        onClick={() => setIsProfileMobileOpen(!isProfileMobileOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300
                          ${(activeTab === item.id || item.submenu.some(sub => sub.id === activeTab))
                            ? 'bg-green-600/30 text-white' 
                            : 'text-gray-300 hover:text-white hover:bg-green-500/10'
                          }`}
                      >
                        <span className="font-medium text-lg">{item.label}</span>
                        <FaChevronDown className={`transition-transform duration-200 ${
                          isProfileMobileOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mobile Submenu */}
                      {isProfileMobileOpen && (
                        <div className="ml-4 mt-2 space-y-2 border-l border-green-500/30 pl-4">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleSubmenuClick(subItem, item)}
                              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300
                                ${activeTab === subItem.id
                                  ? 'bg-green-600/20 text-white' 
                                  : 'text-gray-300 hover:text-white hover:bg-green-500/10'
                                }`}
                            >
                              <div className="text-green-400">
                                {subItem.icon}
                              </div>
                              <span className="font-medium">{subItem.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleMenuItemClick(item)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300
                        ${activeTab === item.id 
                          ? 'bg-green-600/30 text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-green-500/10'
                        }`}
                    >
                      <span className="font-medium text-lg">{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <button 
                onClick={() => handleMenuItemClick({ id: 'contact', path: '/contact' })}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 
                  text-white font-semibold rounded-xl transition-all duration-300 
                  hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content spacer */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}
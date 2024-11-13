import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Map, Users, FolderKanban, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', icon: Shield, label: 'Home' },
    { path: '/map', icon: Map, label: 'Map' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full z-[9999] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo Section */}
              <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </Link>

              {/* Navigation Links - Hidden on mobile */}
              <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 
                        ${
                          isActive
                            ? 'text-red-600 dark:text-red-500 scale-105'
                            : 'text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500 hover:scale-105'
                        }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Right side controls */}
              <div className="flex items-center space-x-4">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="text-yellow-500 hover:rotate-45 transition-transform duration-200" size={24} />
                  ) : (
                    <Moon className="text-gray-700 hover:-rotate-45 transition-transform duration-200" size={24} />
                  )}
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="text-gray-700 dark:text-gray-300" size={24} />
                  ) : (
                    <Menu className="text-gray-700 dark:text-gray-300" size={24} />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 
                            ${
                              isActive
                                ? 'text-red-600 dark:text-red-500 bg-gray-100 dark:bg-gray-800'
                                : 'text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                        >
                          <Icon size={20} />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
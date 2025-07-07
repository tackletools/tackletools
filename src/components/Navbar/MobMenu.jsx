import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  // Smooth menu slide animation
  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Menu item animation
  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Smooth submenu animation
  const subMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: {
          duration: 0.1,
        },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: {
          duration: 0.2,
          delay: 0.1,
        },
      },
    },
  };

  // Hamburger icon animation
  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <div>
      <motion.button
        className="lg:hidden z-[999] relative p-2 hover:bg-white/5 rounded-md transition-colors"
        onClick={toggleDrawer}
        whileTap={{ scale: 0.95 }}
        variants={hamburgerVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleDrawer}
            />

            {/* Menu */}
            <motion.div
              className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A]/95 backdrop-blur-xl text-white p-6 pb-20 z-[999]"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.ul variants={menuItemVariants}>
                {Menus.map(({ name, subMenu }, i) => {
                  const isClicked = clicked === i;
                  const hasSubMenu = subMenu?.length;
                  return (
                    <motion.li
                      key={name}
                      variants={menuItemVariants}
                      className="mb-2"
                    >
                      <motion.span
                        className="flex-center-between p-4 hover:bg-white/10 rounded-lg cursor-pointer relative transition-all duration-200"
                        onClick={() => setClicked(isClicked ? null : i)}
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="font-medium">{name}</span>
                        {hasSubMenu && (
                          <motion.div
                            animate={{ rotate: isClicked ? 180 : 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          >
                            <ChevronDown className="ml-auto" />
                          </motion.div>
                        )}
                      </motion.span>
                      
                      <AnimatePresence>
                        {hasSubMenu && isClicked && (
                          <motion.ul
                            variants={subMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="ml-5 overflow-hidden"
                          >
                            {subMenu.map(({ name, icon: Icon, link }, index) => (
                              <motion.li
                                key={name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { delay: index * 0.1 }
                                }}
                                exit={{ opacity: 0, x: -10 }}
                                className="p-2 hover:bg-white/5 rounded-md transition-colors duration-200"
                              >
                                <Link
                                  to={link}
                                  className="flex-center gap-x-3 no-underline text-inherit hover:no-underline w-full text-gray-300 hover:text-white transition-colors duration-200"
                                  onClick={toggleDrawer}
                                >
                                  <Icon size={17} />
                                  <span>{name}</span>
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
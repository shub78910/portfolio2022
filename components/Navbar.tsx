import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const navItems = [
    { name: "About", route: "/" },
    { name: "Projects", route: "/projects" },
  ];
  return (
    <motion.div
      className="flex items-center justify-between px-5 py-3 my-3"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-6 text-base font-normal md:text-xl">
        {navItems.map((item) => {
          const isActive = router.pathname === item.route;
          return (
            <Link href={item.route} key={item.route}>
              <span
                className={`cursor-pointer transition-colors duration-150 px-1 ${
                  isActive
                    ? "font-bold text-green border-b-2 border-green"
                    : "text-gray-700 dark:text-gray-300 hover:text-green"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Navbar;

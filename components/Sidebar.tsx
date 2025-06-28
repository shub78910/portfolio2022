import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGoodreads } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdPhone, MdEmail, MdLanguage } from "react-icons/md";
import { motion } from "framer-motion";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span className="text-green">Shubham</span> Hirakki
      </h3>

      {/* Socials */}
      <div className="flex gap-4 justify-center mx-auto my-5 w-9/12 text-green md:w-full">
        <motion.a
          href="https://www.linkedin.com/in/shubham-hirakki-39186619b/"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </motion.a>
        <motion.a
          href="https://github.com/shub78910"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </motion.a>
        <motion.a
          href="https://www.goodreads.com/user/show/113426018-shubham-hirakki"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGoodreads className="w-8 h-8 cursor-pointer" />
        </motion.a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex justify-center items-center">
          <GoLocation className="mr-2" /> <span>Mumbai, India </span>
        </div>
        <div className="flex justify-center items-center mt-2">
          <MdPhone className="mr-2" /> <span>+91-8291027138</span>
        </div>
        <div className="flex justify-center items-center mt-2">
          <MdEmail className="mr-2" /> <span>shubhamhirakki@gmail.com</span>
        </div>
      </div>

      <motion.a
        href="/assets/Shubham-Resume-2025.pdf"
        download="Shubham-Resume-2025.pdf"
        className="px-8 py-2 m-auto my-2 w-full text-sm font-medium bg-gray-100 rounded-xl border border-gray-300 shadow-sm transition-colors duration-200 hover:bg-gray-200 dark:bg-dark-200 dark:hover:bg-dark-100 dark:border-dark-100"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="opacity-80">Download Resume</span>
      </motion.a>
    </motion.div>
  );
};

export default Sidebar;

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGoodreads } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Styles from "../styles/modeSlider.module.css"

import Image from "next/image";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <div className="my-5">
                <h4 className="my-2">Toggle theme</h4>
                <label className={`${Styles.theme_switch}`}>
                    <input type="checkbox" id="checkbox" onClick={changeTheme}
                        className="w-8/12 px-5 py-2 my-4 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 to-green-500 focus:outline-none hover:scale-105 " />
                    <div className={`${Styles.slider} ${Styles.round}`}></div>
                </label>
            </div>

            <Image
                src="/assets/shubham-profile.jpg"
                alt="avatar"
                className="mx-auto border rounded-full "
                height="130rem"
                width="180rem"
                layout="intrinsic"
                quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider">
                <span className="text-green ">Shubham</span> Hirakki
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
                Web Developer
            </p>
            {/* Resume */}
            <a
                href="/assets/Shubham Hirakki Resume.pdf"
                download="Shubham Hirakki Resume.pdf"
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
            >
                <GiTie className="w-6 h-6" />
                <span>Download Resume</span>
            </a>

            {/* Socials */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
                <a href="https://www.goodreads.com/user/show/113426018-shubham-hirakki">
                    <FaGoodreads className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/shubham-hirakki-39186619b/" >
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://github.com/shub78910">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
                </a>
            </div>

            {/* Contacts */}
            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center">
                    <GoLocation className="mr-2" /> <span>Mumbai, India </span>
                </div>
                <p className="my-2">shubhamhirakki@gmail.com</p>
            </div>
        </>
    );
};

export default Sidebar;
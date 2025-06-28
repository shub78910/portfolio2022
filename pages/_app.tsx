import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }) {
  const route = useRouter();
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
        <div className="col-span-12 p-4 h-full text-base text-center bg-white rounded-2xl dark:bg-dark-500 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="flex overflow-hidden flex-col col-span-12 bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500">
          <Navbar />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={route.pathname}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

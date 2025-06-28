import React from "react";
import { motion } from "framer-motion";

const SkillsSection: React.FC = () => (
  <section className="my-6">
    <h2 className="mb-2 text-xl font-bold">Skills</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="font-semibold">Frontend Development</h3>
        <ul className="list-disc list-inside">
          <li>React.js</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind CSS</li>
          <li>Redux</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="font-semibold">Backend Development</h3>
        <ul className="list-disc list-inside">
          <li>Node.js</li>
          <li>Express</li>
          <li>Firebase</li>
          <li>MongoDB</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;

import React from "react";
import { motion } from "framer-motion";

interface InfoListProps {
  title: string;
  items: string[];
}

const InfoList: React.FC<InfoListProps> = ({ title, items }) => (
  <section className="my-6">
    <div className="mt-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-1 list-disc list-inside">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default InfoList;

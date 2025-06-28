import React from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  title: string;
  location: string;
  duration: string;
  link: string;
  linkColor?: string;
  techStack?: string;
  bullets: string[];
  custom?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  title,
  location,
  duration,
  link,
  linkColor = "text-blue-600",
  techStack,
  bullets,
  custom = 0,
}) => (
  <motion.div
    className="p-4 w-full bg-gray-200 rounded-lg dark:bg-dark-200"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.5, delay: custom * 0.15 }}
  >
    <h3 className="text-lg font-semibold">{company}</h3>
    <div className="flex flex-wrap mb-1 text-sm text-gray-600 dark:text-gray-400">
      <span className="mr-2">{title}</span>
      <span className="mr-2">| {location}</span>
      <span className="mr-2">| {duration}</span>
    </div>
    <a
      href={link}
      className={`underline ${linkColor}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
    <div className="mt-2 text-sm">
      {techStack && (
        <div>
          <b>Tech Stack:</b> {techStack}
        </div>
      )}
      <ul className="mt-2 list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
        ))}
      </ul>
    </div>
  </motion.div>
);

export default ExperienceCard;

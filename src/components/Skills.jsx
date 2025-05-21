import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaJsSquare,
} from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si"; // ✅ add these
import { motion } from "framer-motion";

const tech = [
  { icon: <FaJava />, label: "Java" },
  { icon: <SiSpringboot />, label: "Spring Boot" }, // ✅ new
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3 />, label: "CSS" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <SiMysql />, label: "MySQL" }, // ✅ new
  { icon: <FaDatabase />, label: "MongoDB" },
];


const Skills = () => (
  <section className="py-16 bg-gray-100 dark:bg-gray-800 dark:text-white">
    <h2 className="text-center text-3xl font-bold mb-10">Skills</h2>
    <div className="flex flex-wrap justify-center gap-10 px-4">
      {tech.map((t, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
        >
          <div className="text-4xl mb-2">{t.icon}</div>
          <p>{t.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;


import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Miracle-Box",
    tech: "React, Node.js, MongoDB",
    desc: "Web tool for NGO to collect and monitor demographic data with dashboards.",
    link: "https://github.com/pantheism2709/MiracleBox",
  },
 {
  title: "Revolution",
  tech: "React, Spring Boot, Stripe, Cloudinary, JWT",
  desc: "Built a scalable full-stack e-commerce platform with decoupled frontend-backend architecture. Implemented JWT-based authentication, admin controls for product/user management, cart functionality, Stripe integration for payments, and Cloudinary for media handling.",
  link: "https://revolution2o.netlify.app/",
},
  {
    title: "NCP Chatbot",
    tech: "Flask, NLTK, JS",
    desc: "College network assistant for solving Wi-Fi/LAN issues using NLP.",
    link: "https://github.com/pantheism2709/ChatBot",
  },
];

const Projects = () => (
  <section className="py-16 bg-white dark:bg-gray-900 dark:text-white">
    <h2 className="text-center text-3xl font-bold mb-10">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {projects.map((proj, i) => (
        <Tilt key={i}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{proj.tech}</p>
            <p className="mb-4">{proj.desc}</p>
            <a href={proj.link} className="text-indigo-600 hover:underline">
              View Demo →
            </a>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Projects;

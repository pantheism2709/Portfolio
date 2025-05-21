import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 dark:text-white">
    <h2 className="text-center text-3xl font-bold mb-10">Contact</h2>
    <div className="flex flex-col items-center space-y-4">

      {/* 📧 Clickable Email */}
      <a
        href="mailto:sachinmishra2709@gmail.com"
        className="flex items-center gap-2 hover:underline"
      >
        <FaEnvelope /> sachinmishra2709@gmail.com
      </a>

      {/* 📍 Location */}
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt /> Indore, M.P.
      </div>

      {/* 📞 Phone Number */}
      <div className="flex items-center gap-2">
        <FaPhone /> +91 6264745656
      </div>

      {/* 🔗 Social Links */}
      <div className="flex items-center gap-4 text-2xl">
        <a href="https://github.com/pantheism2709" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sachin-mishra-849a16229/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  </section>
);
export default Contact;

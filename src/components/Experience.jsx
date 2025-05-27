const Experience = () => (
  <section className="py-16 bg-gray-100 dark:bg-gray-800 dark:text-white">
    <h2 className="text-center text-3xl font-bold mb-10">Experience</h2>
    <div className="max-w-4xl mx-auto space-y-6 px-4">

      {/* Full-time Experience */}
      <div className="border-l-4 border-indigo-600 pl-4">
        <h3 className="font-bold text-lg">BlueYonder</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">Associate Software Engineer | July 2024 – Present</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Generalized a MongoDB repository wrapper to support indexing with selective entity configuration, reducing boilerplate code by 90%.</li>
          <li>Automated YAML config deduplication across 15 environments using a recursive Python script; merged 1600+ properties, reducing duplication by 80% and eliminating override conflicts.</li>
          <li>Created backend APIs to help visualize distribution center (DC) insights.</li>
        </ul>
      </div>

      {/* Internship Experience */}
      <div className="border-l-4 border-indigo-600 pl-4">
        <h3 className="font-bold text-lg">BlueYonder</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">Software Engineering Intern | Jan 2024 – June 2024</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Created dynamic graph configurations deployed across 100+ customer environments to visualize business insights and improve decision-making.</li>
          <li>Developed and executed TypeScript-based UI automation tests using WebdriverIO, increasing frontend regression coverage and reducing manual testing efforts.</li>
        </ul>
      </div>

    </div>
  </section>
);

export default Experience;

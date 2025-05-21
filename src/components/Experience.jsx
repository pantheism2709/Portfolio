const Experience = () => (
  <section className="py-16 bg-gray-100 dark:bg-gray-800 dark:text-white">
    <h2 className="text-center text-3xl font-bold mb-10">Experience</h2>
    <div className="max-w-4xl mx-auto space-y-6 px-4">
      <div className="border-l-4 border-indigo-600 pl-4">
        <h3 className="font-bold text-lg">BlueYonder</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">6 Month Internship + 10 Month Full-time</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Built microservices using Spring Boot</li>
          <li>Unit/functional testing with JUnit, JMeter</li>
          <li>UI automation with WebdriverIO (TypeScript)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;


const achievements = [
  "Solved 800+ coding questions (GFG + Leetcode)",
  "Top 144 in Morgan Stanley Code to Give Hackathon",
  "Ranked 71 in Codestart 5.0 (MNNIT Allahabad)",
  "Ranked 148 in Codathon (NIT Bhopal)",
  "AIR 211 in NIMCET 2021",
  "AIR 34 in BHU MCA 2021",
];

const Achievements = () => (
  <section className="py-16 bg-white dark:bg-gray-900 dark:text-white">
    <h2 className="text-center text-3xl font-bold mb-10">Achievements</h2>
    <ul className="max-w-2xl mx-auto list-disc space-y-3 px-6">
      {achievements.map((ach, i) => (
        <li key={i}>{ach}</li>
      ))}
    </ul>
  </section>
);

export default Achievements;

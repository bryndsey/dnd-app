const mockClasses = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

export function ClassListSection() {
  return (
    <>
      <h2>Classes</h2>
      <ClassList />
    </>
  );
}

export function ClassList() {
  return (
    <ul>
      {mockClasses.map((className) => (
        <li key={className}>{className}</li>
      ))}
    </ul>
  );
}

import { useQuery } from "@tanstack/react-query";
import { fetchClasses } from "./api/fetchClasses";

export function ClassListSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["classes"],
    queryFn: fetchClasses,
  });

  return (
    <div>
      <h2>Classes</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ClassList classes={data.results.map((result) => result.name)} />
      )}
    </div>
  );
}

export function ClassList({ classes }: { classes: string[] }) {
  return (
    <ul>
      {classes.map((className) => (
        <li key={className}>{className}</li>
      ))}
    </ul>
  );
}

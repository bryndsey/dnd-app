import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { fetchClasses } from "./api/fetchClasses";
import { Class } from "./types/Class";

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
      {data && <ClassList classes={data.results} />}
    </div>
  );
}

export function ClassList({ classes }: { classes: Class[] }) {
  return (
    <ul>
      {classes.map(({ index, name }) => (
        <li key={index}>
          <Link to={`/class/${index}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

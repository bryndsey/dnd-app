import { Race } from "./Race";
import { Link } from "@/components/Link";

export function RaceListContent({ races }: { races: Race[] }) {
  return (
    <ul>
      {races.map(({ index, name }) => (
        <li key={index}>
          <Link href={`/race/${index}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}

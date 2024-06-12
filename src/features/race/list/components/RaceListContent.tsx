import { Race } from "../types/Race";
import { Link } from "@/components/Link";

export function RaceListContent({ races }: { races: Race[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {races.map(({ index, name }) => (
        <li key={index}>
          <Link href={`/race/${index}`}>
            <div className="rounded-xl shadow-md p-6 sm:p-8 border text-xl font-bold">
              {name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

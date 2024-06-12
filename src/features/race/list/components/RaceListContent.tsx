import { Race } from "../types/Race";
import { Link } from "@tanstack/react-router";

export function RaceListContent({ races }: { races: Race[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {races.map(({ index, name }) => (
        <li key={index}>
          <Link to={`/race/${index}`}>
            <div className="rounded-xl border p-6 text-3xl font-semibold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md sm:p-8">
              {name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import { Race } from "../types/Race";
import { Link } from "@tanstack/react-router";

export function RaceListContent({ races }: { races: Race[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {races.map(({ index, name }) => (
        <li key={index}>
          <Link to={`/race/${index}`}>
            <div className="rounded-xl shadow-md p-6 sm:p-8 border text-3xl font-semibold hover:-translate-y-1 transition-all hover:shadow-lg active:translate-y-0 active:shadow-md">
              {name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

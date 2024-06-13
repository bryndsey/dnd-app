import { RaceDetails } from "../types/RaceDetails";

interface RaceDetailsContentProps {
  data: RaceDetails;
}
// Pure/stateless components
export function RaceDetailsContent({ data }: RaceDetailsContentProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl font-bold sm:text-6xl">{data.name}</h2>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <li>
          <InfoCard title="Age">{data.age}</InfoCard>
        </li>
        <li>
          <InfoCard title="Language">{data.languageDescription}</InfoCard>
        </li>
        <li>
          <InfoCard title="Size">{data.sizeDescription}</InfoCard>
        </li>
        <li>
          <InfoCard title="Speed">{`${data.speed} feet per round.`}</InfoCard>
        </li>
        <li>
          <InfoCard title="Alignment">{data.alignment}</InfoCard>
        </li>
      </ul>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 rounded-xl">
      <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

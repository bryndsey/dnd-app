import { RaceDetails } from "../types/RaceDetails";

interface RaceDetailsContentProps {
  data: RaceDetails;
}

export function RaceDetailsContent({ data }: RaceDetailsContentProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl sm:text-6xl font-bold">{data.name}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <li>
          <InfoCard title="Age">{data.age}</InfoCard>
        </li>
        <li>
          <InfoCard title="Language">{data.language_desc}</InfoCard>
        </li>
        <li>
          <InfoCard title="Size">{data.size_description}</InfoCard>
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
    <div className="rounded-xl space-y-2">
      <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

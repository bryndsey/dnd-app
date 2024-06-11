interface ErrorDisplayProps {
  message?: string;
}

export function ErrorDisplay({
  message = "An error occurred",
}: ErrorDisplayProps) {
  return (
    <>
      <p className="text-xl">Oops, looks like we rolled a Nat 1...</p>
      <p className="text-gray-700">{message}</p>
    </>
  );
}

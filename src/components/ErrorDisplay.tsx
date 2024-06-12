interface ErrorDisplayProps {
  message?: string;
}

export function ErrorDisplay({
  message = "An error occurred",
}: ErrorDisplayProps) {
  return (
    <>
      <h3 className="text-xl">Oops, looks like we rolled a Nat 1...</h3>
      <p className="text-gray-700">{message}</p>
    </>
  );
}

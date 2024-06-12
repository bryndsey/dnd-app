interface ErrorDisplayProps {
  message?: string;
}

export function ErrorDisplay({
  message = "An error occurred",
}: ErrorDisplayProps) {
  return (
    <div className="space-y-2 p-4 text-center">
      <h3 className="text-3xl font-bold">
        Oops, looks like we rolled a Nat 1...
      </h3>
      <p>{message}</p>
    </div>
  );
}

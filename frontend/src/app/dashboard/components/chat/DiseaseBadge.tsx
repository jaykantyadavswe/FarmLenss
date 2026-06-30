export default function DiseaseBadge({
  disease,
}: {
  disease: string;
}) {
  return (
    <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
      🦠 {disease}
    </span>
  );
}
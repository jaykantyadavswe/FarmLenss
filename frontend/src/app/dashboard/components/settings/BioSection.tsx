export default function BioSection() {
  return (
    <div>

      <h3 className="mb-6 text-xl font-semibold">
        About You
      </h3>

      <textarea
        rows={5}
        placeholder="Tell us about yourself..."
        className="w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-green-500"
      />

    </div>
  );
}
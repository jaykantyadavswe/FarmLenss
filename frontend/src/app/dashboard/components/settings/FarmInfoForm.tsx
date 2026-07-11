export default function FarmInfoForm() {
  return (
    <div>

      <h3 className="mb-6 text-xl font-semibold">
        Farm Information
      </h3>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Farm Name"
          placeholder="Green Valley Farm"
        />

        <Input
          label="Farm Size"
          placeholder="12 Acres"
        />

        <Input
          label="Primary Crop"
          placeholder="Tomato"
        />

        <Input
          label="Experience"
          placeholder="5 Years"
        />

      </div>

    </div>
  );
}

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium">

        {label}

      </label>

      <input
        placeholder={placeholder}
        className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-green-500"
      />

    </div>
  );
}
export default function PersonalInfoForm() {
  return (
    <div>

      <h3 className="mb-6 text-xl font-semibold">
        Personal Information
      </h3>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Full Name"
          placeholder="Jaykant Kumar"
        />

        <Input
          label="Email Address"
          placeholder="jaykant@gmail.com"
        />

        <Input
          label="Phone Number"
          placeholder="+91 9876543210"
        />

        <Input
          label="Location"
          placeholder="Bhopal, India"
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
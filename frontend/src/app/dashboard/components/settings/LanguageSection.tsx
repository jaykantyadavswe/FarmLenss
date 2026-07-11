export default function LanguageSection() {

    return (

        <section className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold">

                Language & Region

            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

                <Select
                    title="Language"
                    options={[
                        "English",
                        "Hindi",
                    ]}
                />

                <Select
                    title="Region"
                    options={[
                        "India",
                        "USA",
                    ]}
                />

                <Select
                    title="Temperature"
                    options={[
                        "°C",
                        "°F",
                    ]}
                />

                <Select
                    title="Date Format"
                    options={[
                        "DD/MM/YYYY",
                        "MM/DD/YYYY",
                    ]}
                />

            </div>

        </section>

    );

}

function Select({

    title,

    options,

}: {

    title: string;

    options: string[];

}) {

    return (

        <div>

            <label className="mb-2 block font-medium">

                {title}

            </label>

            <select className="w-full rounded-xl border px-4 py-3">

                {options.map((item) => (

                    <option key={item}>

                        {item}

                    </option>

                ))}

            </select>

        </div>

    );

}
import ThemeSelector from "./ThemeSelector";
import ColorPicker from "./ColorPicker";

export default function AppearanceSection() {

    return (

        <section className="rounded-3xl border bg-white p-8 shadow-sm" id="appearance">

            <h2 className="text-2xl font-bold">

                Appearance

            </h2>

            <p className="mt-2 text-zinc-500">

                Customize the look and feel of FarmLens.

            </p>

            <div className="mt-10">

                <h3 className="mb-4 font-semibold">

                    Theme

                </h3>

                <ThemeSelector />

            </div>

            <div className="mt-10">

                <h3 className="mb-4 font-semibold">

                    Accent Color

                </h3>

                <ColorPicker />

            </div>

        </section>

    );

}
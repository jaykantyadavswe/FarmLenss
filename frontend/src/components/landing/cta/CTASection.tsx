import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl px-8 py- text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Get Started
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
            Ready to Analyze Your Crops with AI?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Upload a crop image, detect diseases instantly, chat with the AI
            assistant, and keep all your reports organized in one place.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { ArrowLeft, Home, Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background via-background to-green-50/40 px-6 dark:to-green-950/10">
      <div className="max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-green-600 shadow-lg dark:bg-green-900/30">
          <Leaf size={40} />
        </div>

        <h1 className="text-8xl font-extrabold tracking-tight text-green-600 md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to FarmLens and continue protecting your crops with
          AI-powered insights.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition-all hover:bg-muted"
          >
            <ArrowLeft size={18} />
            Go to Dashboard
          </Link>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          🌱 FarmLens • AI-Powered Crop Disease Detection
        </p>
      </div>
    </main>
  );
}
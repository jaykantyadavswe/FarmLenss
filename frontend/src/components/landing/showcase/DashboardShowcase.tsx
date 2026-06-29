import SidebarPreview from "./SidebarPreview";
import ChatPreview from "./ChatPreview";
import SummaryPreview from "./SummaryPreview";

export default function DashboardShowcase() {
  return (
    <section
      id="dashboard"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Everything Farmers Need

            <span className="text-green-600">

              In One Dashboard

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">

            Upload crop images, receive AI-powered analysis,
            chat with your farming assistant,
            and securely access previous reports—
            all from one intuitive workspace.

          </p>

        </div>

        <div className="mt-20 overflow-hidden rounded-3xl border shadow-2xl">

          <div className="flex h-[700px]">

            <SidebarPreview />

            <ChatPreview />

            <SummaryPreview />

          </div>

        </div>

      </div>
    </section>
  );
}
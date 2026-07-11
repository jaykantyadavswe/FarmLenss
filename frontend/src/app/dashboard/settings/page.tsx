import AIPreferences from "../components/settings/AIPreferences";
import AppearanceSection from "../components/settings/AppearanceSection";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import LanguageSection from "../components/settings/LanguageSection";
import NotificationSection from "../components/settings/NotificationSection";
import ProfileSection from "../components/settings/ProfileSection";
import SaveChangesBar from "../components/settings/SaveChangesBar";
import SecuritySection from "../components/settings/SecuritySection";
import SettingsHeader from "../components/settings/SettingsHeader";
import SettingsSidebar from "../components/settings/SettingsSidebar";

export default function SettingsPage() {
  return (
     <main className="min-h-screen bg-zinc-50">

      <div className="mx-auto max-w-7xl p-8">

        {/* <SettingsHeader /> */}

        <div className="mt-8 grid grid-cols-12 gap-8">

          {/* Sidebar */}
          <aside className="col-span-3">
            <SettingsSidebar />
          </aside>

          {/* Content */}
          <section className="col-span-9 space-y-8">

            <ProfileSection />

            <NotificationSection />

            <AppearanceSection />

            <LanguageSection />

            <AIPreferences />

            <SecuritySection />

            <ConnectedAccounts />

            <DangerZone />

          </section>

        </div>

      </div>

      {/* Sticky Footer */}
      <SaveChangesBar />

    </main>
  );
}
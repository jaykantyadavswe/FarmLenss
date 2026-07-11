import AvatarUpload from "./AvatarUpload";
import PersonalInfoForm from "./PersonalInfoForm";
import FarmInfoForm from "./FarmInfoForm";
import BioSection from "./BioSection";

export default function ProfileSection() {
  return (
    <section className="space-y-6" id="profile">

      <div className="rounded-3xl border bg-white p-8 shadow-sm">

        <div className="mb-8">

          <h2 className="text-2xl font-bold">
            Profile Information
          </h2>

          <p className="mt-2 text-zinc-500">
            Manage your personal and farm information.
          </p>

        </div>

        <AvatarUpload />

        <div className="mt-10">

          <PersonalInfoForm />

        </div>

        <div className="mt-10">

          <FarmInfoForm />

        </div>

        <div className="mt-10">

          <BioSection />

        </div>

      </div>

    </section>
  );
}
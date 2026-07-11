

import ActionButtons from "../components/reports/ActionButtons";
import AISummary from "../components/reports/AISummary";
import CausesCard from "../components/reports/CausesCard";
import ConfidenceCard from "../components/reports/ConfidenceCard";
import DiseaseOverview from "../components/reports/DiseaseOverview";
import MedicineCard from "../components/reports/MedicineCard";
import PreventionCard from "../components/reports/PreventionCard";
import ReportHeader from "../components/reports/ReportHeader";
import SeverityCard from "../components/reports/SeverityCard";
import SimilarCases from "../components/reports/SimilarCases";
import SymptomsCard from "../components/reports/SymptomsCard";
import TreatmentCard from "../components/reports/TreatmentCard";
import WeatherImpact from "../components/reports/WeatherImpact";

import { report } from "./reportData";

export default function ReportPage() {
  return (
    <div className="space-y-6 p-6">
      <ReportHeader />

      <DiseaseOverview />

      <div className="grid gap-6 lg:grid-cols-2">
        <ConfidenceCard />
        <AISummary />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SymptomsCard />
        <CausesCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SeverityCard />
        <WeatherImpact />
      </div>

      <TreatmentCard />

      <PreventionCard />

      <MedicineCard />

      <SimilarCases />

      <ActionButtons />
    </div>
  );
}
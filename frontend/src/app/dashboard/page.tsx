import AnalysisCard from "./components/dashboard/AnalysisCard";
import ComingSoon from "./components/dashboard/ComingSoon";
export default function DashboardPage() {
  return (
    <div className="py-5 px-5">
      <AnalysisCard/>
      <ComingSoon/>
    </div>
  );
}
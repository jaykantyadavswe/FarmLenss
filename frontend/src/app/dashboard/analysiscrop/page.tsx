import AnalysisPreview from "../components/analysiscrop/AnalysisPreview";
import CropImageUpload from "../components/analysiscrop/CropImageUpload";
import ResultDetails from "../components/analysiscrop/ResultDetails";
export default function DashboardPage() {
  return (
    <div className="grid grid-cols-12 gap-6 p-6">

      {/* Upload */}
      <div className="col-span-12 lg:col-span-7">
        <CropImageUpload />
      </div>

      {/* Analysis */}
      <div className="col-span-12 lg:col-span-5">
        <AnalysisPreview />
      </div>

      {/* Result */}
      <div className="col-span-12">
        <ResultDetails />
      </div>

    </div>
  );
}
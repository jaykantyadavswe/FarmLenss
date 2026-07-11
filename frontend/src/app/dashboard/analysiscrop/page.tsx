import AnalysisPreview from "../components/analysiscrop/AnalysisPreview";
import CropImageUpload from "../components/analysiscrop/CropImageUpload";
import Discription from "../components/analysiscrop/Discription";
import ResultDetails from "../components/analysiscrop/ResultDetails";
export default function DashboardPage() {
  return (
    <div>
    <div className="grid grid-cols-12 gap-6 p-6">

      <div className="col-span-12 lg:col-span-4">
        <CropImageUpload />
      </div>

      <div className="col-span-12 lg:col-span-4">
        <AnalysisPreview />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <ResultDetails />
      </div>

    <div className="lg:col-span-12">
      <Discription/>
    </div>
    </div>
    </div>


  );
}
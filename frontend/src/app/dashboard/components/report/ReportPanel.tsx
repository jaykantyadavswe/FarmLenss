import ReportHeader from "./ReportHeader";
import CropImage from "./CropImage";
import CropInfo from "./CropInfo";
import ConfidenceCard from "./ConfidenceCard";
import SeverityCard from "./SeverityCard";

import { report } from "./reportData";

export default function ReportPanel() {
  return (
    <aside className="flex h-full w-[380px] flex-col bg-zinc-50">

      {/* <ReportHeader /> */}

      <div className="flex-1 space-y-6 overflow-y-auto p-6">

        <CropImage image={report.image} />

        <CropInfo
          crop={report.crop}
          disease={report.disease}
        />

        <ConfidenceCard
          confidence={report.confidence}
        />

        <SeverityCard
          severity={report.severity}
        />

      </div>

    </aside>
  );
}
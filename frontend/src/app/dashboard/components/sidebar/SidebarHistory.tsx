import HistoryGroup from "./HistoryGroup";
import { historyData } from "./sidebarData";

export default function SidebarHistory() {
  return (
    <>
      <HistoryGroup
        title="Today"
        items={historyData.filter(
          (item) => item.dateGroup === "Today"
        )}
      />

      <HistoryGroup
        title="Yesterday"
        items={historyData.filter(
          (item) => item.dateGroup === "Yesterday"
        )}
      />

      <HistoryGroup
        title="Previous 7 Days"
        items={historyData.filter(
          (item) => item.dateGroup === "Previous 7 Days"
        )}
      />
    </>
  );
}
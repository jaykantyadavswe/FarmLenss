export interface HistoryItem {
  id: string;
  title: string;
  crop: string;
  dateGroup: "Today" | "Yesterday" | "Previous 7 Days";
  time: string;
}

export const historyData: HistoryItem[] = [
  {
    id: "1",
    title: "Tomato Disease Detection",
    crop: "Tomato",
    dateGroup: "Today",
    time: "2 min ago",
  },
  {
    id: "2",
    title: "Wheat Rust Analysis",
    crop: "Wheat",
    dateGroup: "Today",
    time: "45 min ago",
  },
  {
    id: "3",
    title: "Rice Brown Spot",
    crop: "Rice",
    dateGroup: "Yesterday",
    time: "Yesterday",
  },
  {
    id: "4",
    title: "Cotton Leaf Curl",
    crop: "Cotton",
    dateGroup: "Previous 7 Days",
    time: "3 days ago",
  },
  {
    id: "5",
    title: "Corn Leaf Blight",
    crop: "Corn",
    dateGroup: "Previous 7 Days",
    time: "5 days ago",
  },
];
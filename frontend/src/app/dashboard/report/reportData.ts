import { ReportData } from "./types";

export const report: ReportData = {
  crop: "Tomato",

  disease: "Early Blight",

  confidence: 96,

  severity: "Moderate",

  image: "/images/history/tomato.jpg",

  symptoms: [
    "Brown circular spots",
    "Yellowing leaves",
    "Dry leaf edges",
  ],

  treatments: [
    "Apply Mancozeb",
    "Use Copper Fungicide",
    "Remove infected leaves",
  ],

  prevention: [
    "Avoid overwatering",
    "Improve airflow",
    "Practice crop rotation",
  ],

  weather: {
    temperature: "29°C",
    humidity: "73%",
  },
};
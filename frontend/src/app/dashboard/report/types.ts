export interface ReportData {
  crop: string;
  disease: string;
  confidence: number;
  severity: "Low" | "Moderate" | "High";

  image: string;

  symptoms: string[];

  treatments: string[];

  prevention: string[];

  weather: {
    temperature: string;
    humidity: string;
  };
}
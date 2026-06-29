import {
  User,
  Monitor,
  Server,
  BrainCircuit,
  Database,
  Cloud,
  LayoutDashboard,
} from "lucide-react";

export const architecture = {
  client: {
    icon: User,
    title: "Farmer",
    description: "Uploads crop image & asks AI questions",
  },

  frontend: {
    icon: Monitor,
    title: "Next.js Frontend",
    description: "Responsive UI & Dashboard",
  },

  backend: {
    icon: Server,
    title: "Express API",
    description: "Authentication & Business Logic",
  },

  services: [
    {
      icon: BrainCircuit,
      title: "Gemini AI",
      description: "Disease Detection",
    },
    {
      icon: Database,
      title: "MongoDB",
      description: "Store Reports",
    },
    {
      icon: Cloud,
      title: "Cloudinary",
      description: "Image Storage",
    },
  ],

  dashboard: {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Chat • Reports • History",
  },
};
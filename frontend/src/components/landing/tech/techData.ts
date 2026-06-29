import {
  Globe,
  Server,
  Database,
  Brain,
  Cloud,
  Shield,
} from "lucide-react";

export const techStack = [
  {
    title: "Frontend",
    icon: Globe,
    color: "bg-blue-50 text-blue-600",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "bg-green-50 text-green-600",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "bg-orange-50 text-orange-600",
    technologies: [
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    color: "bg-purple-50 text-purple-600",
    technologies: [
      "Gemini API",
      "Prompt Engineering",
      "Image Analysis",
    ],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    color: "bg-cyan-50 text-cyan-600",
    technologies: [
      "Cloudinary",
      "Image Storage",
    ],
  },
  {
    title: "Security",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    technologies: [
      "JWT",
      "Password Hashing",
      "Protected Routes",
    ],
  },
];
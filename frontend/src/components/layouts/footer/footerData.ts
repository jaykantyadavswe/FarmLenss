import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons";

interface SocialLink {
  icon: IconType;
  href: string;
}


export const footerLinks = [
    {
        title: "Product",
        links: [
            "Features",
            "Dashboard",
            "Technology",
            "How It Works",
        ],
        href: [
          "#features",
          "/dashboard",
          "#technology",
          "#how-it-works",
        ]
    },
    {
        title: "Resources",
        links: [
            "Documentation",
            "GitHub",
            "API",
            "Project Report",
        ],
        href: [
          "https://github.com/jaykantyadavswe/FarmLenss/blob/main/README.md",
          "https://github.com/jaykantyadavswe/FarmLenss/tree/main",
          "https://aistudio.google.com/app/api-keys",
          "https://github.com/jaykantyadavswe/FarmLenss/blob/main/README.md"
        ]
    },
    {
        title: "Company",
        links: [
            "About",
            "Contact",
            "Privacy Policy",
            "Terms",
        ],
    },
];

export const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    href: "https://github.com/jaykantyadavswe",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jaykantkumar/",
  },
  {
    icon: FaGlobe,
    href: "https://github.com/jaykantyadavswe",
  },
  {
    icon: MdEmail,
    href: "mailto:Jaykant.yadav.cse@email.com",
  },
];
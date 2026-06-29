import {
    //   Github,
    //   Linkedin,
    Mail,
    Globe,
} from "lucide-react";

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
            "Architecture",
        ],
    },
    {
        title: "Resources",
        links: [
            "Documentation",
            "GitHub",
            "API",
            "Project Report",
        ],
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
    href: "https://github.com/yourusername",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: FaGlobe,
    href: "https://yourportfolio.com",
  },
  {
    icon: MdEmail,
    href: "mailto:your@email.com",
  },
];
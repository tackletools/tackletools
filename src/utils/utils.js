import { BadgeIndianRupee, CircleHelp, HandHelping } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { Bike } from "lucide-react";
import { Forklift } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { BookCopy } from "lucide-react";
import { Building } from "lucide-react";
import { Music } from "lucide-react";
import { Landmark } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { TrainFront } from "lucide-react";
import { WalletCards } from "lucide-react";
import { Cloudy } from "lucide-react";
import { LayoutPanelLeft } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { Store } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { Rocket } from "lucide-react";
import { Database } from "lucide-react";
import { PenTool } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { BrainCircuit } from 'lucide-react';

export const Menus = [
  {
    name: "Assistance",
    subMenuHeading: ["Crafting Innovation", "Design & Marketplace", "Security & Management"],
    subMenu: [
      {
        name: "Web Development",
        desc: "Responsive design",
        icon: PanelsTopLeft,
        link: "/services/WebDevelopment",
      },
      {
        name: "UI/UX Design",
        desc: "User-centered design",
        icon: Rocket,
        link: "/services/UIUXDesign",
      },
      {
        name: "Database",
        desc: "Data management",
        icon: Database,
        link: "/services/Database",
      },
      {
        name: "App Development",
        desc: "Mobile solutions",
        icon: LayoutPanelLeft,
        link: "/services/AppDevelopment",
      },
      {
        name: "E-commerce",
        desc: "Digital Marketplace",
        icon: ShoppingCart,
        link: "/services/Ecommerce",
      },
      {
        name: "Cyber Security",
        desc: "Threat protection",
        icon: ShieldCheck,
        link: "/services/CyberSecurity",
      },
      {
        name: "Game Development",
        desc: "Interactive experiences",
        icon: Gamepad2,
        link: "/services/GameDevelopment",
      },
      {
        name: "Digital Marketing",
        desc: "Online Growth",
        icon: Store,
        link: "/services/DigitalMarketing",
      },
      {
        name: "AI Solutions",
        desc: "Smart Tools",
        icon: BrainCircuit,
        link: "/services/AISolutions",
      },
      {
        name: "Sensors Creation",
        desc: "Data detection",
        icon: Fingerprint,
        link: "/services/SensorsCreation",
      },
      {
        name: "Multimedia",
        desc: "Visual storytelling",
        icon: PenTool,
        link: "/services/Multimedia",
      },
       {
        name: "On-Demand",
        desc: "Content Management",
        icon: BookCopy,
        link: "/services/OnDemand",
      },
    ],
    gridCols: 3,
  },
  {
    name: "Industries",
    subMenu: [
      {
        name: "Automotive",
        desc: "Driving Innovation",
        icon: TrainFront,
        link: "/industries/automotive",
      },
      {
        name: "Education",
        desc: "Empowering Minds",
        icon: GraduationCap,
        link: "/industries/education",
      },
      {
        name: "Real Estate",
        desc: "Property Solutions",
        icon: Building,
        link: "/industries/real-estate",
      },
      {
        name: "Logistics",
        desc: "Efficient Delivery",
        icon: Forklift,
        link: "/industries/logistics",
      },
      {
        name: "Healthcare",
        desc: "Healing Care",
        icon: Bike,
        link: "/industries/healthcare",
      },
      {
        name: "Entertainment",
        desc: "Harmonic Expression",
        icon: Music,
        link: "/industries/entertainment",
      },
      {
        name: "SAAS",
        desc: "Cloud Solutions",
        icon: Cloudy,
        link: "/industries/saas",
      },
      {
        name: "Retails",
        desc: "Seamless Shopping",
        icon: WalletCards,
        link: "/industries/retail",
      },
      {
        name: "Corporation",
        desc: "Business strategy",
        icon: BookCopy,
        link: "/industries/corporation",
      },
      {
        name: "E-commerce",
        desc: "Digital Marketplace",
        icon: ShoppingCart,
        link: "/industries/ecommerce",
      },
      {
        name: "Fintech",
        desc: "Financial Innovation",
        icon: Landmark,
        link: "/industries/fintech",
      },
      {
        name: "On-Demand",
        desc: "Instant Access",
        icon: BookCopy,
        link: "/industries/on-demand",
      },
    ],
    gridCols: 3,
  },
  {
    name: "Insights",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
        link: "/insights/enterprise",
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
        link: "/insights/collaboration",
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
        link: "/insights/customers",
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
        link: "/insights/security",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Connect",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
        link: "/support/help",
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
        link: "/support/community",
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: TriangleAlert,
        link: "/support/emergency",
      },
    ],
    gridCols: 1,
  },
];
export const features = [
  {
    icon: PanelsTopLeft,
    text: "Custom 3D Website Development",
    description:
      "Build immersive, visually striking 3D websites tailored to your brand’s unique vision.",
  },
  {
    icon: LayoutPanelLeft,
    text: "3D Mobile App Solutions",
    description:
      "Design apps with stunning 3D interfaces for an engaging, modern user experience.",
  },
  {
    icon: BadgeIndianRupee,
    text: "3D Digital Marketing",
    description:
      "Use cutting-edge 3D visuals in campaigns to boost engagement and brand recognition.",
  },
  {
    icon: ShoppingCart,
    text: "E-Commerce Expertise",
    description:
      "Design online stores that drive traffic, increase sales, and enhance the customer shopping experience.",
  },
  {
    icon: Database,
    text: "Cloud Solutions",
    description:
      " Enable secure, scalable, and efficient cloud-based systems for your business operations.",
  },
  {
    icon: HandHelping,
    text: "Ongoing Support",
    description:
      "Ensure smooth operation with reliable, round-the-clock technical support and maintenance services",
  },
];
export const checklistItems = [
  {
    title: "Streamlined Processes",
    description:
      "Reduce complexity with automated workflows that save time and increase productivity.",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Enable seamless teamwork with tools that keep everyone on the same page, anytime, anywhere.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Harness analytics to make informed, impactful choices for continuous improvement.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Future-proof your operations with tools and systems that grow alongside your business.",
  },
  {
    title: "Enhanced Efficiency",
    description:
      "Achieve faster results with solutions that minimize manual efforts and maximize output.",
  },
];
export const persons = [
  {
    img: "https://unsplash.com/photos/a5XdeIb9Zso/download?force=true&w=590&h=640",
    title:
      "chief financial officer and executive vice president for global finance, aon plc",
    name: "Christa Davies",
  },
  {
    img: "https://unsplash.com/photos/oifclaPX5oM/download?force=true&w=590&h=640",
    title: "revenue and financial management, stripe",
    name: "Vivek Sharma",
  },
  {
    img: "https://unsplash.com/photos/fghYlu1ec2U/download?force=true&w=590&h=640",
    title: "head of product marketing, stripe",
    name: "Tanya Khakbaz",
  },
  {
    img: "https://unsplash.com/photos/a5XdeIb9Zso/download?force=true&w=590&h=640",
    title: "head of global sales, stripe",
    name: "Eileen O'Mara",
  },
  {
    img: "https://unsplash.com/photos/RDUyi9YXPxk/download?force=true&w=590&h=640",
    title: "founder, pulley",
    name: "Yin Wu",
  },
  {
    img: "https://unsplash.com/photos/TMZuhaL2kHo/download?force=true&w=590&h=640",
    title: "ceo and cofounder, crowdai",
    name: "Devaki Raj",
  },
  {
    img: "https://unsplash.com/photos/XO25cX2_0iE/download?force=true&w=590&h=640",
    title: "co-head of payments, wix",
    name: "Amit Sagiv",
  },
  {
    img: "https://unsplash.com/photos/a5XdeIb9Zso/download?force=true&w=590&h=640",
    title: "general partner, andreessen horowitz",
    name: "Angela Strange",
  },
];

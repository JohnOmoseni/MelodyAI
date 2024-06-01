import {
  ArrowPathIcon,
  Bars3Icon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  InformationCircleIcon,
  PencilSquareIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export const navItems = [
  {
    link: "Solutions",
    id: "solutions",
    icon: ChartBarIcon,
    dropdown: [
      {
        link: "Personalized AI",
        href: "/solutions/personalized",
        icon: ChartBarIcon,
      },
      {
        link: "Predictive Modeling",
        href: "/solutions/modeling",
        icon: CursorArrowRaysIcon,
      },
      {
        link: "Marketing and Sales",
        href: "/solutions/marketing",
        icon: ShieldCheckIcon,
      },

      {
        link: "Fraud and security",
        href: "/solutions/fraud",
        icon: ArrowPathIcon,
      },
      {
        link: "Cost Optimization",
        href: "/solutions/cost",
        icon: ArrowPathIcon,
      },
      {
        link: "Churn",
        href: "/solutions/churn",
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    link: "Resources",
    id: "resources",
    icon: Bars3Icon,
    dropdown: [
      {
        link: "Blog",
        href: "/resources/blogs",
        icon: PencilSquareIcon,
      },
      {
        link: "Events",
        href: "/resources/events",
        icon: CalendarDaysIcon,
      },
      {
        link: "Resource Library",
        href: "/resources/library",
        icon: BuildingLibraryIcon,
      },
    ],
  },
  {
    link: "Company",
    id: "company",
    icon: InformationCircleIcon,
    dropdown: [
      {
        link: "About us",
        href: "/about",
        icon: InformationCircleIcon,
      },
      {
        link: "Contact us",
        href: "/contact",
        icon: DevicePhoneMobileIcon,
      },
    ],
  },
];

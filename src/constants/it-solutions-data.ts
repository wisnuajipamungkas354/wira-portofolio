// src/constants/it-solutions-data.ts
import { StaticImageData } from "next/image";

const iconPlaceholder = "/icons/icon_ITSolutionsSection_1.svg";
const iconPlaceholder2 = "/icons/icon_ITSolutionsSection_2.svg";
const iconPlaceholder3 = "/icons/icon_ITSolutionsSection_3.svg";
const iconPlaceholder4 = "/icons/icon_ITSolutionsSection_4.svg";
const iconPlaceholder5 = "/icons/icon_ITSolutionsSection_5.svg";
const iconPlaceholder6 = "/icons/icon_ITSolutionsSection_6.svg";
const iconPlaceholder7 = "/icons/icon_ITSolutionsSection_7.svg";
const iconPlaceholder8 = "/icons/icon_ITSolutionsSection_8.svg";
const iconPlaceholder9 = "/icons/icon_ITSolutionsSection_9.svg";

export interface ITSolutionItem {
  id: string; // ID unik untuk key React
  iconSrc: string | StaticImageData; // Bisa string (untuk SVG path) atau StaticImageData (untuk Next/Image)
  title: string;
  description: string;
}

export const itSolutionsData: ITSolutionItem[] = [
  {
    id: "web-dev",
    iconSrc: iconPlaceholder, // Ganti dengan ikon spesifik jika ada
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
  },
  {
    id: "mobile-app",
    iconSrc: iconPlaceholder2,
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
  },
  {
    id: "ui-ux",
    iconSrc: iconPlaceholder3,
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces.",
  },
  {
    id: "cloud-solutions",
    iconSrc: iconPlaceholder4,
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth.",
  },
  {
    id: "software-development",
    iconSrc: iconPlaceholder5,
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
  },
  {
    id: "it-infrastructure",
    iconSrc: iconPlaceholder6,
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
  },
  {
    id: "cybersecurity-services",
    iconSrc: iconPlaceholder7,
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
  },
  {
    id: "qa-solutions",
    iconSrc: iconPlaceholder8,
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
  },
  {
    id: "it-consulting-support",
    iconSrc: iconPlaceholder9,
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
  },
];

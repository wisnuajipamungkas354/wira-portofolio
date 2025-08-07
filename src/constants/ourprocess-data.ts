// import { StaticImageData } from 'next/image'; // Tidak perlu lagi import StaticImageData jika tidak ada gambar

// Hapus import ikon jika tidak digunakan lagi
// import IconDiscovery from '@/public/icons/discovery.png';
// import IconPlanning from '@/public/icons/planning.png';
// import IconDesign from '@/public/icons/design.png';
// import IconDevelopment from '@/public/icons/development.png';
// import IconTesting from '@/public/icons/testing.png';
// import IconLaunch from '@/public/icons/launch.png';

// Definisikan interface untuk struktur setiap item proses
export interface ProcessDataItem {
  index: number;
  title: string;
  subtitle: string;
  description: string; // Tetap ada jika Anda mau deskripsi lebih panjang
  // Hapus: logoImage?: StaticImageData; // Hapus ini
}

export const ourprocessData: ProcessDataItem[] = [
  {
    index: 1,
    title: "Discovery & Consultation",
    subtitle: "Understand Your Needs & Goals",
    description:
      "We begin by deeply understanding your business, challenges, and objectives through thorough research and direct consultations.",
    // Hapus: logoImage: IconDiscovery,
  },
  {
    index: 2,
    title: "Planning & Strategy",
    subtitle: "Build a Clear, Scalable Roadmap",
    description:
      "Based on discovery, we craft a detailed strategy and technical roadmap that outlines every step for successful execution.",
    // Hapus: logoImage: IconPlanning,
  },
  {
    index: 3,
    title: "Design & Prototyping",
    subtitle: "Craft UX That Converts",
    description:
      "Our design experts create intuitive user experiences and compelling interfaces, bringing your vision to life through prototypes.",
    // Hapus: logoImage: IconDesign,
  },
  {
    index: 4,
    title: "Development & Implementation",
    subtitle: "Deliver With Speed & Precision",
    description:
      "Our skilled developers build robust and high-performing solutions, ensuring every line of code meets industry best practices.",
    // Hapus: logoImage: IconDevelopment,
  },
  {
    index: 5,
    title: "Testing & Optimization",
    subtitle: "Ensure Quality at Every Step",
    description:
      "Rigorous testing, quality assurance, and continuous optimization are performed to guarantee a flawless and efficient solution.",
    // Hapus: logoImage: IconTesting,
  },
  {
    index: 6,
    title: "Launch & Growth",
    subtitle: "Scale, Measure & Improve Continuously",
    description:
      "We ensure a smooth deployment, provide ongoing support, and implement strategies to help your solution scale and achieve long-term growth.",
    // Hapus: logoImage: IconLaunch,
  },
];

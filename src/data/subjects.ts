import type { Semester } from "./types";

export const siteConfig = {
  name: "BCA Study Portal",
  tagline: "Learn smarter. Find your study material faster.",
  description:
    "Access semester-wise notes, PDFs, presentations, assignments, exam papers, and useful learning resources in one place.",
  aboutDescription:
    "This portal is created to make BCA study resources easier to discover and access. It brings semester-wise study material, exam papers, assignments, and useful learning resources into one organized place.",
  aboutFeatures: [
    "No login required",
    "Free access",
    "Public resources",
    "Student-focused",
  ],
  footerTagline: "Learn smarter. Find resources faster.",
  year: "2026",
  githubUrl: "https://github.com/",
  email: "contact@bcastudyportal.edu",
};

export const stats = [
  { label: "Semesters", value: 6, suffix: "" },
  { label: "Subjects", value: 30, suffix: "+" },
  { label: "Study Materials", value: 0, suffix: "", dynamic: true },
  { label: "Exam Papers", value: 0, suffix: "", dynamic: true },
  { label: "Quick Resources", value: 0, suffix: "", dynamic: true },
];

export const semesters: Semester[] = [
  {
    id: 1,
    name: "Semester 1",
    description: "Foundation of Computer Science",
  },
  {
    id: 2,
    name: "Semester 2",
    description: "Core Programming & Systems",
  },
  {
    id: 3,
    name: "Semester 3",
    description: "Advanced Programming & Networks",
  },
  {
    id: 4,
    name: "Semester 4",
    description: "Modern Languages & Technologies",
  },
  {
    id: 5,
    name: "Semester 5",
    description: "Cloud, Security & Analytics",
  },
  {
    id: 6,
    name: "Semester 6",
    description: "AI, ML & Emerging Technologies",
  },
];

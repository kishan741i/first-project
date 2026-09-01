export type ResourceType =
  | "PDF"
  | "DOC"
  | "DOCX"
  | "PPT"
  | "PPTX"
  | "ZIP"
  | "CODE"
  | "LINK";

export type ExamType = "Internal" | "Final" | "Assignment" | "Practical";

export interface Semester {
  id: number;
  name: string;
  description: string;
}

export interface Subject {
  id: string;
  semester: number;
  name: string;
  description: string;
  icon?: string;
}

export interface Resource {
  id: string;
  semester: number;
  subject: string;
  title: string;
  type: ResourceType;
  description: string;
  driveUrl: string;
  downloadable: boolean;
  date?: string;
}

export interface ExamPaper {
  id: string;
  semester: number;
  subject: string;
  examType: ExamType;
  title: string;
  year: string;
  type: ResourceType;
  driveUrl: string;
  description?: string;
}

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
}

export interface SearchResult {
  type: "semester" | "subject" | "resource" | "examPaper" | "quickLink";
  id: string;
  title: string;
  description: string;
  meta: string;
  link: string;
}

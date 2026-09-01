import { semesters } from "../data/siteConfig";
import { subjects } from "../data/subjects";
import { resources } from "../data/resources";
import { examPapers } from "../data/examPapers";
import { quickLinks } from "../data/quickLinks";
import type { SearchResult, ResourceType } from "../data/types";

export function searchAll(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const s of semesters) {
    if (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      String(s.id) === q
    ) {
      results.push({
        type: "semester",
        id: String(s.id),
        title: s.name,
        description: s.description,
        meta: "Semester",
        link: `/semesters/${s.id}`,
      });
    }
  }

  for (const sub of subjects) {
    if (
      sub.name.toLowerCase().includes(q) ||
      sub.description.toLowerCase().includes(q)
    ) {
      results.push({
        type: "subject",
        id: sub.id,
        title: sub.name,
        description: sub.description,
        meta: `Semester ${sub.semester} · Subject`,
        link: `/semesters/${sub.semester}/${sub.id}`,
      });
    }
  }

  for (const r of resources) {
    if (
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.subject.toLowerCase().includes(q) ||
      r.type.toLowerCase().includes(q)
    ) {
      results.push({
        type: "resource",
        id: r.id,
        title: r.title,
        description: r.description,
        meta: `Sem ${r.semester} · ${r.subject} · ${r.type}`,
        link: `/semesters/${r.semester}`,
      });
    }
  }

  for (const e of examPapers) {
    if (
      e.title.toLowerCase().includes(q) ||
      e.subject.toLowerCase().includes(q) ||
      e.examType.toLowerCase().includes(q) ||
      e.year.includes(q)
    ) {
      results.push({
        type: "examPaper",
        id: e.id,
        title: e.title,
        description: e.description ?? `${e.examType} · ${e.subject}`,
        meta: `Sem ${e.semester} · ${e.examType} · ${e.year}`,
        link: `/exam-papers?semester=${e.semester}`,
      });
    }
  }

  for (const ql of quickLinks) {
    if (
      ql.title.toLowerCase().includes(q) ||
      ql.description.toLowerCase().includes(q) ||
      ql.category.toLowerCase().includes(q)
    ) {
      results.push({
        type: "quickLink",
        id: ql.id,
        title: ql.title,
        description: ql.description,
        meta: `Quick Link · ${ql.category}`,
        link: ql.url,
      });
    }
  }

  return results;
}

export function highlightMatch(text: string, query: string): string {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

export function getResourceCount(semester: number, subject?: string): number {
  return resources.filter(
    (r) => r.semester === semester && (subject ? r.subject === subject : true)
  ).length;
}

export function getExamPaperCount(semester: number): number {
  return examPapers.filter((e) => e.semester === semester).length;
}

export function getTotalResources(): number {
  return resources.length;
}

export function getTotalExamPapers(): number {
  return examPapers.length;
}

export function getTotalQuickLinks(): number {
  return quickLinks.length;
}

export function getSubjectsBySemester(semester: number) {
  return subjects.filter((s) => s.semester === semester);
}

export function getResourcesBySubject(semester: number, subject: string) {
  return resources.filter((r) => r.semester === semester && r.subject === subject);
}

export function getExamPapersBySemester(semester: number) {
  return examPapers.filter((e) => e.semester === semester);
}

export function isDriveUrlValid(url: string): boolean {
  return Boolean(url) && url.startsWith("https://drive.google.com/") && url.length > "https://drive.google.com/".length;
}

export const resourceTypeLabels: Record<ResourceType, string> = {
  PDF: "PDF",
  DOC: "DOC",
  DOCX: "DOCX",
  PPT: "PPT",
  PPTX: "PPTX",
  ZIP: "ZIP",
  CODE: "CODE",
  LINK: "LINK",
};

export const resourceTypeColors: Record<ResourceType, string> = {
  PDF: "text-red-400 bg-red-500/10 border-red-500/20",
  DOC: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  DOCX: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  PPT: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  PPTX: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  ZIP: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  CODE: "text-green-400 bg-green-500/10 border-green-500/20",
  LINK: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

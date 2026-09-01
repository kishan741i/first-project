import type { ExamPaper } from "./types";

/**
 * All exam papers organized by semester and exam type.
 * To add a new exam paper, simply add a new object to this array.
 * Replace the driveUrl with your actual Google Drive share link.
 */
export const examPapers: ExamPaper[] = [
  // ── Semester 1 ──
  { id: "s1-int-1", semester: 1, subject: "C Language", examType: "Internal", title: "Internal Exam 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "C Language internal assessment 1." },
  { id: "s1-int-2", semester: 1, subject: "Computer Fundamentals", examType: "Internal", title: "Internal Exam 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Computer Fundamentals internal assessment." },
  { id: "s1-final", semester: 1, subject: "C Language", examType: "Final", title: "Final Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Semester 1 final exam paper." },
  { id: "s1-assign-1", semester: 1, subject: "Mathematics", examType: "Assignment", title: "Assignment 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Mathematics assignment 1." },
  { id: "s1-assign-2", semester: 1, subject: "Digital Electronics", examType: "Assignment", title: "Assignment 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Digital Electronics assignment." },
  { id: "s1-practical", semester: 1, subject: "C Language", examType: "Practical", title: "Practical Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "C Language practical exam." },

  // ── Semester 2 ──
  { id: "s2-int-1", semester: 2, subject: "Data Structures", examType: "Internal", title: "Internal Exam 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Data Structures internal assessment." },
  { id: "s2-int-2", semester: 2, subject: "DBMS", examType: "Internal", title: "Internal Exam 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "DBMS internal assessment." },
  { id: "s2-final", semester: 2, subject: "Operating Systems", examType: "Final", title: "Final Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Semester 2 final exam paper." },
  { id: "s2-assign-1", semester: 2, subject: "DBMS", examType: "Assignment", title: "Assignment 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "DBMS assignment." },
  { id: "s2-assign-2", semester: 2, subject: "Data Structures", examType: "Assignment", title: "Assignment 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Data Structures assignment." },
  { id: "s2-practical", semester: 2, subject: "DBMS", examType: "Practical", title: "Practical Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "DBMS practical exam." },

  // ── Semester 3 ──
  { id: "s3-int-1", semester: 3, subject: "Java", examType: "Internal", title: "Internal Exam 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Java internal assessment." },
  { id: "s3-int-2", semester: 3, subject: "Web Development", examType: "Internal", title: "Internal Exam 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Web Development internal assessment." },
  { id: "s3-final", semester: 3, subject: "Java", examType: "Final", title: "Final Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Semester 3 final exam paper." },
  { id: "s3-assign-1", semester: 3, subject: "Computer Networks", examType: "Assignment", title: "Assignment 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Computer Networks assignment." },
  { id: "s3-assign-2", semester: 3, subject: "Software Engineering", examType: "Assignment", title: "Assignment 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Software Engineering assignment." },
  { id: "s3-practical", semester: 3, subject: "Java", examType: "Practical", title: "Practical Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Java practical exam." },

  // ── Semester 4 ──
  { id: "s4-int-1", semester: 4, subject: "Python", examType: "Internal", title: "Internal Exam 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Python internal assessment." },
  { id: "s4-int-2", semester: 4, subject: "Advanced Java", examType: "Internal", title: "Internal Exam 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Advanced Java internal assessment." },
  { id: "s4-final", semester: 4, subject: "Python", examType: "Final", title: "Final Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Semester 4 final exam paper." },
  { id: "s4-assign-1", semester: 4, subject: "Web Technologies", examType: "Assignment", title: "Assignment 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Web Technologies assignment." },
  { id: "s4-assign-2", semester: 4, subject: "Computer Graphics", examType: "Assignment", title: "Assignment 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Computer Graphics assignment." },
  { id: "s4-practical", semester: 4, subject: "Python", examType: "Practical", title: "Practical Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Python practical exam." },

  // ── Semester 5 ──
  { id: "s5-int-1", semester: 5, subject: "Cloud Computing", examType: "Internal", title: "Internal Exam 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Cloud Computing internal assessment." },
  { id: "s5-int-2", semester: 5, subject: "Cyber Security", examType: "Internal", title: "Internal Exam 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Cyber Security internal assessment." },
  { id: "s5-final", semester: 5, subject: "Cloud Computing", examType: "Final", title: "Final Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Semester 5 final exam paper." },
  { id: "s5-assign-1", semester: 5, subject: "Data Analytics", examType: "Assignment", title: "Assignment 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Data Analytics assignment." },
  { id: "s5-assign-2", semester: 5, subject: "Advanced Web Development", examType: "Assignment", title: "Assignment 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Advanced Web Development assignment." },
  { id: "s5-practical", semester: 5, subject: "Cloud Computing", examType: "Practical", title: "Practical Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Cloud Computing practical exam." },

  // ── Semester 6 ──
  { id: "s6-int-1", semester: 6, subject: "Artificial Intelligence", examType: "Internal", title: "Internal Exam 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "AI internal assessment." },
  { id: "s6-int-2", semester: 6, subject: "Machine Learning", examType: "Internal", title: "Internal Exam 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "ML internal assessment." },
  { id: "s6-final", semester: 6, subject: "Artificial Intelligence", examType: "Final", title: "Final Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Semester 6 final exam paper." },
  { id: "s6-assign-1", semester: 6, subject: "Project Development", examType: "Assignment", title: "Assignment 1", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Project Development assignment." },
  { id: "s6-assign-2", semester: 6, subject: "Mobile Application Development", examType: "Assignment", title: "Assignment 2", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "Mobile App Dev assignment." },
  { id: "s6-practical", semester: 6, subject: "Machine Learning", examType: "Practical", title: "Practical Exam", year: "2025", type: "PDF", driveUrl: "https://drive.google.com/", description: "ML practical exam." },
];

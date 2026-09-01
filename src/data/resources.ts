import type { Resource } from "./types";

/**
 * All study material resources.
 * To add a new resource, simply add a new object to this array.
 * Replace the driveUrl with your actual Google Drive share link.
 */
export const resources: Resource[] = [
  // ── Semester 1: C Language ──
  { id: "c-unit-01", semester: 1, subject: "C Language", title: "C Language Unit 1 Notes", type: "PDF", description: "Introduction to C programming, history, and structure.", driveUrl: "https://drive.google.com/", downloadable: true, date: "2025-01-15" },
  { id: "c-unit-02", semester: 1, subject: "C Language", title: "C Language Unit 2 Notes", type: "PDF", description: "Variables, data types, and operators in C.", driveUrl: "https://drive.google.com/", downloadable: true, date: "2025-01-20" },
  { id: "c-imp-qs", semester: 1, subject: "C Language", title: "C Language Important Questions", type: "PDF", description: "Frequently asked questions for exam preparation.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "c-practical", semester: 1, subject: "C Language", title: "C Programming Practical", type: "DOCX", description: "Lab exercises and practical assignments.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "c-presentation", semester: 1, subject: "C Language", title: "C Language Presentation", type: "PPT", description: "Slide deck covering C fundamentals.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "c-code-samples", semester: 1, subject: "C Language", title: "C Code Samples", type: "CODE", description: "Example programs with comments.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 1: Computer Fundamentals ──
  { id: "cf-unit-01", semester: 1, subject: "Computer Fundamentals", title: "Computer Fundamentals Unit 1", type: "PDF", description: "Introduction to computer systems.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "cf-notes", semester: 1, subject: "Computer Fundamentals", title: "Computer Fundamentals Full Notes", type: "PDF", description: "Complete notes covering all units.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "cf-presentation", semester: 1, subject: "Computer Fundamentals", title: "Computer Fundamentals Presentation", type: "PPT", description: "Overview of computer architecture.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 1: Mathematics ──
  { id: "math1-unit-01", semester: 1, subject: "Mathematics", title: "Mathematics Unit 1 Notes", type: "PDF", description: "Sets, relations, and functions.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "math1-imp-qs", semester: 1, subject: "Mathematics", title: "Mathematics Important Questions", type: "PDF", description: "Key problems for exam practice.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 1: Digital Electronics ──
  { id: "de-unit-01", semester: 1, subject: "Digital Electronics", title: "Digital Electronics Unit 1", type: "PDF", description: "Logic gates and Boolean algebra.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "de-notes", semester: 1, subject: "Digital Electronics", title: "Digital Electronics Notes", type: "PDF", description: "Complete notes on digital circuits.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 1: Communication Skills ──
  { id: "comm-notes", semester: 1, subject: "Communication Skills", title: "Communication Skills Notes", type: "PDF", description: "Professional communication techniques.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 2: Data Structures ──
  { id: "ds-unit-01", semester: 2, subject: "Data Structures", title: "Data Structures Unit 1 Notes", type: "PDF", description: "Introduction to data structures and arrays.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "ds-unit-02", semester: 2, subject: "Data Structures", title: "Linked Lists Notes", type: "PDF", description: "Singly, doubly, and circular linked lists.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "ds-trees", semester: 2, subject: "Data Structures", title: "Trees and Graphs", type: "PDF", description: "Binary trees, BST, traversals, and graph algorithms.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "ds-code", semester: 2, subject: "Data Structures", title: "DS Code Examples", type: "CODE", description: "Implementation of key data structures.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 2: DBMS ──
  { id: "dbms-001", semester: 2, subject: "DBMS", title: "DBMS Unit 1 Notes", type: "PDF", description: "Database management system introduction.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "dbms-002", semester: 2, subject: "DBMS", title: "SQL Notes", type: "PDF", description: "DDL, DML, DCL, and TCL commands.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "dbms-003", semester: 2, subject: "DBMS", title: "Normalization Notes", type: "PDF", description: "1NF, 2NF, 3NF, and BCNF explained.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "dbms-004", semester: 2, subject: "DBMS", title: "DBMS Practical", type: "DOCX", description: "SQL queries and lab exercises.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 2: Operating Systems ──
  { id: "os-unit-01", semester: 2, subject: "Operating Systems", title: "OS Unit 1 Notes", type: "PDF", description: "Introduction to operating systems.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "os-process", semester: 2, subject: "Operating Systems", title: "Process Management Notes", type: "PDF", description: "Process scheduling and IPC.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 2: Mathematics ──
  { id: "math2-notes", semester: 2, subject: "Mathematics", title: "Discrete Mathematics Notes", type: "PDF", description: "Graph theory, combinatorics, and logic.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 2: Computer Organization ──
  { id: "co-notes", semester: 2, subject: "Computer Organization", title: "Computer Organization Notes", type: "PDF", description: "CPU, memory hierarchy, and I/O organization.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 3: Java ──
  { id: "java-unit-01", semester: 3, subject: "Java", title: "Java Unit 1 Notes", type: "PDF", description: "Introduction to Java and OOP concepts.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "java-unit-02", semester: 3, subject: "Java", title: "Java Inheritance & Polymorphism", type: "PDF", description: "Inheritance, interfaces, and polymorphism.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "java-code", semester: 3, subject: "Java", title: "Java Code Examples", type: "CODE", description: "Sample Java programs and projects.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "java-presentation", semester: 3, subject: "Java", title: "Java Presentation", type: "PPT", description: "OOP principles slide deck.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 3: Web Development ──
  { id: "web-html", semester: 3, subject: "Web Development", title: "HTML & CSS Notes", type: "PDF", description: "Web page structure and styling fundamentals.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "web-js", semester: 3, subject: "Web Development", title: "JavaScript Notes", type: "PDF", description: "DOM manipulation, events, and ES6+.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "web-code", semester: 3, subject: "Web Development", title: "Web Dev Code Examples", type: "CODE", description: "Frontend project starter files.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 3: Computer Networks ──
  { id: "cn-unit-01", semester: 3, subject: "Computer Networks", title: "CN Unit 1 Notes", type: "PDF", description: "OSI model and TCP/IP stack.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "cn-protocols", semester: 3, subject: "Computer Networks", title: "Network Protocols Notes", type: "PDF", description: "HTTP, FTP, SMTP, DNS, and more.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 3: Software Engineering ──
  { id: "se-notes", semester: 3, subject: "Software Engineering", title: "SE Notes", type: "PDF", description: "SDLC models, agile, and testing.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 3: Database Systems ──
  { id: "dbs-notes", semester: 3, subject: "Database Systems", title: "Advanced DB Notes", type: "PDF", description: "ER diagrams, normalization, and transactions.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 4: Python ──
  { id: "py-unit-01", semester: 4, subject: "Python", title: "Python Unit 1 Notes", type: "PDF", description: "Python basics, syntax, and data types.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "py-unit-02", semester: 4, subject: "Python", title: "Python OOP Notes", type: "PDF", description: "Classes, objects, and inheritance in Python.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "py-code", semester: 4, subject: "Python", title: "Python Code Examples", type: "CODE", description: "Sample scripts and mini-projects.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 4: Advanced Java ──
  { id: "advjava-notes", semester: 4, subject: "Advanced Java", title: "Advanced Java Notes", type: "PDF", description: "JDBC, servlets, and JSP.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "advjava-code", semester: 4, subject: "Advanced Java", title: "Advanced Java Code", type: "CODE", description: "Web app examples with servlets.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 4: Web Technologies ──
  { id: "webtech-notes", semester: 4, subject: "Web Technologies", title: "Web Technologies Notes", type: "PDF", description: "Frameworks, REST APIs, and modern web tools.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 4: Operating Systems ──
  { id: "os2-notes", semester: 4, subject: "Operating Systems", title: "Advanced OS Notes", type: "PDF", description: "Deadlocks, virtual memory, and file systems.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 4: Computer Graphics ──
  { id: "cg-notes", semester: 4, subject: "Computer Graphics", title: "Computer Graphics Notes", type: "PDF", description: "Line drawing, transformations, and rendering.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 5: Cloud Computing ──
  { id: "cloud-notes", semester: 5, subject: "Cloud Computing", title: "Cloud Computing Notes", type: "PDF", description: "IaaS, PaaS, SaaS and deployment models.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "cloud-presentation", semester: 5, subject: "Cloud Computing", title: "Cloud Computing Presentation", type: "PPT", description: "Overview of cloud service providers.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 5: Cyber Security ──
  { id: "sec-notes", semester: 5, subject: "Cyber Security", title: "Cyber Security Notes", type: "PDF", description: "Threats, attacks, and defense mechanisms.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 5: Data Analytics ──
  { id: "da-notes", semester: 5, subject: "Data Analytics", title: "Data Analytics Notes", type: "PDF", description: "Data collection, cleaning, and visualization.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 5: Advanced Web Development ──
  { id: "awd-notes", semester: 5, subject: "Advanced Web Development", title: "Advanced Web Dev Notes", type: "PDF", description: "Full-stack frameworks and architecture.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "awd-code", semester: 5, subject: "Advanced Web Development", title: "Full-Stack Project Code", type: "CODE", description: "MERN stack example project.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 5: Software Engineering ──
  { id: "se2-notes", semester: 5, subject: "Software Engineering", title: "SE Project Management Notes", type: "PDF", description: "Project planning, testing, and deployment.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 6: Artificial Intelligence ──
  { id: "ai-notes", semester: 6, subject: "Artificial Intelligence", title: "AI Notes", type: "PDF", description: "Search algorithms, heuristics, and knowledge representation.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 6: Machine Learning ──
  { id: "ml-notes", semester: 6, subject: "Machine Learning", title: "ML Notes", type: "PDF", description: "Supervised, unsupervised, and reinforcement learning.", driveUrl: "https://drive.google.com/", downloadable: true },
  { id: "ml-code", semester: 6, subject: "Machine Learning", title: "ML Code Examples", type: "CODE", description: "Python notebooks with scikit-learn and TensorFlow.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 6: Project Development ──
  { id: "proj-guide", semester: 6, subject: "Project Development", title: "Project Development Guide", type: "PDF", description: "Capstone project planning and documentation.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 6: Mobile Application Development ──
  { id: "mad-notes", semester: 6, subject: "Mobile Application Development", title: "Mobile App Dev Notes", type: "PDF", description: "Android development and cross-platform tools.", driveUrl: "https://drive.google.com/", downloadable: true },

  // ── Semester 6: Emerging Technologies ──
  { id: "et-notes", semester: 6, subject: "Emerging Technologies", title: "Emerging Technologies Notes", type: "PDF", description: "IoT, blockchain, AR/VR, and future trends.", driveUrl: "https://drive.google.com/", downloadable: true },
];

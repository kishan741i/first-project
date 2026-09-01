import type { QuickLink } from "./types";

/**
 * External learning resources.
 * To add a new resource, simply add a new object to this array.
 */
export const quickLinks: QuickLink[] = [
  { id: "mdn", title: "MDN Web Docs", description: "Comprehensive web development documentation by Mozilla.", category: "Web Development", url: "https://developer.mozilla.org/" },
  { id: "w3schools", title: "W3Schools", description: "Tutorials and references for web technologies.", category: "Web Development", url: "https://www.w3schools.com/" },
  { id: "geeksforgeeks", title: "GeeksforGeeks", description: "Computer science tutorials, articles, and practice problems.", category: "Practice", url: "https://www.geeksforgeeks.org/" },
  { id: "java-docs", title: "Java Documentation", description: "Official Oracle Java documentation and API reference.", category: "Documentation", url: "https://docs.oracle.com/en/java/" },
  { id: "python-docs", title: "Python Documentation", description: "Official Python language documentation and tutorials.", category: "Documentation", url: "https://docs.python.org/" },
  { id: "github", title: "GitHub", description: "Host and review code, manage projects, and build software.", category: "Tools", url: "https://github.com/" },
  { id: "stackoverflow", title: "Stack Overflow", description: "Q&A community for programmers to solve coding problems.", category: "Reference", url: "https://stackoverflow.com/" },
  { id: "freecodecamp", title: "freeCodeCamp", description: "Free coding courses and certifications.", category: "Practice", url: "https://www.freecodecamp.org/" },
  { id: "programiz", title: "Programiz", description: "Tutorials on programming, data structures, and algorithms.", category: "Programming", url: "https://www.programiz.com/" },
  { id: "tutorialspoint", title: "TutorialsPoint", description: "Tutorials on programming, CS theory, and technologies.", category: "Reference", url: "https://www.tutorialspoint.com/" },
  { id: "hackerrank", title: "HackerRank", description: "Practice coding challenges and prepare for interviews.", category: "Practice", url: "https://www.hackerrank.com/" },
  { id: "leetcode", title: "LeetCode", description: "Coding interview practice and algorithm challenges.", category: "Practice", url: "https://leetcode.com/" },
  { id: "khan-academy", title: "Khan Academy", description: "Free courses on math, CS, and more.", category: "Computer Science", url: "https://www.khanacademy.org/computing" },
  { id: "w3c", title: "W3C Standards", description: "Web standards and specifications by W3C.", category: "Documentation", url: "https://www.w3.org/standards/" },
  { id: "codepen", title: "CodePen", description: "Online code editor for front-end development.", category: "Tools", url: "https://codepen.io/" },
  { id: "replit", title: "Replit", description: "Online IDE for coding in multiple languages.", category: "Tools", url: "https://replit.com/" },
  { id: "cplusplus", title: "cplusplus.com", description: "C and C++ language reference and tutorials.", category: "Programming", url: "https://cplusplus.com/" },
  { id: "digital-ocean", title: "DigitalOcean Tutorials", description: "Developer tutorials on web dev, cloud, and sysadmin.", category: "Web Development", url: "https://www.digitalocean.com/community/tutorials" },
];

export const quickLinkCategories = [
  "All",
  "Programming",
  "Web Development",
  "Computer Science",
  "Documentation",
  "Practice",
  "Tools",
  "Reference",
];

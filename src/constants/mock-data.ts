import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamental concepts of programming, algorithms, and data structures for beginners.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced integration techniques, sequences, series, and applications of calculus.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG150",
    name: "Literature and Composition",
    department: "English",
    description: "Exploration of literary works and development of writing skills.",
    createdAt: new Date().toISOString(),
  },
];
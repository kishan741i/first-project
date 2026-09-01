import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SemestersPage from "./pages/SemesterPage";
import SemesterDetailPage from "./pages/SemesterDetailPage";
import SubjectDetailPage from "./pages/SubjectDetailPage";
import ExamPapersPage from "./pages/ExamPapersPage";
import QuickLinksPage from "./pages/QuickLinksPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink-950">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/semesters" element={<SemestersPage />} />
          <Route path="/semesters/:semesterId" element={<SemesterDetailPage />} />
          <Route path="/semesters/:semesterId/:subjectId" element={<SubjectDetailPage />} />
          <Route path="/exam-papers" element={<ExamPapersPage />} />
          <Route path="/quick-links" element={<QuickLinksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

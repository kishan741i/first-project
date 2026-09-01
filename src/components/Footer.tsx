import { Link } from "react-router-dom";
import { GraduationCap, Github, Mail } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Semesters", path: "/semesters" },
  { label: "Exam Papers", path: "/exam-papers" },
  { label: "Quick Links", path: "/quick-links" },
  { label: "About", path: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/50 bg-ink-900/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent-600/20 border border-accent-500/30 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent-400" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              {siteConfig.footerTagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-accent-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-accent-400 text-sm transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-accent-400 text-sm transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-700/40">
          <p className="text-slate-500 text-sm text-center">
            © {siteConfig.year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

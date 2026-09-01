import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-ink-800 border border-ink-600 flex items-center justify-center mx-auto mb-6">
        <FileText size={32} className="text-slate-500" />
      </div>
      <h1 className="font-display text-3xl font-bold text-white mb-2">Page Not Found</h1>
      <p className="text-slate-400 mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

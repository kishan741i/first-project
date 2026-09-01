import { CheckCircle2, BookOpen } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <PageHeader title="About the Study Portal" />

      <div className="card p-6 md:p-8">
        <div className="w-14 h-14 rounded-2xl bg-accent-600/15 border border-accent-500/25 flex items-center justify-center mb-5">
          <BookOpen size={28} className="text-accent-400" />
        </div>

        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {siteConfig.aboutDescription}
        </p>

        <h3 className="text-white font-semibold text-lg mb-4">Key Features</h3>
        <ul className="space-y-3">
          {siteConfig.aboutFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-400 shrink-0" />
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ExternalLink, Cpu, Layout, Zap, ShieldCheck } from "lucide-react";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { useAuthStore } from "@/features/auth/store/authStore";

const LandingPage = () => {
  const isLoggedIn = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Zap size={18} />
          </div>
          ExcelVisualizer
        </div>
        {isLoggedIn ? (
          <LogoutButton />
        ) : (
          <Link
            to="/login"
            className="px-6 py-2 rounded-lg bg-secondary border border-secondary text-secondary-foreground font-medium hover:bg-secondary/80 hover:text-white transition-all"
          >
            Sign In
          </Link>
        )}
      </nav>
      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden pt-16 pb-12 lg:pt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-primary/5 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-secondary text-primary text-sm font-medium mb-6">
            <Zap size={14} /> <span>Excel Visualizer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6">
            Excel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
              Visualizer
            </span>{" "}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            A high-performance foundation featuring Zustand, TanStack Query, and
            Tailwind CSS. Pre-configured for scale, speed, and developer
            happiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/login"
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-all flex items-center gap-2"
            >
              Get Started <Zap size={18} />
            </Link>
            <a
              href="https://github.com/jaylogalam/reactTS"
              className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-semibold transition-all flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* --- SETUP / TERMINAL SECTION --- */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/30 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">
              setup.sh
            </span>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
            <div className="flex gap-3">
              <span className="text-primary">1</span>
              <span className="text-muted-foreground">
                # Update dependencies
              </span>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="text-primary">2</span>
              <span className="text-green-400">npx npm-check-updates -u</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">3</span>
              <span className="text-muted-foreground"># Install & Start</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary">4</span>
              <span className="text-green-400">npm install && npm run dev</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Core Libraries */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Core Stack
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                • <strong className="text-foreground">Zustand:</strong> State
                management
              </li>
              <li>
                • <strong className="text-foreground">TanStack Query:</strong>{" "}
                Data fetching
              </li>
              <li>
                • <strong className="text-foreground">React Router:</strong>{" "}
                Client navigation
              </li>
            </ul>
          </div>

          {/* Styling */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <Layout size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Styling Utility
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                • <strong className="text-foreground">Tailwind CSS:</strong>{" "}
                Utility-first CSS
              </li>
              <li>
                • <strong className="text-foreground">CVA:</strong> Class
                variance authority
              </li>
              <li>
                • <strong className="text-foreground">Tailwind Merge:</strong>{" "}
                Smart class merging
              </li>
            </ul>
          </div>

          {/* Tooling */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Code Quality
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                • <strong className="text-foreground">ESLint:</strong>{" "}
                Industry-standard linting
              </li>
              <li>
                • <strong className="text-foreground">TypeScript:</strong>{" "}
                Strict type checking
              </li>
              <li>
                • <strong className="text-foreground">Vite:</strong> Instant HMR
                & bundling
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

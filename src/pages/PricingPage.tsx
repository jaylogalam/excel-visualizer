import { Link } from "react-router-dom";
import { Zap, Sparkles, TrendingUp } from "lucide-react";
import ProfileIcon from "@/features/auth/components/ProfileIcon";
import { useSession } from "@/features/auth/services";
import { SubscriptionCard } from "@/features/subscriptions/components/SubscriptionCard";

const PricingPage = () => {
  const session = useSession();
  const isLoggedIn = !!session.data?.user;

  const plans = [
    {
      name: "Product Pro",
      price: "$10.00",
      period: "Per month",
      description:
        "Perfect for individuals and small teams getting started with data visualization",
      features: [
        "Up to 50 Excel file uploads per month",
        "Basic chart types (Bar, Line, Pie)",
        "Real-time data visualization",
        "Export charts as PNG/SVG",
        "Email support",
        "7-day data history",
        "Mobile-responsive dashboards",
      ],
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      mostPopular: false,
    },
    {
      name: "Product Pro+",
      price: "$50.00",
      period: "Per month",
      description: "Advanced features for power users and growing businesses",
      features: [
        "Unlimited Excel file uploads",
        "All chart types + custom visualizations",
        "Real-time collaboration",
        "Advanced data analytics & insights",
        "API access for integrations",
        "Priority 24/7 support",
        "Unlimited data history",
        "Custom branding & white-label",
        "Advanced security & encryption",
        "Multi-user workspace",
      ],
      icon: Sparkles,
      color: "from-violet-500 to-purple-500",
      mostPopular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity"
        >
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Zap size={18} />
          </div>
          ExcelVisualizer
        </Link>
        <ProfileIcon />
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-primary/5 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-secondary text-primary text-sm font-medium mb-6">
            <TrendingUp size={14} /> <span>Pricing Plans</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
              Perfect Plan
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            Transform your Excel data into stunning, interactive visualizations.
            Choose the plan that fits your needs and start creating beautiful
            charts today.
          </p>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="container mx-auto px-6 py-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            return (
              <SubscriptionCard
                key={index}
                name={plan.name}
                description={plan.description}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                isLoggedIn={isLoggedIn}
                mostPopular={plan.mostPopular}
              />
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Questions?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              Contact our sales team
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

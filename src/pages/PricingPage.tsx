import { Link } from "react-router-dom";
import { Check, Zap, Sparkles, TrendingUp } from "lucide-react";
import ProfileIcon from "@/features/auth/components/ProfileIcon";
import { useSession } from "@/features/auth/services";

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
      highlighted: false,
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
      highlighted: true,
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
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`
                  relative rounded-3xl transition-all duration-500 group flex flex-col
                  ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40"
                      : "bg-card border border-border hover:border-primary/50 shadow-xl"
                  }
                  hover:-translate-y-2
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center
                      bg-gradient-to-br ${plan.color} text-white shadow-lg
                    `}
                    >
                      <Icon size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {plan.name}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 min-h-[2.5rem]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">USD</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">
                      {plan.period}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`
                          mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                          ${
                            plan.highlighted
                              ? "bg-gradient-to-br from-violet-500 to-purple-500"
                              : "bg-primary/10"
                          }
                        `}
                        >
                          <Check
                            size={14}
                            className={
                              plan.highlighted ? "text-white" : "text-primary"
                            }
                          />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to={isLoggedIn ? "/payment" : "/signup"}
                    className={`
                      w-full px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2
                      transition-all duration-300 group-hover:scale-105 mt-auto
                      ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg shadow-violet-500/30"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }
                    `}
                  >
                    {isLoggedIn ? "Subscribe" : "Get Started"} <Zap size={18} />
                  </Link>
                </div>
              </div>
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

      {/* Feature Highlight */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sparkles size={32} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Why ExcelVisualizer?
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ExcelVisualizer transforms your raw Excel data into beautiful,
            interactive dashboards in seconds. Our AI-powered analytics engine
            automatically detects patterns, suggests the best chart types, and
            creates stunning visualizations that tell your data's story. Whether
            you're tracking sales, analyzing trends, or presenting to
            stakeholders, ExcelVisualizer makes data visualization effortless.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

import { Zap, Shield, Users, Smartphone, BarChart3, Lock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures your work flows smoothly without any lag.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security keeps your data safe and protected at all times.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time collaboration features.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your work from anywhere with our fully responsive mobile experience.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get insights into your performance with comprehensive analytics dashboard.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your privacy matters. We never sell your data to third parties.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="mb-4">Everything you need to succeed</h2>
          <p className="text-muted-foreground">
            Powerful features to help you build, launch, and grow your product faster than ever before.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-border transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

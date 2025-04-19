
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Hammer, BarChart3, FileText, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-4">
            New: Simplified Trade Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Streamline Your Trade Business
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The all-in-one platform for trade professionals to manage jobs, clients, quotes, and more with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <Link to="/dashboard">
                Get Started 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Trusted by Trade Professionals Nationwide
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of trade businesses who have transformed their operations with Graftly
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['Construction', 'Plumbing', 'Electrical', 'HVAC', 'Landscaping'].map((industry) => (
              <Badge key={industry} variant="outline" className="text-lg px-4 py-2">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Trade Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your free trial and see how Graftly can help you grow.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/dashboard">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <Hammer className="h-8 w-8 text-primary" />,
    title: "Job Management",
    description: "Track all your jobs with status updates, photo documentation, and time tracking in one place."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Client Management",
    description: "Build stronger relationships with a comprehensive client database and communication history."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Smart Quotes",
    description: "Create professional quotes with automated materials calculation and instant delivery to clients."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Financial Insights",
    description: "Get clear visibility of your business performance with detailed financial reporting."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Secure Platform",
    description: "Keep your business data safe with enterprise-grade security and regular backups."
  },
  {
    icon: <ArrowRight className="h-8 w-8 text-primary" />,
    title: "Seamless Workflow",
    description: "Automate repetitive tasks and streamline your entire business workflow."
  }
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow hover:border-primary group">
      <CardHeader>
        <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;


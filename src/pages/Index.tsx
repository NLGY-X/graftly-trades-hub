
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, FileText, Hammer, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Streamline Your Trade Business
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The all-in-one platform for trade professionals to manage jobs, clients, quotes, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/dashboard">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Hammer className="h-8 w-8 text-primary" />}
              title="Job Management"
              description="Track all your jobs with status updates, photo documentation, and time tracking in one place."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Client Management"
              description="Build stronger relationships with a comprehensive client database and communication history."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="Smart Quotes"
              description="Create professional quotes with automated materials calculation and instant delivery to clients."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-primary" />}
              title="Financial Insights"
              description="Get clear visibility of your business performance with detailed financial reporting."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Secure Platform"
              description="Keep your business data safe with enterprise-grade security and regular backups."
            />
            <FeatureCard
              icon={<ArrowRight className="h-8 w-8 text-primary" />}
              title="Seamless Workflow"
              description="Automate repetitive tasks and streamline your entire business workflow."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Trade Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of trade professionals who are growing their business with Graftly.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/dashboard">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-background border hover:shadow-lg transition-shadow">
      <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;

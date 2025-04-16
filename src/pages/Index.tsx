
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, FileText, Hammer, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8 pb-8">
      <div className="flex flex-col gap-4 text-center my-8">
        <h2 className="text-3xl font-bold tracking-tight">Welcome to Graftly</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          The complete platform for trade professionals to manage jobs, clients, quotes, and more.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard 
          icon={<BarChart3 className="h-8 w-8 text-primary" />}
          title="Dashboard"
          description="Get a comprehensive overview of your daily work, finances, and upcoming jobs."
          href="/"
        />
        <FeatureCard 
          icon={<Hammer className="h-8 w-8 text-primary" />}
          title="Job Management"
          description="Track all your jobs with status updates, photo documentation, and time tracking."
          href="/jobs"
        />
        <FeatureCard 
          icon={<Users className="h-8 w-8 text-primary" />}
          title="Client Manager"
          description="Maintain a comprehensive client database with full history and contact details."
          href="/clients"
        />
        <FeatureCard 
          icon={<FileText className="h-8 w-8 text-primary" />}
          title="Quotes Manager"
          description="Create professional quotes with materials calculation and instant delivery."
          href="/quotes"
        />
        <FeatureCard 
          icon={<Settings className="h-8 w-8 text-primary" />}
          title="Settings"
          description="Customize your company profile, tax settings, and notification preferences."
          href="/settings"
        />
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link to="/dashboard">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const FeatureCard = ({ icon, title, description, href }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            {icon}
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Button variant="outline" asChild className="mt-2">
            <Link to={href}>
              Open {title} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;

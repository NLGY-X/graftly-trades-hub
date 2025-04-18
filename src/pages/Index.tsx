
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/20 -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Badge variant="default" className="mb-4">
              Less Admin. More Graft.
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Free UK Tradespeople From Paperwork
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Spend less time on admin and more time on the tools. The all-in-one business management app built specifically for UK tradespeople.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/dashboard">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                See Our Features
              </Button>
              <Button size="lg" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Why UK Tradespeople Choose Graftly
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item, index) => (
              <Card 
                key={index} 
                className="bg-white shadow-lg hover:shadow-xl transition-shadow border-primary/20 hover:border-primary/40 border"
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <Check className="text-accent h-6 w-6 flex-shrink-0" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-blue-100/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">How Graftly Compares</h2>
          <div className="rounded-lg border bg-white shadow-md">
            <Table>
              <TableHeader className="bg-primary/5">
                <TableRow>
                  <TableHead className="text-primary">Feature</TableHead>
                  <TableHead className="text-primary">Graftly</TableHead>
                  <TableHead className="text-primary">Tradify</TableHead>
                  <TableHead className="text-primary">SimPro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-blue-50/50">
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell>{row.graftly ? "✅" : "❌"}</TableCell>
                    <TableCell>{row.tradify ? "✅" : "❌"}</TableCell>
                    <TableCell>{row.simpro ? "✅" : "❌"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            What UK Tradespeople Say About Graftly
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="relative bg-white shadow-lg hover:shadow-xl transition-shadow border-accent/20 hover:border-accent/40 border"
              >
                <CardContent className="pt-6">
                  <Star className="absolute top-4 right-4 text-accent h-6 w-6" />
                  <blockquote className="text-lg mb-4 text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <footer className="text-sm text-primary/80">
                    <strong>{testimonial.name}</strong>
                    <br />
                    {testimonial.title}
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Save Time and Get Paid Faster?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of UK tradespeople who've transformed their business with Graftly.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-blue-50">
              <Link to="/dashboard">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const whyChooseItems = [
  {
    title: "Built for Your Trade",
    description: "Specifically designed for plumbers, electricians, builders, and other UK trades"
  },
  {
    title: "Works Anywhere",
    description: "Full functionality on your mobile, even without internet"
  },
  {
    title: "No Technical Skills Needed",
    description: "If you can use WhatsApp, you can use Graftly"
  },
  {
    title: "Save 5+ Hours Weekly",
    description: "Turn after-hours admin into billable time or family time"
  },
  {
    title: "Get Paid Faster",
    description: "Professional quotes, invoices and payment tracking in seconds"
  },
  {
    title: "UK-Specific Features",
    description: "VAT, CIS, and trade certificates built-in"
  }
];

const comparisonData = [
  { feature: "Cost for 3-Person Team", graftly: true, tradify: false, simpro: false },
  { feature: "WhatsApp-Style Interface", graftly: true, tradify: false, simpro: false },
  { feature: "Works Offline", graftly: true, tradify: false, simpro: false },
  { feature: "UK VAT & CIS Support", graftly: true, tradify: false, simpro: true },
  { feature: "No Per-User Fees", graftly: true, tradify: false, simpro: false },
  { feature: "UK Trade Certificates", graftly: true, tradify: true, simpro: true },
  { feature: "UK-Based Support", graftly: true, tradify: false, simpro: true }
];

const testimonials = [
  {
    quote: "I used to spend every Sunday doing paperwork. Now I spend 10 minutes a day on Graftly and have my weekends back.",
    name: "Mark",
    title: "Electrician in Manchester"
  },
  {
    quote: "The offline mode is brilliant. I work in rural areas with no signal, but I can still create quotes on site.",
    name: "Sarah",
    title: "Plumber in Cornwall"
  },
  {
    quote: "My clients comment on how professional my quotes look. I'm winning more jobs because of it.",
    name: "James",
    title: "Builder in Birmingham"
  }
];

export default Index;

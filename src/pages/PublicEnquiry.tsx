
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Mic, Calendar, Clock, MapPin, Phone, Mail, User, FileText, ChevronDown } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z
    .string()
    .min(11, { message: "UK phone numbers must be at least 11 digits" })
    .regex(/^((\+44)|(0))?\d{10,11}$/, { message: "Please enter a valid UK phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }).optional().or(z.literal("")),
  address: z.string().optional(),
  postcode: z
    .string()
    .regex(/^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i, { message: "Please enter a valid UK postcode" })
    .optional()
    .or(z.literal("")),
  jobDescription: z.string().min(20, { message: "Please provide at least 20 characters describing your job" }),
  jobType: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  consent: z.boolean().refine(val => val === true, { message: "You must agree to the privacy policy" })
});

type FormValues = z.infer<typeof formSchema>;

export default function PublicEnquiry() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isPreferenceOpen, setIsPreferenceOpen] = useState(false);
  
  // Business details (would come from API in production)
  const business = {
    name: "Smith Plumbing & Heating",
    logo: "/placeholder.svg",
    primaryColor: "#9b87f5",
    estimatedResponseTime: "24 hours",
    phone: "07700 900123"
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      postcode: "",
      jobDescription: "",
      jobType: "",
      preferredDate: "",
      preferredTime: "",
      consent: false
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // In a real app, this would send the data to an API
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  // Job types (would come from API in production)
  const jobTypes = [
    "Emergency Repair",
    "Boiler Service",
    "Bathroom Installation",
    "Kitchen Plumbing",
    "Heating System",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <header className="py-4 px-6 border-b bg-white shadow-sm">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/placeholder.svg" alt="Graftly" className="h-8 w-8" />
              <h1 className="text-xl font-semibold">{business.name}</h1>
            </div>
          </div>
        </header>
        
        <main className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-4">
                Your enquiry has been submitted successfully to {business.name}.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                They will contact you within {business.estimatedResponseTime}.
              </p>
              <div className="bg-muted p-4 w-full rounded-md mb-6">
                <p className="text-sm font-medium">If your enquiry is urgent, please call:</p>
                <a href={`tel:${business.phone}`} className="text-primary font-bold text-lg block mt-1">
                  {business.phone}
                </a>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
                className="w-full"
              >
                Submit Another Enquiry
              </Button>
            </CardContent>
          </Card>
        </main>
        
        <footer className="py-4 px-6 text-center text-sm text-muted-foreground">
          <p>Powered by <a href="https://lovable.dev" className="text-primary hover:underline">Graftly</a></p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="py-4 px-6 border-b bg-white shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/placeholder.svg" alt="Graftly" className="h-8 w-8" />
            <h1 className="text-xl font-semibold">{business.name}</h1>
          </div>
        </div>
      </header>
      
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Request a Quote</h2>
            <p className="text-muted-foreground mt-1">Fill in the form below and we'll get back to you shortly.</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Your name" className="pl-10 h-12" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="07123 456789" 
                            className="pl-10 h-12" 
                            type="tel" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address (Optional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="your.email@example.com" 
                            className="pl-10 h-12" 
                            type="email" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Collapsible 
                  open={isAddressOpen} 
                  onOpenChange={setIsAddressOpen}
                  className="border rounded-md"
                >
                  <CollapsibleTrigger asChild>
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Location Details (Optional)</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isAddressOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0 space-y-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Your address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postcode</FormLabel>
                          <FormControl>
                            <Input placeholder="SW1A 1AA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
                
                <FormField
                  control={form.control}
                  name="jobType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea 
                            placeholder="Please describe what you need help with in detail..." 
                            className="min-h-32 resize-none"
                            {...field}
                          />
                          <Button 
                            type="button" 
                            size="sm" 
                            variant="outline" 
                            className="absolute right-2 bottom-2"
                            onClick={() => {
                              // In a real app, this would trigger speech recognition
                              alert("Voice input would be triggered here");
                            }}
                          >
                            <Mic className="h-4 w-4 mr-1" />
                            Voice
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Collapsible 
                  open={isPreferenceOpen} 
                  onOpenChange={setIsPreferenceOpen}
                  className="border rounded-md"
                >
                  <CollapsibleTrigger asChild>
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Time Preferences (Optional)</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isPreferenceOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0 space-y-4">
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                type="date" 
                                className="pl-10" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="pl-10 relative">
                                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                              <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                              <SelectItem value="anytime">Anytime</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Privacy Agreement</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          I agree that my data will be processed by {business.name} to respond to my enquiry. View the <a href="#" className="text-primary hover:underline">privacy policy</a>.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <Button type="submit" className="w-full h-12 text-lg mt-6">
                Submit Enquiry
              </Button>
            </form>
          </Form>
        </div>
      </main>
      
      <footer className="py-4 px-6 text-center text-sm text-muted-foreground">
        <p>Powered by <a href="https://lovable.dev" className="text-primary hover:underline">Graftly</a></p>
      </footer>
    </div>
  );
}

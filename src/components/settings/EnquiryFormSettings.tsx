
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, PenSquare, Clock } from "lucide-react";

const formSchema = z.object({
  formTitle: z.string().min(2, { message: "Title must be at least 2 characters" }),
  welcomeMessage: z.string().optional(),
  successMessage: z.string().optional(),
  responseTime: z.string(),
  collectLocation: z.boolean(),
  collectJobType: z.boolean(),
  collectTimePreference: z.boolean(),
  showLogo: z.boolean(),
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, { 
    message: "Must be a valid hex color code (e.g., #9B87F5)" 
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function EnquiryFormSettings() {
  const [isSaved, setIsSaved] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formTitle: "Request a Quote",
      welcomeMessage: "Fill in the form below and we'll get back to you shortly.",
      successMessage: "Thank you! Your enquiry has been submitted successfully. We'll be in touch soon.",
      responseTime: "24hrs",
      collectLocation: true,
      collectJobType: true,
      collectTimePreference: true,
      showLogo: true,
      primaryColor: "#9B87F5",
    },
  });
  
  function onSubmit(data: FormValues) {
    console.log("Saving enquiry form settings:", data);
    // In a real app, this would save to an API
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Enquiry Form Settings
        </CardTitle>
        <CardDescription>
          Customize how your public enquiry form appears to potential customers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="formTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Form Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Request a Quote" {...field} />
                      </FormControl>
                      <FormDescription>
                        The main heading displayed on your enquiry form.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="responseTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Response Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select response time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="4hrs">Within 4 hours</SelectItem>
                          <SelectItem value="12hrs">Within 12 hours</SelectItem>
                          <SelectItem value="24hrs">Within 24 hours</SelectItem>
                          <SelectItem value="48hrs">Within 48 hours</SelectItem>
                          <SelectItem value="custom">Custom message</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Let customers know when to expect a response.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="welcomeMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Welcome Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Fill in the form below and we'll get back to you shortly." 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      A short message displayed at the top of your enquiry form.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="successMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Success Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Thank you! Your enquiry has been submitted successfully. We'll be in touch soon." 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Message shown after a successful form submission.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="primaryColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Color</FormLabel>
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="#9B87F5"
                          {...field}
                        />
                      </FormControl>
                      <div 
                        className="w-10 h-10 rounded-md border" 
                        style={{ backgroundColor: field.value }}
                      />
                    </div>
                    <FormDescription>
                      The main color used for buttons and accents on your form.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Form Fields</h3>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="collectLocation"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Collect Location
                          </FormLabel>
                          <FormDescription>
                            Allow customers to provide their address
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="collectJobType"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Job Type Selection
                          </FormLabel>
                          <FormDescription>
                            Allow customers to select type of work needed
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="collectTimePreference"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Time Preferences
                          </FormLabel>
                          <FormDescription>
                            Allow customers to indicate preferred dates/times
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="showLogo"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Display Logo
                          </FormLabel>
                          <FormDescription>
                            Show your business logo on the form
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full sm:w-auto">
              <PenSquare className="mr-2 h-4 w-4" />
              {isSaved ? "Settings Saved!" : "Save Settings"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

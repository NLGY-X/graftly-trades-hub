
import { useState } from "react";
import { Building, User, CreditCard, BellRing, Shield, Laptop, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  const [companyName, setCompanyName] = useState("Your Trade Business");
  const [email, setEmail] = useState("contact@yourtradebusiness.com");
  const [phone, setPhone] = useState("01234 567890");
  const [vatRegistered, setVatRegistered] = useState(true);
  const [vatNumber, setVatNumber] = useState("GB123456789");
  
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings & Company Profile</h2>
        <p className="text-muted-foreground">
          Manage your company details, notifications, and application preferences.
        </p>
      </div>
      
      <Tabs defaultValue="company" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          <TabsTrigger value="company" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span className="hidden md:inline">Company</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden md:inline">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <BellRing className="h-4 w-4" />
            <span className="hidden md:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden md:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Templates</span>
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Laptop className="h-4 w-4" />
            <span className="hidden md:inline">System</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="company">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium">Company Information</h3>
                <p className="text-sm text-muted-foreground">
                  Update your company details and how they appear on documents.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input 
                    id="company-name" 
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value)} 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Business Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea 
                    id="address" 
                    rows={3}
                    placeholder="Enter your business address"
                  />
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Tax Information</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="vat-registered">VAT Registered</Label>
                      <p className="text-sm text-muted-foreground">
                        Toggle if your business is registered for VAT
                      </p>
                    </div>
                    <Switch 
                      id="vat-registered" 
                      checked={vatRegistered} 
                      onCheckedChange={setVatRegistered} 
                    />
                  </div>
                  
                  {vatRegistered && (
                    <div className="grid gap-2">
                      <Label htmlFor="vat-number">VAT Number</Label>
                      <Input 
                        id="vat-number" 
                        value={vatNumber} 
                        onChange={(e) => setVatNumber(e.target.value)} 
                      />
                    </div>
                  )}
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Company Branding</h4>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="logo">Company Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                        <Building className="h-8 w-8" />
                      </div>
                      <Button variant="outline" size="sm">Upload Logo</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Recommended size: 200x200px. Max file size: 2MB.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="profile">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2 mb-6">
                <h3 className="text-lg font-medium">Personal Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Update your personal information and preferences.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="profile-email">Email Address</Label>
                  <Input id="profile-email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="profile-phone">Phone Number</Label>
                  <Input id="profile-phone" type="tel" placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline">Cancel</Button>
                <Button>Save Profile</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2 mb-6">
                <h3 className="text-lg font-medium">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground">
                  Configure how and when you receive notifications.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Job Notifications</h4>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="new-job-email">New Job Requests</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive an email when a new job request is submitted
                      </p>
                    </div>
                    <Switch id="new-job-email" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="job-reminders">Job Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Get reminders for upcoming jobs the day before
                      </p>
                    </div>
                    <Switch id="job-reminders" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Financial Notifications</h4>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="payment-received">Payments Received</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when clients make payments
                      </p>
                    </div>
                    <Switch id="payment-received" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="invoice-overdue">Invoice Overdue Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get alerts when invoices become overdue
                      </p>
                    </div>
                    <Switch id="invoice-overdue" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Communication Channels</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email Notifications</Label>
                      <div className="flex items-center">
                        <Switch id="email-enabled" defaultChecked />
                        <Label htmlFor="email-enabled" className="ml-2">Enabled</Label>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Push Notifications</Label>
                      <div className="flex items-center">
                        <Switch id="push-enabled" defaultChecked />
                        <Label htmlFor="push-enabled" className="ml-2">Enabled</Label>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>SMS Notifications</Label>
                      <div className="flex items-center">
                        <Switch id="sms-enabled" />
                        <Label htmlFor="sms-enabled" className="ml-2">Enabled</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline">Reset to Default</Button>
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="py-12">
                <CreditCard className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Billing Settings Coming Soon</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  This section will include payment methods, subscription management, and billing history.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="py-12">
                <Shield className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Security Settings Coming Soon</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  This section will include password management, two-factor authentication, and account security options.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Document Templates Coming Soon</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  This section will allow you to customize invoice, quote, and other document templates.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="py-12">
                <Laptop className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">System Settings Coming Soon</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  This section will include data management, backup options, and system preferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

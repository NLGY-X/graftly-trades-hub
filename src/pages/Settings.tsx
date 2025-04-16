
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EnquiryQRCode } from "@/components/settings/EnquiryQRCode";
import { EnquiryFormSettings } from "@/components/settings/EnquiryFormSettings";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your business settings and preferences.</p>
      </div>
      
      <Separator />
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="profile">Business Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="team">Team Members</TabsTrigger>
          <TabsTrigger value="enquiries">Enquiry Form</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Profile</CardTitle>
                <CardDescription>Manage your business details and branding.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Business profile settings will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your Graftly account settings.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Account settings will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage your team and permissions.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Team management settings will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="enquiries" className="space-y-6">
            <EnquiryFormSettings />
            <EnquiryQRCode />
          </TabsContent>
          
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Connect your favorite tools and services.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Integration settings will appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

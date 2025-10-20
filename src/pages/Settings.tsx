import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, Bell, Database, Shield, Mail } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <SettingsIcon className="w-5 h-5 text-white" />
            </div>
            Settings
          </h1>
          <p className="text-muted-foreground">Manage your dashboard preferences and configurations</p>
        </div>

        {/* Profile Settings */}
        <Card className="p-6 shadow-card animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Profile Information</h2>
          </div>
          <div className="space-y-4 max-w-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Admin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="User" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="admin@airline.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Revenue Analytics Manager" disabled />
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6 shadow-card animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Revenue Alerts</Label>
                <p className="text-sm text-muted-foreground">Get notified when revenue thresholds are reached</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>AI Recommendations</Label>
                <p className="text-sm text-muted-foreground">Receive daily AI-generated insights</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Performance Anomalies</Label>
                <p className="text-sm text-muted-foreground">Alert when unusual patterns are detected</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Reports</Label>
                <p className="text-sm text-muted-foreground">Email summary every Monday morning</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Data Settings */}
        <Card className="p-6 shadow-card animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Data & Integrations</h2>
          </div>
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Real-Time Data Sync</Label>
                <p className="text-sm text-muted-foreground">Sync booking data every 5 minutes</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Historical Data Retention</Label>
                <p className="text-sm text-muted-foreground">Store analytics data for 24 months</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>API Access</Label>
              <div className="flex gap-2">
                <Input type="password" defaultValue="sk_live_1234567890abcdef" disabled />
                <Button variant="outline">Regenerate</Button>
              </div>
              <p className="text-xs text-muted-foreground">Use this key to integrate with external systems</p>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 shadow-card animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Security</h2>
          </div>
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Session Timeout</Label>
                <p className="text-sm text-muted-foreground">Auto-logout after 30 minutes of inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Change Password</Label>
              <div className="space-y-2">
                <Input type="password" placeholder="Current password" />
                <Input type="password" placeholder="New password" />
                <Input type="password" placeholder="Confirm new password" />
              </div>
              <Button className="mt-2">Update Password</Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

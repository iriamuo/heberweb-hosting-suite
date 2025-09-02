import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Server, 
  Database, 
  Mail, 
  FileText, 
  Settings, 
  BarChart3,
  HardDrive,
  Cpu,
  MemoryStick,
  Globe,
  Shield,
  Users
} from "lucide-react";

const Dashboard = () => {
  const serverStats = [
    { 
      icon: HardDrive, 
      label: "Disk Usage", 
      used: "15.2 GB", 
      total: "50 GB", 
      percentage: 30,
      color: "bg-primary"
    },
    { 
      icon: Globe, 
      label: "Bandwidth", 
      used: "127 GB", 
      total: "500 GB", 
      percentage: 25,
      color: "bg-secondary"
    },
    { 
      icon: Cpu, 
      label: "CPU Usage", 
      used: "45%", 
      total: "100%", 
      percentage: 45,
      color: "bg-accent"
    },
    { 
      icon: MemoryStick, 
      label: "Memory", 
      used: "2.1 GB", 
      total: "4 GB", 
      percentage: 52,
      color: "bg-destructive"
    }
  ];

  const quickStats = [
    { label: "Active Websites", value: "3", icon: Globe },
    { label: "Email Accounts", value: "12", icon: Mail },
    { label: "Databases", value: "5", icon: Database },
    { label: "SSL Certificates", value: "3", icon: Shield }
  ];

  const recentActivity = [
    { action: "Website backup completed", time: "2 hours ago", type: "success" },
    { action: "SSL renewed for example.com", time: "1 day ago", type: "info" },
    { action: "New email account created", time: "2 days ago", type: "success" },
    { action: "Database optimized", time: "3 days ago", type: "info" },
    { action: "Security scan completed", time: "1 week ago", type: "success" }
  ];

  return (
    <div className="min-h-screen bg-muted/30 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Control Panel
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your hosting account.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card border-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Server Statistics */}
        <Card className="mb-8 bg-gradient-card shadow-card border-0">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Server Statistics
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serverStats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {stat.used} / {stat.total}
                    </span>
                  </div>
                  <Progress value={stat.percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {stat.percentage}% used
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Account Information */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
                <TabsTrigger value="databases">Databases</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Account Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Plan:</span>
                      <span className="font-medium text-foreground">Business Hosting</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Domain:</span>
                      <span className="font-medium text-foreground">example.com</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Server:</span>
                      <span className="font-medium text-foreground">Server-US-West-01</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Next Billing:</span>
                      <span className="font-medium text-foreground">March 15, 2024</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="sm" className="justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      File Manager
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <Database className="h-4 w-4 mr-2" />
                      phpMyAdmin
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Webmail
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      cPanel
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="files">
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    File Management
                  </h3>
                  <div className="space-y-4">
                    <Button className="w-full justify-start bg-gradient-primary">
                      <FileText className="h-4 w-4 mr-2" />
                      Open File Manager
                    </Button>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm text-foreground">public_html/</span>
                        <span className="text-sm text-muted-foreground">2.1 GB</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm text-foreground">logs/</span>
                        <span className="text-sm text-muted-foreground">145 MB</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm text-foreground">backups/</span>
                        <span className="text-sm text-muted-foreground">8.2 GB</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="databases">
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Database Management
                  </h3>
                  <div className="space-y-4">
                    <Button className="w-full justify-start bg-gradient-primary">
                      <Database className="h-4 w-4 mr-2" />
                      Create New Database
                    </Button>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <span className="text-sm font-medium text-foreground">example_wp</span>
                          <p className="text-xs text-muted-foreground">WordPress Database</p>
                        </div>
                        <span className="text-sm text-muted-foreground">45 MB</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <span className="text-sm font-medium text-foreground">example_shop</span>
                          <p className="text-xs text-muted-foreground">E-commerce Database</p>
                        </div>
                        <span className="text-sm text-muted-foreground">127 MB</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="email">
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Email Management
                  </h3>
                  <div className="space-y-4">
                    <Button className="w-full justify-start bg-gradient-primary">
                      <Mail className="h-4 w-4 mr-2" />
                      Create Email Account
                    </Button>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <span className="text-sm font-medium text-foreground">admin@example.com</span>
                          <p className="text-xs text-muted-foreground">2.1 GB used</p>
                        </div>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <span className="text-sm font-medium text-foreground">support@example.com</span>
                          <p className="text-xs text-muted-foreground">456 MB used</p>
                        </div>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="p-6 bg-gradient-card shadow-card border-0">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mt-6 p-6 bg-gradient-primary text-white border-0">
              <h3 className="text-lg font-semibold mb-3">
                Need Help?
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Our support team is available 24/7 to assist you with any questions or issues.
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
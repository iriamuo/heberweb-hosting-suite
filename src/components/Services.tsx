import { Card } from "@/components/ui/card";
import { Server, Cloud, Database, Shield, Mail, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Web Hosting",
      description: "Reliable shared hosting with cPanel, perfect for websites and blogs. Includes free domain and SSL certificate.",
      features: ["cPanel Control Panel", "Free Domain", "SSL Certificate", "99.9% Uptime"]
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure with automatic scaling and load balancing for high-traffic applications.",
      features: ["Auto Scaling", "Load Balancing", "SSD Storage", "Global CDN"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Managed MySQL and PostgreSQL databases with automated backups and performance optimization.",
      features: ["MySQL & PostgreSQL", "Automated Backups", "Performance Tuning", "24/7 Monitoring"]
    },
    {
      icon: Shield,
      title: "Security & SSL",
      description: "Enterprise-grade security with SSL certificates, malware scanning, and DDoS protection.",
      features: ["SSL Certificates", "Malware Scanning", "DDoS Protection", "Security Monitoring"]
    },
    {
      icon: Mail,
      title: "Email Hosting",
      description: "Professional email hosting with webmail access, spam filtering, and unlimited accounts.",
      features: ["Unlimited Accounts", "Webmail Access", "Spam Filtering", "Mobile Sync"]
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Support for PHP, Python, Node.js with Git integration, staging environments, and SSH access.",
      features: ["PHP, Python, Node.js", "Git Integration", "SSH Access", "Staging Environment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Hosting Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your web presence with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-soft transition-all duration-300 group">
              <div className="bg-primary/10 p-3 rounded-lg inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
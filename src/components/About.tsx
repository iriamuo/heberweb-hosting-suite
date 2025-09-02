import { Card } from "@/components/ui/card";
import { Users, Award, Shield, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Zap, value: "24/7", label: "Expert Support" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in web hosting industry, former CTO at CloudTech"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      description: "Expert in cloud infrastructure and security solutions"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      description: "Dedicated to ensuring exceptional customer experiences"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About HeberWeb
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 2008, we've been providing reliable, secure, and fast web hosting solutions 
            to businesses of all sizes. Our commitment to excellence and customer satisfaction 
            has made us a trusted partner for thousands of websites worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card shadow-card border-0">
              <div className="bg-primary/10 p-4 rounded-lg inline-flex mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At HeberWeb, we believe that every business deserves reliable, fast, and secure web hosting. 
              Our mission is to provide world-class hosting services that empower businesses to succeed online, 
              backed by exceptional customer support and cutting-edge technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We've built our infrastructure with redundancy and performance in mind, ensuring your websites 
              stay online and load quickly for your visitors. Our team of experts is available 24/7 to provide 
              the support you need, when you need it.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Us?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Reliability First</h4>
                  <p className="text-sm text-muted-foreground">99.9% uptime guarantee with redundant infrastructure</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Expert Support</h4>
                  <p className="text-sm text-muted-foreground">24/7 technical support from hosting professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Latest Technology</h4>
                  <p className="text-sm text-muted-foreground">SSD storage, modern PHP versions, and optimized servers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card shadow-card border-0">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-hosting.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <Shield className="w-4 h-4 mr-2" />
              99.9% Uptime Guaranteed
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Professional
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}Web Hosting{" "}
              </span>
              for Your Business
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Power your website with our reliable, fast, and secure hosting solutions. 
              From small businesses to enterprise applications, we've got you covered with 
              24/7 support and cutting-edge infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-soft transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Plans
              </Button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-lg inline-flex mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">SSD Storage</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 p-3 rounded-lg inline-flex mb-2">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-sm font-medium text-foreground">Lightning Fast</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-3 rounded-lg inline-flex mb-2">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">SSL Included</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Professional web hosting data center"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$4.99",
      period: "/month",
      description: "Perfect for personal websites and small blogs",
      features: [
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "1 Website",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "24/7 Support",
        "Free Domain (1st year)",
        "Email Accounts (5)"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$9.99",
      period: "/month",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "50 GB SSD Storage",
        "500 GB Bandwidth",
        "10 Websites",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Priority Support",
        "Free Domain (1st year)",
        "Unlimited Email Accounts",
        "MySQL Databases (25)",
        "Free Website Migration"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "/month",
      description: "For high-traffic websites and applications",
      features: [
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Websites",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Premium Support",
        "Free Domain (1st year)",
        "Unlimited Email Accounts",
        "Unlimited MySQL Databases",
        "Free Website Migration",
        "Daily Backups",
        "Advanced Security",
        "PHP 8.2 Support",
        "SSH Access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-gradient-card shadow-card border-0 hover:shadow-soft transition-all duration-300 ${
                plan.popular ? "ring-2 ring-primary shadow-glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full flex items-center text-white text-sm font-medium shadow-soft">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-primary shadow-glow"
                    : "bg-gradient-primary"
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer enterprise packages tailored to your needs.
          </p>
          <Button variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
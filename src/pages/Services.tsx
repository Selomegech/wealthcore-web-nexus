
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, CreditCard, Search, Users, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Services = () => {
  useScrollToTop();

  const services = [
    {
      id: "corporate-tax",
      icon: Calculator,
      title: "Corporate Tax Planning & Advisory",
      description: "Comprehensive tax strategies to optimize your business operations while ensuring full compliance.",
      features: [
        "Focused advisory for industry-specific benefits",
        "Tax optimization strategies",
        "Regulatory compliance and risk mitigation"
      ],
      color: "from-navy to-navy/80"
    },
    {
      id: "project-finance",
      icon: CreditCard,
      title: "Project Finance & Credit Facility",
      description: "Strategic funding solutions and banking relationships to fuel your business growth.",
      features: [
        "Loan syndication & funding strategy",
        "Liaison with banks & NBFCs",
        "Documentation and financial structuring"
      ],
      color: "from-gold to-gold/80"
    },
    {
      id: "internal-audit",
      icon: Search,
      title: "Internal Audit & Compliance",
      description: "Risk-based audit services to strengthen your internal controls and ensure regulatory compliance.",
      features: [
        "Risk-based audit methodology",
        "Process and control review",
        "Statutory and regulatory compliance support"
      ],
      color: "from-orange to-orange/80"
    },
    {
      id: "business-consultancy",
      icon: Users,
      title: "Business Consultancy",
      description: "Strategic business advisory to help you make informed decisions and drive sustainable growth.",
      features: [
        "Business structuring & valuation",
        "Management consulting",
        "Strategic planning and budgeting"
      ],
      color: "from-charcoal to-charcoal/80"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8">
                Our <span className="text-gold">Services</span>
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Comprehensive financial solutions tailored to your business needs. From tax planning to project finance, 
                we provide end-to-end advisory services that drive growth and ensure compliance.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card id={service.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden scroll-mt-20">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`bg-gradient-to-br ${service.color} text-white p-12 lg:p-16 flex flex-col justify-center`}>
                        <div className="flex items-center mb-8">
                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                            <service.icon className="w-10 h-10 text-white" />
                          </div>
                          <h2 className="font-heading font-bold text-3xl lg:text-4xl">{service.title}</h2>
                        </div>
                        <p className="text-xl leading-relaxed text-white/90">{service.description}</p>
                      </div>
                      <div className={`p-12 lg:p-16 bg-lightgrey ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <h3 className="font-heading font-bold text-2xl text-navy mb-8">Key Features:</h3>
                        <ul className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <CheckCircle className="w-6 h-6 text-orange mr-4 mt-1 flex-shrink-0" />
                              <span className="text-charcoal text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="bg-navy hover:bg-navy/90 text-white mt-8 group text-lg px-8 py-3">
                          <Link to="/contact">
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-r from-navy to-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-8">Ready to Get Started?</h2>
            <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Let's discuss how our services can help optimize your business operations and financial strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="bg-orange hover:bg-orange/90 text-white px-10 py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 text-xl rounded-lg transition-all duration-200">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Services;

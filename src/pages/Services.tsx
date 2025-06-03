
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, CreditCard, Search, Users, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Corporate Tax Planning & Advisory",
      description: "Comprehensive tax strategies to optimize your business operations while ensuring full compliance.",
      features: [
        "Specialized services under Section 80JJAA",
        "Tax optimization strategies",
        "Regulatory compliance and risk mitigation",
        "Annual tax planning and projections",
        "GST advisory and compliance"
      ],
      color: "from-navy to-navy/80"
    },
    {
      icon: CreditCard,
      title: "Project Finance & Credit Facility",
      description: "Strategic funding solutions and banking relationships to fuel your business growth.",
      features: [
        "Loan syndication & funding strategy",
        "Liaison with banks & NBFCs",
        "Documentation and financial structuring",
        "Working capital optimization",
        "Investment advisory services"
      ],
      color: "from-gold to-gold/80"
    },
    {
      icon: Search,
      title: "Internal Audit & Compliance",
      description: "Risk-based audit services to strengthen your internal controls and ensure regulatory compliance.",
      features: [
        "Risk-based audit methodology",
        "Process and control review",
        "Statutory and regulatory compliance support",
        "Internal control system design",
        "Fraud detection and prevention"
      ],
      color: "from-orange to-orange/80"
    },
    {
      icon: Users,
      title: "Business Consultancy",
      description: "Strategic business advisory to help you make informed decisions and drive sustainable growth.",
      features: [
        "Business structuring & valuation",
        "Management consulting",
        "Strategic planning and budgeting",
        "Due diligence services",
        "Merger & acquisition advisory"
      ],
      color: "from-charcoal to-charcoal/80"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial discussion to understand your business needs and challenges"
    },
    {
      step: "02",
      title: "Analysis",
      description: "Comprehensive review of your current financial position and requirements"
    },
    {
      step: "03",
      title: "Strategy",
      description: "Development of customized solutions aligned with your business objectives"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Execution of the strategy with ongoing support and monitoring"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 animate-fade-in">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-in">
              Comprehensive financial solutions tailored to your business needs. From tax planning to project finance, 
              we provide end-to-end advisory services that drive growth and ensure compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`bg-gradient-to-br ${service.color} text-white p-8 lg:p-12 flex flex-col justify-center`}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="font-heading font-bold text-2xl lg:text-3xl">{service.title}</h2>
                      </div>
                      <p className="text-lg leading-relaxed text-white/90">{service.description}</p>
                    </div>
                    <div className={`p-8 lg:p-12 bg-lightgrey ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h3 className="font-heading font-bold text-xl text-navy mb-6">Key Features:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-charcoal">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="bg-navy hover:bg-navy/90 text-white mt-6 group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Our Process</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              A systematic approach to delivering excellence in every engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gold transform translate-x-1/2 z-0"></div>
                )}
                <div className="relative z-10 bg-white">
                  <div className="w-24 h-24 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">{step.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help optimize your business operations and financial strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-200">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

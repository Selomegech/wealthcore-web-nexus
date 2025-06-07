import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, TrendingUp, Award, Calculator, CreditCard, Search, Users as UsersIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Index = () => {
  useScrollToTop();

  const services = [
    {
      id: "corporate-tax",
      title: "Corporate Tax Planning",
      description: "Strategic tax optimization and compliance solutions for your business growth.",
      icon: Calculator
    },
    {
      id: "project-finance",
      title: "Project Finance & Credit",
      description: "Comprehensive funding strategies and loan syndication services.",
      icon: CreditCard
    },
    {
      id: "internal-audit",
      title: "Internal Audit & Compliance",
      description: "Risk-based audit and regulatory compliance support.",
      icon: Search
    },
    {
      id: "business-consultancy",
      title: "Business Consultancy",
      description: "Strategic planning, valuation, and management consulting services.",
      icon: UsersIcon
    }
  ];

  const whyChooseUs = [
    { text: "Deep domain expertise", icon: CheckCircle },
    { text: "Trusted by top corporates", icon: CheckCircle },
    { text: "End-to-end financial solutions", icon: CheckCircle },
    { text: "Transparent & ethical advisory", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <AnimatedSection>
        <section className="relative text-white overflow-hidden min-h-screen flex items-center">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dewtf6jqq&public_id=7735501-hd_1920_1080_25fps_sykbmk&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false&start=0&end=7"
              width="100%"
              height="100%"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                minWidth: '100%',
                minHeight: '100%'
              }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Hero Video Background"
            ></iframe>
          </div>
          
          {/* Lighter Navy Overlay */}
          <div className="absolute inset-0 bg-navy/70"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8 leading-tight">
                  Empowering Business Growth Through 
                  <span className="text-gold"> Strategic Financial Insights</span>
                </h1>
                <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
                  Partner with India's Leading Corporate Tax & Financial Advisory Firm. 
                  We deliver strategic, efficient, and compliant solutions for corporates and entrepreneurs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button asChild className="bg-orange hover:bg-orange/90 text-white px-10 py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105">
                    <Link to="/services">Explore Our Services</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 text-xl rounded-lg transition-all duration-200">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Expertise Section */}
      <AnimatedSection>
        <section className="py-24 bg-lightgrey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-6">Our Expertise</h2>
              <p className="text-2xl text-charcoal max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white cursor-pointer h-full">
                    <Link to={`/services#${service.id}`}>
                      <CardContent className="p-10 text-center h-full flex flex-col justify-between">
                        <div>
                          <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                            <service.icon className="w-10 h-10 text-gold" />
                          </div>
                          <h3 className="font-heading font-bold text-2xl text-navy mb-4">{service.title}</h3>
                          <p className="text-charcoal text-base leading-relaxed">{service.description}</p>
                        </div>
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-6 h-6 text-orange mx-auto" />
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Wealthcore Section */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-8">Why Wealthcore?</h2>
                <p className="text-2xl text-charcoal mb-10 leading-relaxed">
                  With a pan-India footprint and deep expertise across taxation, finance, and audit domains, 
                  we are partners in your business success.
                </p>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex items-center space-x-4">
                        <item.icon className="w-8 h-8 text-orange" />
                        <span className="text-charcoal font-medium text-lg">{item.text}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <Button asChild className="bg-navy hover:bg-navy/90 text-white px-10 py-4 mt-10 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-navy to-navy/80 text-white p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300 h-full flex flex-col justify-center">
                      <Users className="w-10 h-10 text-gold mb-4" />
                      <h3 className="font-bold text-2xl mb-3">500+</h3>
                      <p className="text-base">Satisfied Clients</p>
                    </Card>
                    <Card className="bg-gradient-to-br from-gold to-gold/80 text-white p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8 h-full flex flex-col justify-center">
                      <Award className="w-10 h-10 text-white mb-4" />
                      <h3 className="font-bold text-2xl mb-3">5+</h3>
                      <p className="text-base">Years Expertise</p>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-r from-navy to-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-8">Ready to Transform Your Business?</h2>
            <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Schedule a consultation with our expert team and discover how we can help optimize your financial strategy.
            </p>
            <Button asChild className="bg-orange hover:bg-orange/90 text-white px-10 py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Index;

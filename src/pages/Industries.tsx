import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Factory, Heart, ShoppingCart, Zap, Users } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building,
      title: "Real Estate & Infrastructure",
      description: "Comprehensive financial solutions for developers, contractors, and infrastructure companies.",
      serviceLink: "project-finance",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      icon: Factory,
      title: "Manufacturing & Export",
      description: "Specialized advisory for manufacturing companies and export-oriented businesses.",
      serviceLink: "corporate-tax",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      icon: Heart,
      title: "Healthcare & Hospitals",
      description: "Financial expertise tailored for healthcare providers and medical institutions.",
      serviceLink: "project-finance",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
    },
    {
      icon: ShoppingCart,
      title: "Trading & Distribution",
      description: "Strategic solutions for trading companies and distribution networks.",
      serviceLink: "corporate-tax",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
    },
    {
      icon: Zap,
      title: "Startups & MSMEs",
      description: "Growth-focused financial guidance for emerging businesses and small enterprises.",
      serviceLink: "business-consultancy",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: Users,
      title: "Professional Services",
      description: "Tailored solutions for consulting firms, law firms, and other professional service providers.",
      serviceLink: "business-consultancy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const clientLogos = [
    { name: "Rajhans Group", category: "Real Estate" },
    { name: "Pratibha Group", category: "Infrastructure" },
    { name: "Heatex Group", category: "Manufacturing" },
    { name: "SIDS Hospital", category: "Healthcare" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 animate-fade-in">
              Industries <span className="text-gold">We Serve</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-in">
              Tailored financial strategies for every business domain. Our deep industry expertise helps us deliver 
              solutions that are perfectly aligned with sector-specific challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">{industry.title}</h3>
                    <p className="text-charcoal mb-6 leading-relaxed">{industry.description}</p>
                    <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white w-full group-hover:bg-navy group-hover:text-white transition-all duration-300">
                      <Link to={`/services#${industry.serviceLink}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              We're proud to work with some of the most respected names across various industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-gold group-hover:to-orange transition-all duration-300">
                    <span className="text-white font-bold text-xl">{client.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-1">{client.name}</h3>
                  <p className="text-sm text-charcoal">{client.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-6">Why Industry Expertise Matters</h2>
              <div className="space-y-6 text-charcoal leading-relaxed">
                <p>
                  Each industry has its unique challenges, regulatory requirements, and growth patterns. 
                  Our deep understanding of sector-specific dynamics allows us to provide insights that generic 
                  financial advisors simply cannot match.
                </p>
                <p>
                  From understanding the nuances of export incentives in manufacturing to navigating the complex 
                  regulatory landscape in healthcare, our team brings real-world experience and specialized knowledge 
                  to every engagement.
                </p>
                <p>
                  This industry-focused approach ensures that our solutions are not just financially sound, 
                  but also practically implementable within your specific business context.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-navy to-navy/80 text-white p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-2xl text-gold mb-2">15+</h3>
                <p className="text-sm">Years of Industry Experience</p>
              </Card>
              <Card className="bg-gradient-to-br from-gold to-gold/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 mt-8">
                <h3 className="font-bold text-2xl mb-2">6</h3>
                <p className="text-sm">Key Industries Served</p>
              </Card>
              <Card className="bg-gradient-to-br from-orange to-orange/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 -mt-4">
                <h3 className="font-bold text-2xl mb-2">500+</h3>
                <p className="text-sm">Successful Projects</p>
              </Card>
              <Card className="bg-gradient-to-br from-charcoal to-charcoal/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 mt-4">
                <h3 className="font-bold text-2xl text-gold mb-2">100%</h3>
                <p className="text-sm">Client Satisfaction</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Ready to Discuss Your Industry-Specific Needs?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our industry experts help you navigate the unique challenges and opportunities in your sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
              <Link to="/contact">Schedule Industry Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-200">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

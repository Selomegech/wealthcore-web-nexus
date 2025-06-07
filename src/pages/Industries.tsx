import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Factory, Heart, ShoppingCart, Zap, Users, Sun, Gem } from "lucide-react";

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
    },
    {
      icon: Sun,
      title: "Solar and Renewable Energy",
      description: "Specialized financial advisory for renewable energy projects and sustainable businesses.",
      serviceLink: "project-finance",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    },
    {
      icon: Gem,
      title: "Diamond and Jewellery",
      description: "Expert financial solutions for diamond merchants and jewellery manufacturers.",
      serviceLink: "corporate-tax",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
    }
  ];

  const clientLogos = [
    { 
      logo: "/lovable-uploads/13c66609-7415-4bf9-b5ec-554eb84e468f.png"
    },
    { 
      logo: "/lovable-uploads/4dae8bfe-dd58-42e2-bc02-2ffe50021d24.png"
    },
    { 
      logo: "/lovable-uploads/0fc16b64-3e12-4220-9ae3-53df248a1d9d.png"
    },
    { 
      logo: "/lovable-uploads/1d04c1e7-f3ee-4f43-b2ca-a2ad2c418ced.png"
    },
    { 
      logo: "/lovable-uploads/af699bc4-9805-4396-88b3-52a00c725526.png"
    },
    { 
      logo: "/lovable-uploads/8de68a8e-ac42-472b-a94d-1df8dbb2f365.png"
    },
    { 
      logo: "/lovable-uploads/05ef4dc8-4773-42a5-8f4f-689c6d1268a5.png"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8">
              Industries <span className="text-gold">We Serve</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Tailored financial strategies for every business domain. Our deep industry expertise helps us deliver 
              solutions that are perfectly aligned with sector-specific challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {industries.map((industry, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-300"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-2xl text-navy mb-4">{industry.title}</h3>
                    <p className="text-charcoal mb-8 leading-relaxed text-lg flex-1">{industry.description}</p>
                    <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white w-full group-hover:bg-navy group-hover:text-white transition-all duration-300 text-lg px-6 py-3 mt-auto">
                      <Link to={`/services#${industry.serviceLink}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase with Auto-sliding */}
      <section className="py-24 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-6">Trusted by Industry Leaders</h2>
            <p className="text-2xl text-charcoal max-w-3xl mx-auto">
              We're proud to work with some of the most respected names across various industries
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div key={index} className="flex-shrink-0 w-64 mx-8">
                  <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt="Client Logo"
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-8">Why Industry Expertise Matters</h2>
              <div className="space-y-8 text-charcoal leading-relaxed text-lg">
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
                  but also practically implementable within your specific business context. With 500+ clients 
                  across diverse sectors, we bring proven expertise to every partnership.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-navy to-navy/80 text-white p-8 transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-3xl text-gold mb-3">500+</h3>
                <p className="text-base">Clients</p>
              </Card>
              <Card className="bg-gradient-to-br from-gold to-gold/80 text-white p-8 transform hover:scale-105 transition-transform duration-300 mt-8">
                <h3 className="font-bold text-3xl mb-3">5+</h3>
                <p className="text-base">Years Experience</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-8">Ready to Discuss Your Industry-Specific Needs?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let our industry experts help you navigate the unique challenges and opportunities in your sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-orange hover:bg-orange/90 text-white px-10 py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105">
              <Link to="/contact">Schedule Industry Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 text-xl rounded-lg transition-all duration-200">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Shield, TrendingUp, Award } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Corporate Tax Planning",
      description: "Strategic tax optimization and compliance solutions for your business growth.",
      icon: "📊"
    },
    {
      title: "Project Finance & Credit",
      description: "Comprehensive funding strategies and loan syndication services.",
      icon: "💼"
    },
    {
      title: "Internal Audit & Compliance",
      description: "Risk-based audit and regulatory compliance support.",
      icon: "🔍"
    },
    {
      title: "Business Consultancy",
      description: "Strategic planning, valuation, and management consulting services.",
      icon: "💡"
    }
  ];

  const whyChooseUs = [
    { text: "Deep domain expertise", icon: CheckCircle },
    { text: "Trusted by top corporates", icon: CheckCircle },
    { text: "End-to-end financial solutions", icon: CheckCircle },
    { text: "Transparent & ethical advisory", icon: CheckCircle }
  ];

  const testimonials = [
    {
      text: "Wealthcore's strategic tax planning helped us optimize our tax burden significantly while ensuring full compliance.",
      author: "CFO, Manufacturing Company",
      company: "Fortune 500 Client"
    },
    {
      text: "Their project finance expertise was instrumental in securing funding for our expansion projects.",
      author: "Director, Real Estate",
      company: "Leading Developer"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 leading-tight">
                Empowering Business Growth Through 
                <span className="text-gold"> Strategic Financial Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Partner with India's Leading Corporate Tax & Financial Advisory Firm. 
                We deliver strategic, efficient, and compliant solutions for corporates and entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-200">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="w-full h-96 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl backdrop-blur-sm border border-gold/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2">Strategic Excellence</h3>
                  <p className="text-gray-300">Driving business success through expert financial advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Our Expertise</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">{service.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-orange mx-auto" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wealthcore Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-6">Why Wealthcore?</h2>
              <p className="text-xl text-charcoal mb-8 leading-relaxed">
                With a pan-India footprint and deep expertise across taxation, finance, and audit domains, 
                we are partners in your business success.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-6 h-6 text-orange" />
                    <span className="text-charcoal font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-navy hover:bg-navy/90 text-white px-8 py-3 mt-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-navy to-navy/80 text-white p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Users className="w-8 h-8 text-gold mb-3" />
                  <h3 className="font-bold text-lg mb-2">500+</h3>
                  <p className="text-sm">Satisfied Clients</p>
                </Card>
                <Card className="bg-gradient-to-br from-gold to-gold/80 text-white p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
                  <Shield className="w-8 h-8 text-white mb-3" />
                  <h3 className="font-bold text-lg mb-2">100%</h3>
                  <p className="text-sm">Compliance Rate</p>
                </Card>
                <Card className="bg-gradient-to-br from-orange to-orange/80 text-white p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 -mt-4">
                  <Award className="w-8 h-8 text-white mb-3" />
                  <h3 className="font-bold text-lg mb-2">15+</h3>
                  <p className="text-sm">Years Experience</p>
                </Card>
                <Card className="bg-gradient-to-br from-charcoal to-charcoal/80 text-white p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-4">
                  <TrendingUp className="w-8 h-8 text-gold mb-3" />
                  <h3 className="font-bold text-lg mb-2">95%</h3>
                  <p className="text-sm">Success Rate</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Client Testimonials</h2>
            <p className="text-xl text-charcoal">What our clients say about our services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl text-gold mb-4">"</div>
                  <p className="text-charcoal leading-relaxed mb-6 italic">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-navy">{testimonial.author}</p>
                    <p className="text-sm text-charcoal">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our expert team and discover how we can help optimize your financial strategy.
          </p>
          <Button asChild className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

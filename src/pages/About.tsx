
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Our team brings deep domain knowledge and years of experience across financial advisory services."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We leverage cutting-edge solutions and innovative approaches to solve complex financial challenges."
    },
    {
      icon: Users,
      title: "Client-first approach",
      description: "Every strategy and solution is tailored to meet our clients' unique needs and objectives."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "₹1000Cr+", label: "Projects Financed", icon: TrendingUp },
    { number: "100%", label: "Compliance Rate", icon: Target }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 animate-fade-in">
              A Vision for <span className="text-gold">Smarter Business Decisions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-in">
              Wealthcore Capital Advisory Private Limited is a financial and tax consultancy firm committed to 
              delivering strategic, efficient, and compliant solutions for corporates and entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-6">Our Story</h2>
              <div className="space-y-6 text-charcoal leading-relaxed">
                <p>
                  With a pan-India footprint and deep expertise across taxation, finance, and audit domains, 
                  we are partners in your business success. Our clients include some of the most reputed 
                  corporate groups, especially from industrial hubs like Surat.
                </p>
                <p>
                  We understand that every business is unique, and so are its financial challenges. Our approach 
                  combines industry best practices with innovative solutions to deliver results that matter.
                </p>
                <p>
                  From startups to established enterprises, we've helped organizations across various sectors 
                  optimize their financial strategies, ensure regulatory compliance, and achieve sustainable growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-lightgrey to-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="Professional building" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-navy">Our Mission</h2>
                </div>
                <p className="text-charcoal leading-relaxed text-lg">
                  To empower businesses with strategic financial insights that drive growth and ensure compliance. 
                  We are committed to being the trusted advisor that helps organizations make informed financial 
                  decisions for sustainable success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-navy">Our Vision</h2>
                </div>
                <p className="text-charcoal leading-relaxed text-lg">
                  To be India's most trusted partner in financial and tax advisory. We envision a future where 
                  every business, regardless of size, has access to world-class financial expertise to unlock 
                  their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-gold group-hover:to-orange transition-all duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">{value.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-heading font-bold text-4xl text-gold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-charcoal mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help your business achieve its financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-200">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

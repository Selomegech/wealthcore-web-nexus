
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, TrendingUp, User, Settings } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountingNumber from "@/components/CountingNumber";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
    { number: 100, label: "Clients Served", icon: Users, suffix: "+" },
    { number: 5, label: "Years Experience", icon: Award, suffix: "+" },
    { number: 6, label: "Services", icon: Settings, suffix: "+" },
    { number: 100, label: "Success Rate", icon: Target, suffix: "%" }
  ];

  const teamMember = {
    name: "CA Anmol Kedia",
    designation: "Director & Founder",
    specialization: "Corporate Tax Planning & Strategic Advisory",
    experience: "15+ years",
    description: "Expert in complex tax structures and strategic financial planning for large corporates. Led numerous successful project financing initiatives."
  };

  const [statsRef, statsVisible] = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6">
                A Vision for <span className="text-gold">Smarter Business Decisions</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Wealthcore Capital Advisory Private Limited is a financial and tax consultancy firm committed to 
                delivering strategic, efficient, and compliant solutions for corporates and entrepreneurs.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in">
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
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-lightgrey to-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/5f6ee8c0-264f-4ba4-a35e-cbd3d479f538.png" 
                    alt="Wealthcore Capital Advisory" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Meet Our Expert</h2>
              <p className="text-xl text-charcoal max-w-3xl mx-auto">
                Our seasoned professional brings decades of experience in finance, taxation, and strategic advisory.
              </p>
            </div>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gradient-to-br from-navy to-charcoal text-white p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                          <User className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl mb-2">{teamMember.name}</h3>
                        <p className="text-gold text-lg font-medium">{teamMember.designation}</p>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <p className="text-sm text-charcoal mb-2">
                          <span className="font-medium">Specialization:</span> {teamMember.specialization}
                        </p>
                        <p className="text-sm text-charcoal mb-4">
                          <span className="font-medium">Experience:</span> {teamMember.experience}
                        </p>
                      </div>
                      <p className="text-charcoal leading-relaxed mb-6">{teamMember.description}</p>
                      <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white w-fit">
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
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
            </AnimatedSection>

            <AnimatedSection delay={200}>
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Our Core Values</h2>
              <p className="text-xl text-charcoal max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-gold group-hover:to-orange transition-all duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-navy mb-3">{value.title}</h3>
                    <p className="text-charcoal text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300">Numbers that reflect our commitment to excellence</p>
            </div>
          </AnimatedSection>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-heading font-bold text-4xl text-gold mb-2">
                    <CountingNumber 
                      end={stat.number} 
                      isVisible={statsVisible} 
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
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
      </AnimatedSection>
    </div>
  );
};

export default About;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "CA Anmol Kedia",
      designation: "Director & Founder",
      specialization: "Corporate Tax Planning & Strategic Advisory",
      experience: "15+ years",
      description: "Expert in complex tax structures and strategic financial planning for large corporates. Led numerous successful project financing initiatives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "CA [Name]",
      designation: "Partner - Audit & Compliance",
      specialization: "Internal Audit & Risk Management",
      experience: "12+ years",
      description: "Specialist in designing and implementing robust internal control systems. Extensive experience in regulatory compliance across industries.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b829"
    },
    {
      name: "CA [Name]",
      designation: "Senior Manager - Project Finance",
      specialization: "Banking & Financial Structuring",
      experience: "10+ years",
      description: "Expert in project finance and banking relationships. Successfully structured funding for projects worth over ₹1000 crores.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "[Name]",
      designation: "Manager - Business Consulting",
      specialization: "Strategic Planning & Valuation",
      experience: "8+ years",
      description: "Specialist in business valuation and strategic consulting. Helped numerous startups and MSMEs scale their operations.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    }
  ];

  const values = [
    {
      title: "Expertise",
      description: "Our team combines deep technical knowledge with practical industry experience."
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our professional dealings."
    },
    {
      title: "Innovation",
      description: "We continuously evolve our approaches to meet changing business needs."
    },
    {
      title: "Client Focus",
      description: "Every strategy is tailored to our clients' unique objectives and challenges."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 animate-fade-in">
              Meet the <span className="text-gold">Experts</span> Behind Wealthcore
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-in">
              Our team of seasoned professionals brings together decades of experience in finance, 
              taxation, and strategic advisory. Get to know the experts who will guide your business to success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <div className="mb-4">
                        <h3 className="font-heading font-bold text-xl text-navy mb-1">{member.name}</h3>
                        <p className="text-orange font-medium mb-2">{member.designation}</p>
                        <p className="text-sm text-charcoal mb-2">
                          <span className="font-medium">Specialization:</span> {member.specialization}
                        </p>
                        <p className="text-sm text-charcoal mb-4">
                          <span className="font-medium">Experience:</span> {member.experience}
                        </p>
                      </div>
                      <p className="text-sm text-charcoal leading-relaxed mb-4">{member.description}</p>
                      <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white w-fit group-hover:bg-navy group-hover:text-white transition-all duration-300">
                        Connect on LinkedIn
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Our Team Values</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              The principles that unite our team and guide our approach to client service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gold font-bold text-xl">{value.title.charAt(0)}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">{value.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-6">Our Leadership Philosophy</h2>
              <div className="space-y-6 text-charcoal leading-relaxed">
                <p>
                  At Wealthcore, we believe that exceptional client service starts with exceptional people. 
                  Our team is carefully selected not just for their technical expertise, but also for their 
                  commitment to our values and their passion for helping businesses succeed.
                </p>
                <p>
                  Each team member brings a unique perspective shaped by their diverse professional backgrounds 
                  and industry experience. This diversity of thought enables us to approach challenges from 
                  multiple angles and develop innovative solutions.
                </p>
                <p>
                  We foster a culture of continuous learning and professional development, ensuring that our 
                  team stays at the forefront of industry developments and regulatory changes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-navy to-navy/80 text-white p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-2xl text-gold mb-2">25+</h3>
                <p className="text-sm">Team Members</p>
              </Card>
              <Card className="bg-gradient-to-br from-gold to-gold/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 mt-8">
                <h3 className="font-bold text-2xl mb-2">150+</h3>
                <p className="text-sm">Years Combined Experience</p>
              </Card>
              <Card className="bg-gradient-to-br from-orange to-orange/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 -mt-4">
                <h3 className="font-bold text-2xl mb-2">15+</h3>
                <p className="text-sm">Professional Certifications</p>
              </Card>
              <Card className="bg-gradient-to-br from-charcoal to-charcoal/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 mt-4">
                <h3 className="font-bold text-2xl text-gold mb-2">98%</h3>
                <p className="text-sm">Client Retention Rate</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Ready to Work with Our Expert Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with our professionals and discover how their expertise can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
              <Link to="/contact">Schedule a Meeting</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-200">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

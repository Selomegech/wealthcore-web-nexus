import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Team = () => {
  const teamMember = {
    name: "CA Anmol Kedia",
    designation: "Director & Founder",
    specialization: "Corporate Tax Planning & Strategic Advisory",
    experience: "15+ years",
    description: "Expert in complex tax structures and strategic financial planning for large corporates. Led numerous successful project financing initiatives."
  };

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
              Meet the <span className="text-gold">Expert</span> Behind Wealthcore
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-in">
              Our seasoned professional brings decades of experience in finance, 
              taxation, and strategic advisory. Get to know the expert who will guide your business to success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Our Values</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              The principles that guide our approach to client service
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
                  At Wealthcore, we believe that exceptional client service starts with exceptional expertise. 
                  Our leader is carefully selected not just for technical knowledge, but also for commitment 
                  to our values and passion for helping businesses succeed.
                </p>
                <p>
                  Our leadership brings a unique perspective shaped by diverse professional backgrounds 
                  and industry experience. This diversity of thought enables us to approach challenges from 
                  multiple angles and develop innovative solutions.
                </p>
                <p>
                  We foster a culture of continuous learning and professional development, ensuring that we 
                  stay at the forefront of industry developments and regulatory changes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-navy to-navy/80 text-white p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-2xl text-gold mb-2">15+</h3>
                <p className="text-sm">Years Experience</p>
              </Card>
              <Card className="bg-gradient-to-br from-gold to-gold/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 mt-8">
                <h3 className="font-bold text-2xl mb-2">500+</h3>
                <p className="text-sm">Projects Completed</p>
              </Card>
              <Card className="bg-gradient-to-br from-orange to-orange/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 -mt-4">
                <h3 className="font-bold text-2xl mb-2">100%</h3>
                <p className="text-sm">Client Satisfaction</p>
              </Card>
              <Card className="bg-gradient-to-br from-charcoal to-charcoal/80 text-white p-6 transform hover:scale-105 transition-transform duration-300 mt-4">
                <h3 className="font-bold text-2xl text-gold mb-2">98%</h3>
                <p className="text-sm">Success Rate</p>
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

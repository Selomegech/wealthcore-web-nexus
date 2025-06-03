
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["Surat, Gujarat, India", "Multiple Locations Across India"],
      color: "from-navy to-navy/80"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 XXX XXX XXXX", "+91 XXX XXX XXXX"],
      color: "from-gold to-gold/80"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@wealthcore.in", "ca.anmol@wealthcore.in"],
      color: "from-orange to-orange/80"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      color: "from-charcoal to-charcoal/80"
    }
  ];

  const services = [
    "Corporate Tax Planning",
    "Project Finance & Credit",
    "Internal Audit & Compliance",
    "Business Consultancy",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 animate-fade-in">
              Let's Talk <span className="text-gold">Strategy</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-in">
              Ready to take your business to the next level? Get in touch with our expert team and discover 
              how we can help optimize your financial operations and strategic planning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-4">Get in Touch</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-charcoal text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-navy mb-6">Send us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-navy"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-navy"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-navy"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-navy"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="border-gray-300 focus:border-navy resize-none"
                        placeholder="Tell us about your requirements, challenges, or questions..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-orange hover:bg-orange/90 text-white py-3 text-lg font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">Our Office Location</h3>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-lightgrey to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-navy mx-auto mb-2" />
                        <p className="text-charcoal font-medium">Interactive Map</p>
                        <p className="text-sm text-charcoal">Surat, Gujarat, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-navy to-charcoal text-white">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-4 flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2 text-gold" />
                    Why Choose Wealthcore?
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                      <span>15+ years of industry expertise</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                      <span>Trusted by 500+ satisfied clients</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                      <span>100% compliance track record</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></div>
                      <span>End-to-end financial solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-l-4 border-l-orange">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">Quick Response Guarantee</h3>
                  <p className="text-charcoal text-sm leading-relaxed">
                    We understand that time is critical in business. That's why we guarantee a response to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait to optimize your business finances. Schedule a consultation today and take the first step towards strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
              Call Now: +91 XXX XXX XXXX
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-200">
              Email: info@wealthcore.in
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [state, handleSubmit] = useForm("xrbkejjb");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }
  }, [state.succeeded]);

  const apiKey = "AIzaSyDssB7MLoUIBbB71PP7xoNB_8DK1RTCu7g"; 
  const location = "Bhatar Trade Centrer india"; 
  
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(location)}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["B-113, Bhatar Trade centre, Bhatar ", "Surat, Gujarat - 395017"],
      color: "from-navy to-navy/80"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8200310274", "Available for Business Calls"],
      color: "from-gold to-gold/80"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["Info.wealthcoreadvisory@gmail.com", "Professional Inquiries"],
      color: "from-orange to-orange/80"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 10:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
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
      <section className="py-24 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-5xl lg:text-7xl mb-8">
              Let's Talk <span className="text-gold">Strategy</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Ready to take your business to the next level? Get in touch with our expert team and discover
              how we can help optimize your financial operations and strategic planning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mb-6">Get in Touch</h2>
            <p className="text-2xl text-charcoal max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-80">
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-4">{info.title}</h3>
                  <div className="space-y-2 flex-1 flex flex-col justify-center">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-charcoal text-xs leading-relaxed break-all">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-4xl text-navy mb-8">Send us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-medium text-charcoal mb-3">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-navy text-base py-3"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-charcoal mb-3">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-navy text-base py-3"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-medium text-charcoal mb-3">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-navy text-base py-3"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-charcoal mb-3">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-navy text-base py-3"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-charcoal mb-3">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy text-base"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-charcoal mb-3">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-gray-300 focus:border-navy resize-none text-base"
                        placeholder="Tell us about your requirements, challenges, or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-orange hover:bg-orange/90 text-white py-4 text-xl font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <Send className="w-6 h-6 mr-3" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-10">
              <div>
                <h3 className="font-heading font-bold text-3xl text-navy mb-6">Our Office Location</h3>
                <Card className="border-0 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="h-80">
          <iframe
            src={mapSrc}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wealthcore Office Location"
          ></iframe>
        </div>
      </CardContent>
    </Card>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-navy to-charcoal text-white">
                <CardContent className="p-10">
                  <h3 className="font-heading font-bold text-2xl mb-6 flex items-center">
                    <MessageCircle className="w-8 h-8 mr-3 text-gold" />
                    Why Choose Wealthcore?
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gold rounded-full mr-4 mt-2"></div>
                      <span>5+ years of industry expertise</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gold rounded-full mr-4 mt-2"></div>
                      <span>Trusted by 500+ satisfied clients</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gold rounded-full mr-4 mt-2"></div>
                      <span>100% compliance track record</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-gold rounded-full mr-4 mt-2"></div>
                      <span>End-to-end financial solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-l-4 border-l-orange">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">Quick Response Guarantee</h3>
                  <p className="text-charcoal text-base leading-relaxed">
                    We understand that time is critical in business. That's why we guarantee a response to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-8">Ready to Start Your Journey?</h2>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Don't wait to optimize your business finances. Schedule a consultation today and take the first step towards strategic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-orange hover:bg-orange/90 text-white px-10 py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105">
              Call Now: +91 8200310274
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-10 py-4 text-xl rounded-lg transition-all duration-200">
              Email: Info.wealthcoreadvisory@gmail.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
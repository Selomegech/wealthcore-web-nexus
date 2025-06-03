
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search, Book, FileText } from "lucide-react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tax", "Finance", "Audit", "Business Strategy"];

  const articles = [
    {
      title: "Section 80JJAA: Complete Guide for Employment Generation Incentives",
      excerpt: "Comprehensive overview of tax benefits under Section 80JJAA for companies creating new employment opportunities.",
      category: "Tax",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      featured: true
    },
    {
      title: "Project Finance Structuring: Best Practices for Manufacturing Sector",
      excerpt: "Key considerations and strategies for structuring project finance deals in the manufacturing industry.",
      category: "Finance",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      featured: true
    },
    {
      title: "GST Compliance for Multi-State Operations",
      excerpt: "Navigate the complexities of GST compliance for businesses operating across multiple states in India.",
      category: "Tax",
      date: "2024-01-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      featured: false
    },
    {
      title: "Internal Audit Framework for Healthcare Organizations",
      excerpt: "Establishing effective internal audit processes specific to healthcare and hospital management.",
      category: "Audit",
      date: "2024-01-02",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      featured: false
    },
    {
      title: "MSME Funding: Government Schemes and Banking Solutions",
      excerpt: "Complete guide to financing options available for small and medium enterprises in India.",
      category: "Finance",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      featured: false
    },
    {
      title: "Business Valuation Methods for Real Estate Companies",
      excerpt: "Understanding different approaches to valuing real estate and infrastructure businesses.",
      category: "Business Strategy",
      date: "2023-12-20",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 animate-fade-in">
              Financial <span className="text-gold">Insights</span> That Matter
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed animate-slide-in mb-8">
              Stay informed with the latest updates on taxation, finance, audit practices, and business strategy. 
              Our expert insights help you make informed decisions for your business.
            </p>
            <div className="max-w-md mx-auto">
              <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-navy"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-navy text-white" 
                    : "border-navy text-navy hover:bg-navy hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl text-navy mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl text-navy mb-3 group-hover:text-orange transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-charcoal mb-4 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-charcoal">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(article.date)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-orange hover:text-orange/80 p-0 group-hover:translate-x-1 transition-transform duration-300">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-navy mb-8">
            Latest Insights
            {filteredArticles.length > 0 && (
              <span className="text-lg font-normal text-charcoal ml-2">
                ({filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''})
              </span>
            )}
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-charcoal mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-charcoal mb-2">No articles found</h3>
              <p className="text-charcoal">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <Card key={index} className="group bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/20 transition-colors duration-300"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-orange text-white px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-lg text-navy mb-2 group-hover:text-orange transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-charcoal text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-charcoal">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(article.date)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-orange hover:text-orange/80 p-0 h-auto group-hover:translate-x-1 transition-transform duration-300">
                          <ArrowRight className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Book className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Stay Updated with Our Insights</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and receive the latest financial insights, tax updates, and business strategies directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-charcoal border-none"
              />
              <Button className="bg-orange hover:bg-orange/90 text-white px-6 py-2 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-navy mb-6">Need Personalized Advice?</h2>
          <p className="text-xl text-charcoal mb-8 max-w-3xl mx-auto">
            While our articles provide general insights, every business situation is unique. 
            Let our experts provide personalized advice for your specific challenges.
          </p>
          <Button asChild className="bg-navy hover:bg-navy/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 transform hover:scale-105">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;

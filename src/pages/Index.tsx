
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Sprout, Tractor, Phone, Mail, MapPin, Star, Users, Package, Award, ChevronDown, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const products = [{
    name: "NPK 19:19:19 Fertilizer",
    description: "Balanced nutrition for all crops",
    price: "₹1450/bag",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/12/FB/UD/CF/11973220/npk-fertilizer-1000x1000.jpg",
    badge: "Bestseller",
    category: "fertilizer"
  }, {
    name: "Hybrid Mustard Seeds",
    description: "High-yielding variety for Bengal",
    price: "₹400/kg",
    image: "https://www.maliseeds.in/wp-content/uploads/2021/12/3-3.jpg",
    badge: "",
    category: "seed"
  }, {
    name: "Insecticide - Alecto",
    description: "Effective against multiple pests",
    price: "₹6500/liter",
    image: "https://www.agriplexindia.com/cdn/shop/files/6.png?v=1693373482",
    badge: "New",
    category: "pesticide"
  }, {
    name: "Organic Manure",
    description: "100% natural soil conditioner",
    price: "₹300/bag",
    image: "https://kj1bcdn.b-cdn.net/media/70950/manure.jpg",
    badge: "",
    category: "fertilizer"
  }];

  const testimonials = [{
    name: "Ramesh Das",
    location: "Farmer, Burdwan",
    rating: 5,
    comment: "After buying fertilizer from AgriGrow Bengal, my rice yield increased by 20%. The price is reasonable and the quality is very good.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
  }, {
    name: "Sumitra Sarkar",
    location: "Farmer, Nadia",
    rating: 5,
    comment: "Using their hybrid seeds, I achieved great success in vegetable farming. I received timely delivery.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
  }, {
    name: "Anil Mukherjee",
    location: "Farmer, Hooghly",
    rating: 4,
    comment: "I used their pesticide for pest problems. Very effective and safe.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
  }];

  const stats = [{
    number: "5000+",
    label: "Satisfied Farmers"
  }, {
    number: "100+",
    label: "Agricultural Products"
  }, {
    number: "23",
    label: "Districts Served"
  }, {
    number: "10+",
    label: "Years of Experience"
  }];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> +91 8967852561</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-1" /> info@agrigrowbengal.in</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> West Bengal, India</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-xs">Speak in Bengali | Call in Bengali</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-700 mr-2" />
              <span className="text-xl font-bold text-green-800">AgriGrow Bengal</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-800 hover:text-green-800 font-medium">Home</a>
              <div className="relative group">
                <button className="text-gray-800 hover:text-green-800 font-medium flex items-center">
                  Products <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50">
                  <a href="#fertilizers" className="block px-4 py-2 text-gray-800 hover:bg-green-50">Fertilizers</a>
                  <a href="#pesticides" className="block px-4 py-2 text-gray-800 hover:bg-green-50">Pesticides</a>
                  <a href="#seeds" className="block px-4 py-2 text-gray-800 hover:bg-green-50">Seeds</a>
                </div>
              </div>
              <a href="#about" className="text-gray-800 hover:text-green-800 font-medium">About Us</a>
              <a href="#contact" className="text-gray-800 hover:text-green-800 font-medium">Contact</a>
            </div>
            
            <div className="hidden md:block">
              <Button className="bg-green-700 hover:bg-green-800">Get Quote</Button>
            </div>
            
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4">
              <a href="#home" className="block py-2 px-4 text-gray-800 hover:bg-green-50">Home</a>
              <a href="#products" className="block py-2 px-4 text-gray-800 hover:bg-green-50">Products</a>
              <a href="#about" className="block py-2 px-4 text-gray-800 hover:bg-green-50">About Us</a>
              <a href="#contact" className="block py-2 px-4 text-gray-800 hover:bg-green-50">Contact</a>
              <div className="px-4 py-2">
                <Button className="w-full bg-green-700 hover:bg-green-800">Get Quote</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Agricultural Supplies for West Bengal Farmers</h1>
              <p className="text-lg mb-8">Trusted name for high-quality fertilizers, pesticides and seeds. The reliable destination for Bengal farmers.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                  View Our Products
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-gray-950">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="animate-bounce-slow">
                <img alt="Bengali Farmer" className="rounded-lg shadow-xl" src="/lovable-uploads/7b0004a1-326f-45ea-96a4-d0f8d594503b.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose AgriGrow Bengal?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide the highest quality agricultural supplies for West Bengal farmers that increase crop production.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Sprout className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">High Quality Seeds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Certified high-yielding seeds suitable for Bengal's soil and climate.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Tractor className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">Effective Fertilizers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Balanced nutrition fertilizers that enhance soil fertility.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">Safe Pesticides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Safe and effective solutions to protect crops from pests and diseases.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">High-quality agricultural supplies specially selected for Bengal farmers.</p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fertilizer">Fertilizers</TabsTrigger>
              <TabsTrigger value="seed">Seeds</TabsTrigger>
              <TabsTrigger value="pesticide">Pesticides</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      {product.badge && (
                        <div className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded ${product.badge === 'Bestseller' ? 'bg-green-700' : 'bg-red-600'}`}>
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-green-700">{product.price}</span>
                        <Button size="sm" className="bg-green-700 hover:bg-green-800">
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Farmer Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Listen to satisfied farmers from across Bengal.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">"{testimonial.comment}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2 bg-green-700 text-white p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                  <p className="mb-6">Contact us today to learn about our products or place an order.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-4" />
                      <span>Kolkata, West Bengal - 700001</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-4" />
                      <span>+91 8967852561</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-4" />
                      <span>info@agrigrowbengal.in</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <textarea id="message" rows={4} className="w-full px-3 py-2 border border-input rounded-md" placeholder="Write your message"></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-xl font-bold">AgriGrow Bengal</span>
              </div>
              <p className="text-gray-400 mb-4">Serving West Bengal farmers since 2010. Trusted name for quality agricultural supplies.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
              <ul className="space-y-2">
                <li><a href="#fertilizers" className="text-gray-400 hover:text-white">Fertilizers</a></li>
                <li><a href="#pesticides" className="text-gray-400 hover:text-white">Pesticides</a></li>
                <li><a href="#seeds" className="text-gray-400 hover:text-white">Seeds</a></li>
                <li><a href="#organic" className="text-gray-400 hover:text-white">Organic Products</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mt-1 mr-3" />
                  <span>Bethuadahari, Nakashipara, Nadia, 741126</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+91 8967852561</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>info@agrigrowbengal.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 AgriGrow Bengal. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/918967852561" className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-colors" target="_blank" rel="noopener noreferrer">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;

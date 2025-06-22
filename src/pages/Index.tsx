import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Sprout, Tractor, Phone, Mail, MapPin, Star, Users, Package, Award, ChevronDown, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "NPK 19:19:19 Fertilizer",
      description: "Balanced nutrition for all crops",
      price: "₹450/bag",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      badge: "Bestseller",
      category: "fertilizer"
    },
    {
      name: "Hybrid Rice Seeds",
      description: "High-yielding variety for Bengal",
      price: "₹1200/kg",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=200&fit=crop",
      badge: "",
      category: "seed"
    },
    {
      name: "Insecticide - CropGuard",
      description: "Effective against multiple pests",
      price: "₹650/liter",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=300&h=200&fit=crop",
      badge: "New",
      category: "pesticide"
    },
    {
      name: "Organic Manure",
      description: "100% natural soil conditioner",
      price: "₹300/bag",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=300&h=200&fit=crop",
      badge: "",
      category: "fertilizer"
    }
  ];

  const testimonials = [
    {
      name: "রমেশ দাস",
      location: "কৃষক, বর্ধমান",
      rating: 5,
      comment: "AgriGrow Bengal থেকে সার কিনে আমার ধানের ফলন ২০% বেড়েছে। দাম যুক্তিসঙ্গত এবং গুণমান খুবই ভালো।",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "সুমিত্রা সরকার",
      location: "কৃষক, নদীয়া",
      rating: 5,
      comment: "তাদের হাইব্রিড বীজ ব্যবহার করে আমার সবজি চাষে দারুণ সাফল্য পেয়েছি। সময়মতো ডেলিভারি পেয়েছি।",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "অনিল মুখার্জী",
      location: "কৃষক, হুগলি",
      rating: 4,
      comment: "পোকামাকড়ের সমস্যার জন্য তাদের কীটনাশক ব্যবহার করেছি। খুবই কার্যকরী এবং নিরাপদ।",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "5000+", label: "সন্তুষ্ট কৃষক" },
    { number: "100+", label: "কৃষি পণ্য" },
    { number: "23", label: "জেলায় সেবা" },
    { number: "10+", label: "বছরের অভিজ্ঞতা" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> +91 9876543210</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-1" /> info@agrigrowbengal.in</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> পশ্চিমবঙ্গ, ভারত</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-xs">বাংলায় কথা বলুন | Call in Bengali</span>
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
              <a href="#home" className="text-gray-800 hover:text-green-800 font-medium">হোম</a>
              <div className="relative group">
                <button className="text-gray-800 hover:text-green-800 font-medium flex items-center">
                  পণ্যসমূহ <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50">
                  <a href="#fertilizers" className="block px-4 py-2 text-gray-800 hover:bg-green-50">সার</a>
                  <a href="#pesticides" className="block px-4 py-2 text-gray-800 hover:bg-green-50">কীটনাশক</a>
                  <a href="#seeds" className="block px-4 py-2 text-gray-800 hover:bg-green-50">বীজ</a>
                </div>
              </div>
              <a href="#about" className="text-gray-800 hover:text-green-800 font-medium">আমাদের সম্পর্কে</a>
              <a href="#contact" className="text-gray-800 hover:text-green-800 font-medium">যোগাযোগ</a>
            </div>
            
            <div className="hidden md:block">
              <Button className="bg-green-700 hover:bg-green-800">দাম জানুন</Button>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4">
              <a href="#home" className="block py-2 px-4 text-gray-800 hover:bg-green-50">হোম</a>
              <a href="#products" className="block py-2 px-4 text-gray-800 hover:bg-green-50">পণ্যসমূহ</a>
              <a href="#about" className="block py-2 px-4 text-gray-800 hover:bg-green-50">আমাদের সম্পর্কে</a>
              <a href="#contact" className="block py-2 px-4 text-gray-800 hover:bg-green-50">যোগাযোগ</a>
              <div className="px-4 py-2">
                <Button className="w-full bg-green-700 hover:bg-green-800">দাম জানুন</Button>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">পশ্চিমবঙ্গের কৃষকদের জন্য মানসম্পন্ন কৃষি উপকরণ</h1>
              <p className="text-lg mb-8">উন্নত মানের সার, কীটনাশক এবং বীজের জন্য বিশ্বস্ত নাম। বাংলার কৃষকদের ভরসার ঠিকানা।</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                  আমাদের পণ্য দেখুন
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  যোগাযোগ করুন
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="animate-bounce-slow">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=400&fit=crop" 
                  alt="Bengali Farmer" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">কেন AgriGrow Bengal বেছে নিবেন?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">আমরা পশ্চিমবঙ্গের কৃষকদের জন্য সর্বোচ্চ মানের কৃষি উপকরণ প্রদান করি যা ফসলের উৎপাদন বৃদ্ধি করে।</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Sprout className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">উন্নত মানের বীজ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">প্রত্যয়িত উচ্চ ফলনশীল বীজ যা বাংলার মাটি ও আবহাওয়ার জন্য উপযুক্ত।</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Tractor className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">কার্যকর সার</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">সুষম পুষ্টি উপাদান সমৃদ্ধ সার যা মাটির উর্বরতা বৃদ্ধি করে।</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">নিরাপদ কীটনাশক</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">ফসলকে পোকামাকড় ও রোগবালাই থেকে রক্ষা করার নিরাপদ ও কার্যকর সমাধান।</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">আমাদের পণ্যসমূহ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">বাংলার কৃষকদের জন্য বিশেষভাবে নির্বাচিত উচ্চমানের কৃষি উপকরণ।</p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto">
              <TabsTrigger value="all">সব</TabsTrigger>
              <TabsTrigger value="fertilizer">সার</TabsTrigger>
              <TabsTrigger value="seed">বীজ</TabsTrigger>
              <TabsTrigger value="pesticide">কীটনাশক</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      {product.badge && (
                        <div className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded ${
                          product.badge === 'Bestseller' ? 'bg-green-700' : 'bg-red-600'
                        }`}>
                          {product.badge === 'Bestseller' ? 'বেস্টসেলার' : 'নতুন'}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-green-700">{product.price}</span>
                        <Button size="sm" className="bg-green-700 hover:bg-green-800">
                          কার্টে যোগ করুন
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
              সব পণ্য দেখুন
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">কৃষকদের মতামত</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">সারা বাংলার সন্তুষ্ট কৃষকদের কথা শুনুন।</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
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
                  <h2 className="text-2xl font-bold mb-6">যোগাযোগ করুন</h2>
                  <p className="mb-6">আমাদের পণ্য সম্পর্কে জানতে বা অর্ডার করতে আজই যোগাযোগ করুন।</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-4" />
                      <span>কলকাতা, পশ্চিমবঙ্গ - ৭০০০০১</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-4" />
                      <span>+91 9876543210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-4" />
                      <span>info@agrigrowbengal.in</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">বার্তা পাঠান</h2>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">আপনার নাম</Label>
                      <Input id="name" placeholder="নাম লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="email">ইমেইল ঠিকানা</Label>
                      <Input id="email" type="email" placeholder="ইমেইল লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="phone">ফোন নম্বর</Label>
                      <Input id="phone" type="tel" placeholder="ফোন নম্বর লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="message">আপনার বার্তা</Label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-3 py-2 border border-input rounded-md" 
                        placeholder="বার্তা লিখুন"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                      বার্তা পাঠান
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
              <p className="text-gray-400 mb-4">২০১০ সাল থেকে পশ্চিমবঙ্গের কৃষকদের সেবায় নিয়োজিত। মানসম্পন্ন কৃষি উপকরণের বিশ্বস্ত নাম।</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">হোম</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white">পণ্যসমূহ</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">আমাদের সম্পর্কে</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">যোগাযোগ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">পণ্য ক্যাটাগরি</h3>
              <ul className="space-y-2">
                <li><a href="#fertilizers" className="text-gray-400 hover:text-white">সার</a></li>
                <li><a href="#pesticides" className="text-gray-400 hover:text-white">কীটনাশক</a></li>
                <li><a href="#seeds" className="text-gray-400 hover:text-white">বীজ</a></li>
                <li><a href="#organic" className="text-gray-400 hover:text-white">জৈব পণ্য</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">যোগাযোগের তথ্য</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mt-1 mr-3" />
                  <span>কলকাতা, পশ্চিমবঙ্গ - ৭০০০০১</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+91 9876543210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>info@agrigrowbengal.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© ২০২৩ AgriGrow Bengal. সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">গোপনীয়তা নীতি</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">সেবার শর্তাবলী</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/919876543210" 
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;

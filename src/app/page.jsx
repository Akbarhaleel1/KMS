'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Headphones, ShoppingCart, User, Search, Heart, Star, ArrowLeft, ArrowRight, Plus, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Crown, Sparkles, Gift, Play, Pause, Volume2, Check, Award, Shield, Truck, Clock, ChevronDown, Menu, X, Globe, Package, Users, Target, BarChart3, Handshake } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
const MobileAccessoriesSections = () => {
  return (
    <div className="bg-black">
      {/* Mobile Phones Section - Image Left, Text Right */}
      <section className="px-6 py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Display - Left Side */}
            <div className="relative animate-fadeInLeft">
              <div className="w-full max-w-md mx-auto h-[400px] md:h-[500px] relative group">
                {/* Main Phone Display with Luxury Design */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/90 via-black/80 to-yellow-900/90 rounded-3xl shadow-2xl shadow-yellow-500/20 group-hover:scale-105 transition-all duration-500 animate-float border border-yellow-500/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-500/10 rounded-3xl"></div>

                  {/* Full Size Image */}
                  <div className="absolute inset-0 p-2">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-amber-500/30 rounded-xl blur-sm"></div>
                      <img
                        src="https://i.ibb.co/x8z5WTSf/Apple-or-Samsung.jpg"
                        alt="Premium Mobile Phone"
                        className="relative w-full h-full object-cover rounded-xl shadow-lg border border-yellow-500/30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Content - Right Side */}
            <div className="animate-fadeInRight">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                <span className="font-arabic">اكتشف أحدث</span>
                <br />
                Discover the latest
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent italic">mobile technology</span>
              </h2>

              <h3 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                <span className="font-arabic text-yellow-400">— الهواتف المحمولة لجميع الاحتياجات</span>
                <br />
                — mobile phones for every need and lifestyle
              </h3>

              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                <span className="font-arabic text-yellow-400 block mb-2">مجموعة متنوعة من الهواتف المحمولة المختارة</span>
                Explore our curated collection of premium mobile phones. From flagship smartphones to budget-friendly options, find the perfect device that matches your digital lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section - Text Left, Image Right */}
      <section className="px-6 py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content - Left Side */}
            <div className="animate-fadeInLeft order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                <span className="font-arabic">استكشف عالم</span>
                <br />
                Explore the world of
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent italic">premium accessories</span>
              </h2>

              <h3 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
                <span className="font-arabic text-yellow-400">— إكسسوارات عالية الجودة لأجهزتك</span>
                <br />
                — high-quality accessories for all your devices
              </h3>

              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                <span className="font-arabic text-yellow-400 block mb-2">إكسسوارات الهواتف والأجهزة الإلكترونية المميزة</span>
                Complete your tech setup with our premium collection of accessories. From wireless chargers to protective cases, enhance your device experience with style and functionality.
              </p>
            </div>

            {/* Product Display - Right Side */}
            <div className="relative animate-fadeInRight order-1 lg:order-2">
              <div className="w-full max-w-md mx-auto h-[400px] md:h-[500px] relative group">
                {/* Main Accessories Display */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/90 via-black/80 to-yellow-900/90 rounded-3xl shadow-2xl shadow-yellow-500/20 group-hover:scale-105 transition-all duration-500 animate-float border border-yellow-500/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-500/10 rounded-3xl"></div>
                  <div className="absolute inset-0 p-2">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-amber-500/30 rounded-xl blur-sm"></div>
                      <img src="https://i.ibb.co/C3NK5h31/lap-jpeg.jpg" alt="Premium Accessories" className="relative w-full h-full object-cover rounded-xl shadow-lg border border-yellow-500/30" />
                    </div>
                  </div>
                </div>

                {/* Luxury Crown */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 md:w-28 h-8 md:h-12 bg-gradient-to-b from-yellow-500 to-amber-600 rounded-b-2xl shadow-lg shadow-yellow-500/30"></div>

                {/* Price Tag */}
                <div className="absolute bottom-12 right-4 md:right-8 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl border border-yellow-500/50 animate-bounce group-hover:scale-110 transition-all duration-300">
                  <div className="text-xs md:text-sm font-medium text-yellow-400 font-arabic">إكسسوارات فاخرة</div>
                  <div className="text-xs text-green-400 font-medium font-arabic">متوفر</div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-16 -left-4 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
                  <Headphones className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute top-32 -right-6 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}>
                  <Heart className="w-4 h-4 text-amber-400 fill-current" />
                </div>
                <Sparkles className="absolute top-8 right-8 w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        { threshold: 0.1 }
      );

      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const bestSellers = [
    {
      name: 'عطر الملوك',
      nameEn: 'Royal Essence',
      rating: 4.9,
      reviews: 1247,
      image: 'https://i.ibb.co/JRKHX2w4/Screenshot-2025-08-16-004908.png',
      badge: 'ملكي',
      description: 'عطر فاخر بنفحات العود والورد',
      gradient: 'from-yellow-400 via-yellow-500 to-amber-600'
    },
    {
      name: 'زهرة الصحراء',
      nameEn: 'Desert Flower',
      rating: 4.8,
      reviews: 892,
      image: 'https://i.ibb.co/t1nkFy9/Screenshot-2025-08-16-005036.png',
      badge: 'حصري',
      description: 'رائحة الياسمين والصندل',
      gradient: 'from-amber-400 via-orange-500 to-yellow-600'
    },
    {
      name: 'عنبر دبي',
      nameEn: 'Amber Dubai',
      rating: 4.9,
      reviews: 2156,
      image: 'https://i.ibb.co/JRKHX2w4/Screenshot-2025-08-16-004908.png',
      badge: 'جديد',
      description: 'مزيج العنبر والمسك',
      gradient: 'from-yellow-600 via-amber-600 to-orange-600'
    },
    {
      name: 'ورد الجوري',
      nameEn: 'Damask Rose',
      rating: 5.0,
      reviews: 734,
      image: 'https://i.ibb.co/t1nkFy9/Screenshot-2025-08-16-005036.png',
      badge: 'الأفضل',
      description: 'باقة من أجود الورود',
      gradient: 'from-amber-500 via-yellow-500 to-gold'
    }
  ];

  const brands = [
    'KMS', 'CARRÉ', 'AURA',
    'زارا', 'DIVA', 'العطور الملكية'
  ];

  const collections = [
    {
      name: 'مجموعة الأميرات',
      nameEn: 'Princess Collection',
      description: 'عطور نسائية راقية',
      items: '12 عطر',
      image: 'https://i.ibb.co/JRKHX2w4/Screenshot-2025-08-16-004908.png',
      gradient: 'from-amber-400 via-yellow-500 to-gold',
      bgColor: 'bg-gradient-to-br from-amber-900/20 to-yellow-900/20'
    },
    {
      name: 'مجموعة الملوك',
      nameEn: 'Royal Collection',
      description: 'عطور رجالية فاخرة',
      items: '15 عطر',
      image: 'https://i.ibb.co/t1nkFy9/Screenshot-2025-08-16-005036.png',
      gradient: 'from-yellow-400 via-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20'
    },
    {
      name: 'مجموعة العود',
      nameEn: 'Oud Collection',
      description: 'تراث الشرق الأصيل',
      items: '8 عطور',
      image: 'https://i.ibb.co/JRKHX2w4/Screenshot-2025-08-16-004908.png',
      gradient: 'from-amber-600 via-yellow-600 to-gold',
      bgColor: 'bg-gradient-to-br from-amber-900/20 to-yellow-900/20'
    }
  ];

  const testimonials = [
    {
      name: 'أميرة محمد',
      nameEn: 'Amira Mohammed',
      text: 'عطور رائعة وجودة عالية، أنصح بها الجميع',
      textEn: 'Amazing fragrances with high quality, I recommend to everyone',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop'
    },
    {
      name: 'سارة أحمد',
      nameEn: 'Sara Ahmed',
      text: 'خدمة عملاء ممتازة ومنتجات أصلية',
      textEn: 'Excellent customer service and authentic products',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
    },
    {
      name: 'محمد علي',
      nameEn: 'Mohammed Ali',
      text: 'تجربة تسوق رائعة وتوصيل سريع',
      textEn: 'Wonderful shopping experience and fast delivery',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    }
  ];

  const footerLinks = {
    shop: ['منتجات جديدة', 'الأكثر مبيعاً', 'المجموعات', 'بطاقات الهدايا'],
    about: ['قصتنا', 'المكونات', 'الاستدامة', 'الصحافة'],
    support: ['تواصل معنا', 'الشحن', 'الإرجاع', 'دليل المقاسات']
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic Background with Gold Accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x * 0.01 - 200 + 'px',
            top: mousePosition.y * 0.01 - 200 + 'px'
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-l from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            right: mousePosition.x * 0.008 - 150 + 'px',
            bottom: mousePosition.y * 0.008 - 150 + 'px'
          }}
        />

        {/* Golden Mesh Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent transform skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-500/20 to-transparent transform -skew-y-12"></div>
        </div>
      </div>

      {/* Compact Luxury Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-yellow-500/10 py-2' : 'bg-black/80 backdrop-blur-sm py-3'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Luxury Logo - Compact */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative w-20 h-20"> {/* increased size */}
                {/* Remove gradient BG */}
                <Image
                  src="https://i.ibb.co/KcDsZJYn/KMS-logo-removebg-preview.png"
                  alt="Crown Icon"
                  width={80}   // control actual logo size
                  height={80}
                  className="object-contain" // keep logo ratio without cropping
                  unoptimized
                />
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent font-arabic">
                  KMS 9990
                </div>

              </div>
            </div>


            {/* Navigation - Compact */}
            <nav className="hidden lg:flex items-center space-x-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 px-6 py-2 rounded-full shadow-2xl shadow-yellow-500/30">
              {[
                { ar: 'الرئيسية', en: 'Home', id: 'hero' },
                { ar: 'المنتجات', en: 'Products', id: 'products' },
                { ar: 'من نحن', en: 'About', id: 'about' },
                { ar: 'لماذا نحن', en: 'Why Us', id: 'why-choose-us' },
                { ar: 'شركاؤنا', en: 'Partners', id: 'partner' },
                { ar: 'تواصل', en: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative px-3 py-1 text-xs text-black hover:text-gray-800 transition-all duration-300 group font-medium"
                >
                  <div className="text-center">
                    <div className="font-arabic text-xs font-semibold">{item.ar}</div>
                    <div className="text-[10px] opacity-70">{item.en}</div>
                  </div>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-xl shadow-2xl shadow-yellow-500/10 py-4">
            <div className="flex flex-col space-y-2 px-6">
              {[
                { ar: 'الرئيسية', en: 'Home', id: 'hero' },
                { ar: 'المنتجات', en: 'Products', id: 'products' },
                { ar: 'من نحن', en: 'About', id: 'about' },
                { ar: 'لماذا نحن', en: 'Why Us', id: 'why-choose-us' },
                { ar: 'شركاؤنا', en: 'Partners', id: 'partner' },
                { ar: 'تواصل', en: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="px-4 py-3 text-white hover:text-yellow-400 transition-colors duration-300 border-b border-yellow-500/20"
                >
                  <div className="flex justify-between items-center">
                    <div className="font-arabic text-sm font-semibold">{item.ar}</div>
                    <div className="text-xs opacity-70">{item.en}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        ref={el => sectionRefs.current[0] = el}
        id="hero"
        className="relative px-6 pt-32 pb-20 overflow-hidden bg-black"
      >
        {/* Floating Golden Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight mb-8">
                <span className="inline-block animate-slideUp font-arabic">شريكك العالمي</span>{' '}
                <span className="inline-block animate-slideUp" style={{ animationDelay: '0.2s' }}>في</span>{' '}
                <span className="inline-block italic bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-slideUp" style={{ animationDelay: '0.4s' }}>الجملة</span>
              </h1>
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-8">
                <span className="inline-block animate-slideUp">Your Global Wholesale</span>{' '}
                <span className="inline-block animate-slideUp" style={{ animationDelay: '0.2s' }}>and Distribution</span>{' '}
                <span className="inline-block italic bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-slideUp" style={{ animationDelay: '0.4s' }}>Partner</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fadeIn leading-relaxed" style={{ animationDelay: '0.6s' }}>
                <span className="font-arabic text-yellow-400 block mb-2">مقرنا في دبي، KMS 9990 هي شركة جملة وتوزيع موثوقة تخدم دول الخليج والهند والأسواق الدولية</span>
                Headquartered in Dubai, KMS 9990 is a trusted wholesale and distribution company serving the GCC, India, and international markets. We connect businesses with high-quality products across industries — from perfumes and fashion to electronics and gourmet food.
              </p>

              {/* Enhanced Search Bar */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-lg mb-12 border border-yellow-500/20 animate-slideUp" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="group cursor-pointer hover:bg-yellow-500/10 p-3 rounded-lg transition-all duration-300 text-center border border-yellow-500/20 hover:border-yellow-500/40">
                        <Crown className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                        <span className="text-sm font-medium text-yellow-400 font-arabic">المنتجات</span>
                        <div className="text-xs text-gray-400">Products</div>
                      </div>
                      <div className="group cursor-pointer hover:bg-yellow-500/10 p-3 rounded-lg transition-all duration-300 text-center border border-yellow-500/20 hover:border-yellow-500/40">
                        <Sparkles className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                        <span className="text-sm font-medium text-yellow-400 font-arabic">الفئات</span>
                        <div className="text-xs text-gray-400">Categories</div>
                      </div>
                      <div className="group cursor-pointer hover:bg-yellow-500/10 p-3 rounded-lg transition-all duration-300 text-center border border-yellow-500/20 hover:border-yellow-500/40">
                        <Gift className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                        <span className="text-sm font-medium text-yellow-400 font-arabic">الجملة</span>
                        <div className="text-xs text-gray-400">Wholesale</div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black p-4 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg shadow-yellow-500/30 group ml-4">
                    <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeIn" style={{ animationDelay: '1s' }}>


              </div>
            </div>

            {/* Hero Right Side */}
            <div className="relative animate-fadeInRight">
              <div className="relative w-full max-w-lg mx-auto h-[500px] md:h-[600px]">
                {/* Main Product Showcase */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 rounded-3xl backdrop-blur-sm border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 overflow-hidden">

                  {/* Golden Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400/40 rounded-full"></div>
                    <div className="absolute bottom-20 right-16 w-24 h-24 border border-amber-400/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-500/40 rounded-full"></div>
                  </div>

                  {/* Product Display */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 md:p-8">
                    {/* Top Badge */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/30">
                      <span className="font-arabic">جديد</span> NEW
                    </div>

                    {/* Exclusive Badge */}
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      <span className="font-arabic">جملة</span> WHOLESALE
                    </div>

                    {/* Main Product Image */}
                    <div className="relative mb-6 group">
                      <div className="w-32 md:w-48 h-44 md:h-64 bg-gradient-to-b from-yellow-500/20 to-amber-500/30 rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-105 transition-all duration-500 animate-float border border-yellow-500/30">
                        <img
                          src="https://i.ibb.co/JRKHX2w4/Screenshot-2025-08-16-004908.png"
                          alt="KMS 9990 Products"
                          className="w-24 md:w-32 h-32 md:h-48 object-cover rounded-xl shadow-lg"
                        />
                      </div>

                      {/* Golden Sparkle Effects */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                      <Sparkles className="absolute top-2 left-2 w-6 h-6 text-yellow-400 animate-pulse" />
                    </div>

                    {/* Product Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-arabic">منتجات KMS 9990 الفاخرة</h3>
                      <p className="text-base md:text-lg text-gray-300 mb-2">Premium Wholesale Products</p>

                      <div className="text-base md:text-lg text-yellow-400 font-medium font-arabic">متوفر بالجملة</div>
                      <p className="text-sm text-gray-400">Available Wholesale</p>
                    </div>
                  </div>

                  {/* Feature Icons */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Truck className="w-3 md:w-4 h-3 md:h-4 text-yellow-400" />
                      <span className="font-arabic hidden md:inline">شحن عالمي</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-3 md:w-4 h-3 md:h-4 text-yellow-400" />
                      <span className="font-arabic hidden md:inline">جودة مضمونة</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 md:w-4 h-3 md:h-4 text-yellow-400" />
                      <span className="font-arabic hidden md:inline">منتج أصلي</span>
                    </div>
                  </div>
                </div>

                {/* Floating Golden Elements */}
                <div className="absolute -top-4 -left-4 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute -bottom-6 -right-6 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileAccessoriesSections />

      {/* Products Section */}
      <section
        ref={el => sectionRefs.current[3] = el}
        id="products"
        className="px-6 py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide">
              <span className="font-arabic bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">منتجاتنا</span>
            </h2>
            <h3 className="text-2xl md:text-4xl font-light text-gray-300 mb-6">Our Products</h3>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 mx-auto animate-pulse"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed">
              <span className="font-arabic text-yellow-400 block mb-3 text-xl">مجموعة منتجاتنا مصممة لخدمة الشركات من جميع الأحجام، عبر صناعات متعددة</span>
              Our comprehensive product portfolio is designed to serve businesses of all sizes across multiple industries, delivering excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Perfumes and Fragrances */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <img
                    src="https://i.ibb.co/9Hcwrd44/pexels-karolina-grabowska-4202325.jpg"

                    alt="Perfumes and Fragrances"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">العطور والعطور</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Perfumes and Fragrances</h5>
                <p className="text-gray-300 text-sm leading-relaxed">Exclusive imports of luxury and niche brands, catering to diverse customer preferences across the GCC, India, and international markets.</p>
              </div>
            </div>

            {/* Fancy Bags and Fashion Accessories */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <img
                    src="https://i.ibb.co/HDbSCLMK/fashion-1.png"
                    alt="Fancy Bags and Fashion Accessories"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">حقائب يدوية وإكسسوارات الموضة</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Fancy Bags and Fashion Accessories</h5>
                <p className="text-gray-300 text-sm leading-relaxed">Wholesale supply of handbags, backpacks, wallets, and travel accessories that combine functionality with global fashion trends.</p>
              </div>
            </div>

            {/* Mobile Phones and Accessories */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <img
                    src="https://i.ibb.co/ycNmXxxF/mobile-accessories-1.jpg"
                    alt="Mobile Phones and Accessories"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">الهواتف المحمولة والاكسسوارات</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Mobile Phones and Accessories</h5>
                <p className="text-gray-300 text-sm leading-relaxed">A complete range of smartphones and accessories, including chargers, protective cases, earphones, and more, from leading international brands.</p>
              </div>
            </div>

            {/* Laptops and Gaming Consoles */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <img
                    src="https://i.ibb.co/xtJfQmSr/pexels-tom-de-monteiller-187832966-13978776.jpg"

                    alt="Laptops and Gaming Consoles"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">أجهزة الكمبيوتر المحمولة وأجهزة الألعاب</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Laptops and Gaming Consoles</h5>
                <p className="text-gray-300 text-sm leading-relaxed">From business laptops to advanced gaming systems, we deliver technology solutions for work and entertainment.</p>
              </div>
            </div>

            {/* Speakers and Audio Devices */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <img
                      src="https://i.ibb.co/tpQ7sRZc/pexels-marinko-krsmanovic-700471-2651794.jpg"
                      alt="Speakers and Audio Devices"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">مكبرات الصوت والأجهزة الصوتية</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Speakers and Audio Devices</h5>
                <p className="text-gray-300 text-sm leading-relaxed">Portable speakers, home entertainment systems, and professional-grade sound equipment.</p>
              </div>
            </div>

            {/* Chocolates and Dates */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <img
                    src="https://i.ibb.co/sdnZCRHF/Chocolated-and-dated-1.png"
                    alt="Chocolates and Dates"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">الشوكولاتة والتمور</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Chocolates and Dates</h5>
                <p className="text-gray-300 text-sm leading-relaxed">Premium chocolates sourced from global brands and hand-selected dates distributed for retail, hospitality, and gifting markets.</p>
              </div>
            </div>

            {/* Electronics and Smart Devices */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <img
                    src="https://i.ibb.co/zVVPQMj9/HD-jpeg.jpg"
                    alt="Electronics and Smart Devices"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">الإلكترونيات والأجهزة الذكية</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Electronics and Smart Devices</h5>
                <p className="text-gray-300 text-sm leading-relaxed">A broad portfolio of consumer and household electronics, along with cutting-edge smart technology.</p>
              </div>
            </div>

            {/* Product Customization */}
            <div className="group relative p-6 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-yellow-500/5 rounded-3xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <img
                    src="https://i.ibb.co/G4gJw3Tt/drone-3202860.jpg"
                    alt="Electronics and Smart Devices"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">تخصيص المنتج</h4>
                <h5 className="text-lg font-semibold text-white mb-4">Product Customization</h5>
                <p className="text-gray-300 text-sm leading-relaxed">With our strong international network, we can deliver tailored products to meet specific business requirements.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={el => sectionRefs.current[1] = el}
        id="about"
        className="px-6 py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-fadeInLeft">
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                  <span className="font-arabic">من نحن</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-4">About KMS 9990</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-400/50"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  <span className="font-arabic text-yellow-400 block mb-2">KMS 9990 هي شركة جملة وتوزيع مقرها دبي مع وجود واسع في دول الخليج والهند والأسواق العالمية</span>
                  KMS 9990 is a Dubai-headquartered wholesale and distribution company with an extensive footprint across the GCC, India, and global markets. We specialize in importing and exporting a wide range of premium products, ensuring businesses receive quality, value, and reliability at scale.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/30">
                    <h4 className="text-xl font-bold text-yellow-400 mb-3 font-arabic">مهمتنا</h4>
                    <h5 className="text-lg font-semibold text-white mb-2">Our Mission</h5>
                    <p className="text-gray-300 text-sm">
                      To streamline global trade by providing businesses with a trusted distribution partner that delivers consistency, affordability, and efficiency.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/30">
                    <h4 className="text-xl font-bold text-yellow-400 mb-3 font-arabic">رؤيتنا</h4>
                    <h5 className="text-lg font-semibold text-white mb-2">Our Vision</h5>
                    <p className="text-gray-300 text-sm">
                      To be recognized as a global leader in wholesale and distribution, building long-term relationships and driving growth across continents.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/30">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
                    <div className="text-sm text-gray-300 font-arabic">عميل سعيد</div>
                    <div className="text-xs text-gray-400">Happy Customers</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/30">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">200+</div>
                    <div className="text-sm text-gray-300 font-arabic">منتج متميز</div>
                    <div className="text-xs text-gray-400">Premium Products</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative animate-fadeInRight">
              <div className="relative w-full max-w-lg mx-auto h-[500px]">
                {/* Main Visual Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 rounded-3xl backdrop-blur-sm border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 overflow-hidden">

                  {/* Golden Background Elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400/40 rounded-full"></div>
                    <div className="absolute bottom-20 right-16 w-24 h-24 border border-amber-400/40 rounded-full"></div>
                    <Sparkles className="absolute top-1/4 right-1/4 w-12 h-12 text-yellow-400 animate-pulse" />
                    <Crown className="absolute bottom-1/4 left-1/4 w-10 h-10 text-amber-400 animate-bounce" style={{ animationDelay: '1s' }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    {/* Central Logo */}
                    <div className="relative mb-8 group">
                      <div className="w-32 h-32 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl shadow-yellow-500/30 group-hover:scale-110 transition-all duration-500 animate-float">
                        <Crown className="w-16 h-16 text-black" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>

                    {/* Brand Story */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-3 font-arabic">رؤية مؤسسينا</h3>
                      <p className="text-lg text-gray-300 mb-4">Our Founders Vision</p>
                      <p className="text-sm text-yellow-400 font-arabic leading-relaxed">
                        &quot;خالد محمد، مانوج سوريندران، سهيل كاروثيداثو&quot;
                      </p>
                      <p className="text-xs text-gray-400 italic mt-2">
                        &quot;Khalid Muhammad, Manoj Surendran, Suhail Karuthedathu&quot;
                      </p>
                      <p className="text-sm text-gray-300 mt-4">
                        Together, they created KMS 9990 with a singular vision: to connect global markets through trust and reliability.
                      </p>
                    </div>

                    {/* Achievement Badges */}
                    <div className="flex items-center justify-center space-x-4 mt-8">
                      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        <span className="font-arabic">جودة عالمية</span>
                      </div>
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        Global Network
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-amber-400/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                </div>

                {/* External Floating Elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={el => sectionRefs.current[2] = el}
        id="why-choose-us"
        className="px-6 py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-amber-500/5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4">
              <span className="font-arabic">لماذا تختار KMS 9990</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-gray-300 mb-4">Why Choose KMS 9990</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg shadow-yellow-400/50 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                titleAr: "مقرنا في دبي",
                titleEn: "Dubai Headquarters",
                description: "Headquartered in Dubai with operations across the GCC, India, and international markets."
              },
              {
                icon: Package,
                titleAr: "محفظة منتجات متنوعة",
                titleEn: "Diverse Product Portfolio",
                description: "Offering fashion, technology, food, and lifestyle products under one roof."
              },
              {
                icon: Users,
                titleAr: "شبكة عالمية",
                titleEn: "Global Network",
                description: "Connecting businesses with reliable international suppliers and manufacturers."
              },
              {
                icon: BarChart3,
                titleAr: "أسعار تنافسية",
                titleEn: "Competitive Pricing",
                description: "Enabling partners to grow profitably with our competitive pricing structure."
              },
              {
                icon: Truck,
                titleAr: "خدمات لوجستية فعالة",
                titleEn: "Efficient Logistics",
                description: "Ensuring timely delivery across multiple regions with our efficient logistics network."
              },
              {
                icon: Handshake,
                titleAr: "قيادة موثوقة",
                titleEn: "Trusted Leadership",
                description: "Driven by experienced founders with a strong vision for growth and success."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2 font-arabic">{item.titleAr}</h4>
                <h5 className="text-lg font-semibold text-white mb-3">{item.titleEn}</h5>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              <span className="font-arabic text-yellow-400 block mb-2">KMS 9990 ليست مجرد شركة جملة وتوزيع؛ نحن شريك عالمي في التجارة</span>
              KMS 9990 is not only a wholesaler and distributor; we are a global partner in trade, delivering quality, building trust, and expanding global trade.
            </p>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section
        ref={el => sectionRefs.current[4] = el}
        id="partner"
        className="px-6 py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-amber-500/5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8">
                <span className="font-arabic">كن شريكنا</span>
                <br />
                Partner With Us
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                <span className="font-arabic text-yellow-400 block mb-2">في KMS 9990، نؤمن بأن نمو الأعمال يأتي من خلال الشراكات القوية</span>
                At KMS 9990, we believe that business growth comes through strong partnerships. Whether you are a retailer, distributor, or corporate buyer, we offer wholesale and distribution solutions tailored to your business needs.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 font-arabic">خدماتنا تشمل:</h3>
                <h4 className="text-lg md:text-xl font-semibold text-white">Our services include:</h4>

                <ul className="space-y-4">
                  {[
                    "Bulk wholesale distribution",
                    "Import and export partnerships",
                    "Custom product sourcing",
                    "Regional and international supply chain support"
                  ].map((service, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg md:text-xl text-gray-300 mt-8 leading-relaxed">
                  <span className="font-arabic text-yellow-400 block mb-2">مع عمليات تمتد عبر دول الخليج والهند والأسواق العالمية</span>
                  With operations spanning the GCC, India, and global markets, we provide businesses with the scale, consistency, and trust they need to thrive.
                </p>
              </div>

              <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-yellow-500/30 group mt-8 font-semibold">
                <span className="flex items-center space-x-2">
                  <Handshake className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-arabic">تواصل معنا</span>
                  <span>Contact Us</span>
                </span>
              </button>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="relative w-full max-w-lg mx-auto h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 rounded-3xl backdrop-blur-sm border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 overflow-hidden p-8 flex flex-col justify-center">
                  <div className="text-center mb-8">

                    <h3 className="text-2xl font-bold text-white mb-3 font-arabic">انضم إلى شبكة شركائنا</h3>
                    <p className="text-lg text-gray-300">Join Our Partner Network</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl border border-yellow-500/30">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">100+</div>
                      <div className="text-sm text-gray-300 font-arabic">شريك نشط</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl border border-yellow-500/30">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">15+</div>
                      <div className="text-sm text-gray-300 font-arabic">دولة</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 p-6 rounded-xl border border-yellow-500/30">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3 font-arabic">فوائد الشراكة:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-yellow-400" />
                        <span>Competitive pricing and margins</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-yellow-400" />
                        <span>Dedicated account management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-yellow-400" />
                        <span>Priority access to new products</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-yellow-400" />
                        <span>Marketing and promotional support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer id="contact" className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-amber-500/5"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Luxury Brand Section */}
            <div className="lg:col-span-2 animate-fadeInLeft">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative w-14 md:w-16 h-14 md:h-16">
                  <Link href="/">
                    <Image
                      src="https://i.ibb.co/KcDsZJYn/KMS-logo-removebg-preview.png"
                      alt="logo"
                      className="w-24 lg:w-36 h-auto"
                      width={144} // Add width prop
                      height={48} // Add height prop
                      unoptimized
                    />
                  </Link>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold font-arabic text-yellow-400">KMS 9990</div>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                <span className="font-arabic text-yellow-400 block mb-2">شريكك العالمي في الجملة والتوزيع</span>
                Your global wholesale and distribution partner. Headquartered in Dubai with operations across GCC, India, and international markets.
              </p>

              <div className="space-y-4">

                <div className="flex items-center space-x-4">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-full flex items-center justify-center">
                    <Phone className="w-4 md:w-5 h-4 md:h-5 text-yellow-400" />
                  </div>
                  <span className="text-sm md:text-base text-gray-300">+971 503053576, +971 562000978, +91 9946180294</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 md:w-5 h-4 md:h-5 text-yellow-400" />
                  </div>
                  <span className="text-sm md:text-base text-gray-300 font-arabic">KMS 9990, Al Nasr Square, Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category} className="animate-fadeInUp" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h3 className="text-lg md:text-xl font-semibold mb-6 text-yellow-400 capitalize font-arabic">
                  {category === 'shop' && 'المتجر'}
                  {category === 'about' && 'من نحن'}
                  {category === 'support' && 'الدعم'}
                  {category === 'connect' && 'تواصل'}
                </h3>
                <h4 className="text-base md:text-lg font-semibold mb-4 text-gray-300 capitalize">{category}</h4>
                <ul className="space-y-3 md:space-y-4">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 transform inline-block font-arabic">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-yellow-500/20 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-center lg:text-left">
                <p className="font-arabic text-yellow-400 text-sm md:text-base">© 2025 KMS 9990. جميع الحقوق محفوظة</p>
                <p className="text-sm md:text-base">&copy; 2025 KMS 9990 Wholesale & Distribution. All rights reserved. Delivering Quality, Building Trust, Expanding Global Trade.</p>
              </div>

              <div className="flex items-center space-x-4 md:space-x-8">
                <a href="#" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-arabic">سياسة الخصوصية</a>
                <a href="#" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-arabic">الشروط</a>
                <a href="#" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-300 font-arabic">ملفات الارتباط</a>
              </div>
            </div>


          </div>
        </div>
      </footer>

      {/* Enhanced CSS for Luxury Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@200;300;400;600;700;900&display=swap');
        
        .font-arabic {
          font-family: 'Amiri', 'Cairo', serif;
          direction: rtl;
        }

        /* Enhanced Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes luxuryGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(234, 179, 8, 0.5), 0 0 60px rgba(245, 158, 11, 0.3);
          }
        }
        
        @keyframes goldShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-luxury-glow {
          animation: luxuryGlow 2s ease-in-out infinite;
        }
        
        .animate-gold-shimmer {
          background: linear-gradient(90deg, transparent, rgba(234, 179, 8, 0.4), transparent);
          background-size: 200% 100%;
          animation: goldShimmer 2s infinite;
        }

        /* Luxury Hover Effects */
        .luxury-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(234, 179, 8, 0.2);
        }
        
        .gold-text-hover:hover {
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706, #fbbf24);
          background-size: 200% 200%;
          animation: goldShimmer 1s ease-in-out;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Smooth Animations */
        * {
          scroll-behavior: smooth;
        }
        
        /* Luxury Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #111;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #fbbf24, #f59e0b);
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.3);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #f59e0b, #d97706);
          box-shadow: 0 0 15px rgba(234, 179, 8, 0.5);
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .font-arabic {
            font-size: 0.95em;
            line-height: 1.6;
          }
          
          .text-8xl {
            font-size: 3rem;
            line-height: 1;
          }
          
          .text-6xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          
          .text-5xl {
            font-size: 2rem;
            line-height: 2.25rem;
          }
        }
        
        /* Luxury Focus States */
        button:focus,
        input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.4), 0 0 20px rgba(234, 179, 8, 0.2);
        }
        
        /* Reduced Motion for Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Enhanced Luxury Button Styles */
        .luxury-button {
          position: relative;
          overflow: hidden;
        }
        
        .luxury-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .luxury-button:hover::before {
          left: 100%;
        }

        /* Golden Particle Effects */
        .golden-particles::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 60% 20%, rgba(217, 119, 6, 0.3) 1px, transparent 1px);
          background-size: 100px 100px, 150px 150px, 200px 200px;
          animation: float 10s infinite linear;
          pointer-events: none;
        }

        /* Luxury Glass Morphism Effect */
        .glass-morphism {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(234, 179, 8, 0.2);
        }
        
        .glass-morphism-gold {
          background: rgba(234, 179, 8, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(234, 179, 8, 0.3);
        }

        /* Custom Grid Animation */
        @keyframes gridFade {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .grid > * {
          animation: gridFade 0.6s ease-out forwards;
        }
        
        .grid > *:nth-child(1) { animation-delay: 0.1s; }
        .grid > *:nth-child(2) { animation-delay: 0.2s; }
        .grid > *:nth-child(3) { animation-delay: 0.3s; }
        .grid > *:nth-child(4) { animation-delay: 0.4s; }

        /* Luxury Text Effects */
        .luxury-text-glow {
          text-shadow: 
            0 0 10px rgba(234, 179, 8, 0.5),
            0 0 20px rgba(234, 179, 8, 0.3),
            0 0 30px rgba(234, 179, 8, 0.2);
        }
        
        .premium-gradient-text {
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706, #b45309, #fbbf24);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
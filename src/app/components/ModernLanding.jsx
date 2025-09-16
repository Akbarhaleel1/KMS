import React from 'react';
import { Heart, Sparkles, ShoppingCart, Star, Smartphone, Headphones } from 'lucide-react';

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
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/90 via-black/80 to-yellow-900/90 rounded-3xl shadow-2xl shadow-yellow-500/20 group-hover:scale-105 transition-all duration-500 animate-float border border-yellow-500/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-500/10 rounded-3xl"></div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-amber-500/30 rounded-xl blur-sm"></div>
                      <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/302536400/ZM/GS/AI/119108805/140375-600x600-500x500.jpg" alt="Premium Mobile Phone" className="relative h-32 md:h-40 w-24 md:w-32 object-cover rounded-xl shadow-lg border border-yellow-500/30" />
                    </div>
                  </div>
                </div>
                
                {/* Luxury Phone Crown */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 md:w-28 h-8 md:h-12 bg-gradient-to-b from-yellow-500 to-amber-600 rounded-b-2xl shadow-lg shadow-yellow-500/30"></div>
                
                {/* Luxury Price Tag */}
                <div className="absolute bottom-12 left-4 md:left-8 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl border border-yellow-500/50 animate-bounce group-hover:scale-110 transition-all duration-300">
                  <div className="text-xs md:text-sm font-medium text-yellow-400 font-arabic">هاتف فاخر</div>
                  <div className="text-lg md:text-2xl font-bold text-white">2,999 AED</div>
                  <div className="text-xs text-green-400 font-medium font-arabic">متوفر</div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-16 -right-4 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
                  <Smartphone className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute top-32 -left-6 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '2.5s'}}>
                  <Heart className="w-4 h-4 text-amber-400 fill-current" />
                </div>
                <Sparkles className="absolute top-8 left-8 w-8 h-8 text-yellow-400 animate-pulse" />
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
              
              <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-8 md:px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-yellow-500/30 group w-full lg:w-auto font-semibold">
                  <span className="flex items-center justify-center space-x-3">
                    <ShoppingCart className="w-5 md:w-6 h-5 md:h-6 group-hover:animate-bounce" />
                    <span className="text-base md:text-lg font-arabic">تسوق الآن</span>
                    <span className="text-base md:text-lg">Shop Now</span>
                  </span>
                </button>
                
                <div className="flex items-center space-x-4 w-full lg:w-auto">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full border-2 border-black shadow-lg"></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      <span className="font-arabic">+30,000 عميل راضي</span>
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-400 ml-1">(4.8)</span>
                    </div>
                  </div>
                </div>
              </div>
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
              
              <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-8 md:px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-yellow-500/30 group w-full lg:w-auto font-semibold">
                  <span className="flex items-center justify-center space-x-3">
                    <ShoppingCart className="w-5 md:w-6 h-5 md:h-6 group-hover:animate-bounce" />
                    <span className="text-base md:text-lg font-arabic">اطلب الآن</span>
                    <span className="text-base md:text-lg">Order Now</span>
                  </span>
                </button>
                
                <div className="flex items-center space-x-4 w-full lg:w-auto">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full border-2 border-black shadow-lg"></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      <span className="font-arabic">+25,000 منتج مباع</span>
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-400 ml-1">(4.7)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Display - Right Side */}
            <div className="relative animate-fadeInRight order-1 lg:order-2">
              <div className="w-full max-w-md mx-auto h-[400px] md:h-[500px] relative group">
                {/* Main Accessories Display */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/90 via-black/80 to-yellow-900/90 rounded-3xl shadow-2xl shadow-yellow-500/20 group-hover:scale-105 transition-all duration-500 animate-float border border-yellow-500/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-500/10 rounded-3xl"></div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-amber-500/30 rounded-xl blur-sm"></div>
                      <img src="https://thumbs.dreamstime.com/b/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.jpg" alt="Premium Accessories" className="relative h-32 md:h-40 w-24 md:w-32 object-cover rounded-xl shadow-lg border border-yellow-500/30" />
                    </div>
                  </div>
                </div>
                
                {/* Luxury Crown */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 md:w-28 h-8 md:h-12 bg-gradient-to-b from-yellow-500 to-amber-600 rounded-b-2xl shadow-lg shadow-yellow-500/30"></div>
                
                {/* Price Tag */}
                <div className="absolute bottom-12 right-4 md:right-8 bg-gray-900/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl border border-yellow-500/50 animate-bounce group-hover:scale-110 transition-all duration-300">
                  <div className="text-xs md:text-sm font-medium text-yellow-400 font-arabic">إكسسوارات فاخرة</div>
                  <div className="text-lg md:text-2xl font-bold text-white">From 49 AED</div>
                  <div className="text-xs text-green-400 font-medium font-arabic">متوفر</div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-16 -left-4 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
                  <Headphones className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute top-32 -right-6 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '2.5s'}}>
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

export default MobileAccessoriesSections;
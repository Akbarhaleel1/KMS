import React, { useEffect, useState } from 'react';

const testimonials = [
  [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "The best solution we've found in years of searching. Absolutely transformed our workflow.",
      image: "https://i.postimg.cc/GmGwTfyy/Smiling-Man-4.jpg"
    },
    {
      name: "Alex Chen",
      role: "CTO",
      content: "Incredible results within the first week. The implementation was seamless.",
      image: "https://i.postimg.cc/5NHMby9p/team-square-4.jpg"
    },
    {
      name: "Maria Garcia",
      role: "Product Manager",
      content: "Streamlined our entire workflow. The efficiency gains were immediate.",
      image: "https://i.postimg.cc/d3LgsNFD/testi-1.jpg"
    },
    {
      name: "James Wilson",
      role: "Sales Director",
      content: "Boosted our team's productivity by 40%. Outstanding results.",
      image: "https://i.postimg.cc/VL3P6wdw/testi1.jpg"
    }
  ],
  [
    {
      name: "Emily Wong",
      role: "Lead Developer",
      content: "The API is a dream to work with. Everything is so well documented.",
      image: "https://i.postimg.cc/SsZwpFww/images.jpg"
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      content: "Helped us scale our business 3x faster than expected. Amazing support.",
      image: "https://i.postimg.cc/90KKrPXb/testimonial2.png"
    },
    {
      name: "Lisa Anderson",
      role: "UX Designer",
      content: "Perfect balance of features and simplicity. A joy to work with.",
      image: "https://i.postimg.cc/bYBKCP0n/images-1.jpg"
    },
    {
      name: "Michael Brown",
      role: "Tech Lead",
      content: "Outstanding support and comprehensive documentation. Simply excellent.",
      image: "https://i.postimg.cc/kXRLLHwp/101-1013552-testimonial-gentleman.jpg"
    }
  ]
];

const TestimonialBox = ({ data, isAnimating, index }) => (
  <div 
    className={`w-full md:w-80 p-4 md:p-8 rounded-2xl transform transition-all duration-1000 ease-out 
      bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl
      border border-gray-700/50
      hover:scale-105 hover:from-gray-800/90 hover:to-gray-700/90
      ${isAnimating 
        ? 'translate-x-full opacity-0 rotate-12' 
        : `translate-x-0 opacity-100 rotate-0 transition-all delay-${index * 150}`}`}
    style={{
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      transform: `translateY(${Math.sin(index) * 10}px)`
    }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50"></div>
        <img 
          src={data.image} 
          alt={data.name} 
          className="relative w-12 md:w-14 h-12 md:h-14 rounded-full object-cover ring-2 ring-purple-500/30 transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="font-bold text-base md:text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {data.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 font-medium">{data.role}</p>
      </div>
    </div>
    <div className="relative">
      <svg
        className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-6 md:h-8 w-6 md:w-8 text-purple-500/20"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="relative text-gray-300 text-sm md:text-lg leading-relaxed pl-2">
        {data.content}
      </p>
    </div>
  </div>
);

const SlidingTestimonials = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else if (window.innerWidth < 1280) {
        setVisibleTestimonials(3);
      } else {
        setVisibleTestimonials(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-3xl max-w-[90rem] mx-auto p-4 md:p-12 overflow-hidden bg-gray-950">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-purple-950 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="relative flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          {testimonials[currentSet]
            .slice(0, visibleTestimonials)
            .map((testimonial, index) => (
              <TestimonialBox
                key={`${testimonial.name}-${index}`}
                data={testimonial}
                isAnimating={isAnimating}
                index={index}
              />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6 md:mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSet(index);
                  setIsAnimating(false);
                }, 1000);
              }
            }}
            className={`transition-all duration-500 rounded-full 
              ${currentSet === index 
                ? 'w-8 md:w-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                : 'w-2 md:w-3 bg-gray-700 hover:bg-gray-600'} 
              h-2 md:h-3 hover:scale-110`}
            aria-label={`Testimonial set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingTestimonials;
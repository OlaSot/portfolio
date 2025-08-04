import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "CEO",
    company: "TechStart Inc.",
    content: "Olha's creative vision transformed our brand completely. Her attention to detail and ability to translate our ideas into stunning visuals exceeded all expectations. The new identity has significantly improved our market presence.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Marketing Director",
    company: "Bloom Studios",
    content: "Working with Olha was an absolute pleasure. She not only delivered exceptional design work but also provided valuable insights that helped shape our digital strategy. Her collaborative approach made the entire process smooth and enjoyable.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Founder",
    company: "Artisan Coffee Co.",
    content: "Olha's brand identity work for our coffee roastery was phenomenal. She captured the essence of our artisanal approach perfectly, creating a visual language that resonates with our customers and stands out in the market.",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Client <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Love</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my amazing clients have to say about our collaborations.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000" />
          </div>

          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-purple-600 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="hoverable w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="hoverable w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
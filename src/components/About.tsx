const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto lg:mx-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-8 left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60"></div>
              
              {/* Main visual */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 gap-4">
                  {/* Sample label cards */}
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform">
                    <div className="h-3 w-16 bg-purple-200 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-200 rounded mb-3"></div>
                    <div className="text-xs text-gray-500">📚 Book Label</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform">
                    <div className="h-3 w-14 bg-pink-200 rounded mb-2"></div>
                    <div className="h-2 w-10 bg-gray-200 rounded mb-3"></div>
                    <div className="text-xs text-gray-500">🏷️ Product Label</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="h-3 w-12 bg-indigo-200 rounded mb-2"></div>
                    <div className="h-2 w-14 bg-gray-200 rounded mb-3"></div>
                    <div className="text-xs text-gray-500">🎨 Sticker</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-2 hover:rotate-0 transition-transform">
                    <div className="h-3 w-16 bg-green-200 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-gray-200 rounded mb-3"></div>
                    <div className="text-xs text-gray-500">📦 Packaging</div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <span className="animate-pulse">🖨️</span>
                    Every Design is Unique
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              About Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Every Label Tells a 
              <span className="text-purple-600"> Story</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At V4 Technologies, we believe every label tells a story. Whether you're a student wanting personalized book labels, a small business owner building your brand, or an individual looking for unique custom stickers — we bring your ideas to life with precision, quality, and creativity.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Based in Chennai, we specialize in <span className="font-semibold text-purple-600">fully customized printing</span> — which means no two orders are the same. Every design is crafted from scratch based on your requirements. With the most competitive pricing in the market and a personal touch in every print, V4 Technologies is where <span className="font-semibold">quality meets affordability</span>.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-gray-600 text-sm">Custom Designs</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600">₹35</div>
                <div className="text-gray-600 text-sm">Starting Price</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600">A4</div>
                <div className="text-gray-600 text-sm">Sheet Size</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

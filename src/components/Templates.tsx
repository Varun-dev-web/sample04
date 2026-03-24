const Templates = () => {
  const templates = [
    {
      title: 'Label Template',
      description: 'Sample label designs for book labels, name labels, and product labels. Edit it your way or send us your own design!',
      icon: '🏷️',
      file: '/label.pdf',
      color: 'from-purple-500 to-indigo-600',
      features: ['Multiple label sizes', 'Editable text', 'Print-ready format'],
    },
    {
      title: 'Sticker Template',
      description: 'Sample sticker layouts for custom stickers of various shapes and sizes. Perfect starting point for your ideas!',
      icon: '🎨',
      file: '/sticker.pdf',
      color: 'from-pink-500 to-rose-600',
      features: ['Various shapes', 'Custom sizes', 'High-resolution'],
    },
  ];

  return (
    <section id="templates" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Free Downloads
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Download Sample <span className="text-yellow-300">Templates</span>
          </h2>
          <p className="text-lg text-white/80">
            Get started with our free sample templates. Use them as a reference, edit them, or create your own unique design from scratch!
          </p>
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-yellow-300 font-semibold text-lg mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Information
            </div>
            <p className="text-white/90 leading-relaxed">
              <span className="font-semibold text-yellow-300">Everything is 100% customizable!</span> These templates are just samples to give you an idea. 
              You can edit them, modify the design, or send us your <span className="font-semibold">own completely unique designs</span>. 
              Prices vary based on your customization requirements. 
              <span className="block mt-2 text-green-300 font-semibold">Starting from just ₹35 per A4 sheet!</span>
            </p>
          </div>
        </div>

        {/* Template Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {template.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {template.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {template.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {template.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Download Button */}
              <a
                href={template.file}
                download
                className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${template.color} text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF Template
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            📝 Don't have the templates? No worries! Just WhatsApp us your requirements and we'll create a custom design for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Templates;

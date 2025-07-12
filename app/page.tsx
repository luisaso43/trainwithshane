'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Athletic%20personal%20trainer%20performing%20functional%20movement%20in%20modern%20fitness%20studio%20with%20kettlebells%20and%20exercise%20equipment%20in%20background%2C%20professional%20lighting%2C%20motivational%20atmosphere%2C%20clean%20modern%20gym%20environment&width=1920&height=1080&seq=hero-trainer&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Body<br />
            <span className="text-orange-400">Unleash Your Potential</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert functional training, animal flow mastery, and StrongFirst kettlebell certification. 
            Experience movement that builds real-world strength and mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              View Programs
            </Link>
            <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Meet Your Trainer</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a certified functional trainer, Animal Flow master, and StrongFirst kettlebell instructor, 
                I bring over 8 years of experience helping clients achieve their fitness goals through 
                intelligent movement patterns and progressive training methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-check-line text-orange-500 text-xl"></i>
                  </div>
                  <span className="ml-3 text-gray-700">Certified Animal Flow Instructor</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-check-line text-orange-500 text-xl"></i>
                  </div>
                  <span className="ml-3 text-gray-700">StrongFirst Kettlebell Certification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-check-line text-orange-500 text-xl"></i>
                  </div>
                  <span className="ml-3 text-gray-700">Functional Movement Specialist</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20personal%20trainer%20demonstrating%20functional%20movement%20exercise%20in%20clean%20modern%20gym%20setting%2C%20athletic%20build%2C%20focused%20expression%2C%20professional%20fitness%20photography%2C%20natural%20lighting&width=600&height=700&seq=trainer-portrait&orientation=portrait"
                alt="Personal Trainer"
                className="rounded-lg shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Training Specialties</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the unique training methods that will revolutionize your fitness journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Animal%20flow%20quadrupedal%20movement%20pattern%20demonstration%20in%20fitness%20studio%2C%20flowing%20movement%2C%20bodyweight%20exercise%2C%20mobility%20training%2C%20professional%20fitness%20photography&width=400&height=300&seq=animal-flow&orientation=landscape"
                alt="Animal Flow"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Animal Flow</h3>
              <p className="text-gray-600 leading-relaxed">
                Ground-based movement patterns that improve mobility, stability, and coordination 
                through natural, flowing movements inspired by animals.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=StrongFirst%20kettlebell%20training%20session%20with%20proper%20form%20demonstration%2C%20athletic%20trainer%20performing%20kettlebell%20swing%2C%20professional%20gym%20environment%2C%20strength%20training&width=400&height=300&seq=kettlebell-training&orientation=landscape"
                alt="Kettlebell Training"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">StrongFirst Kettlebell</h3>
              <p className="text-gray-600 leading-relaxed">
                Build explosive power, strength, and endurance with proven kettlebell techniques 
                from the world's leading strength education company.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Functional%20fitness%20training%20with%20multiple%20movement%20patterns%2C%20compound%20exercises%2C%20real%20world%20strength%20building%2C%20modern%20gym%20equipment%2C%20athletic%20performance&width=400&height=300&seq=functional-training&orientation=landscape"
                alt="Functional Training"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Functional Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-joint movements that translate to real-world activities, improving your 
                daily performance and reducing injury risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real transformations from dedicated clients who committed to the process
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">150+</div>
              <p className="text-gray-300">Clients Transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">8</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
              <p className="text-gray-300">Specialty Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">What Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill text-orange-400"></i>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The animal flow training completely changed how I move. My mobility and strength 
                have improved dramatically, and I feel more connected to my body than ever."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Mitchell</p>
                  <p className="text-gray-500 text-sm">Marketing Executive</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill text-orange-400"></i>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Kettlebell training with proper StrongFirst techniques transformed my strength. 
                I'm stronger and more confident than I've ever been."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Mike Rodriguez</p>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-star-fill text-orange-400"></i>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Functional training helped me get back to activities I love after my injury. 
                The personalized approach made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Jennifer Park</p>
                  <p className="text-gray-500 text-sm">Physical Therapist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how functional training can change your life
          </p>
          <Link href="/contact" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FitFlow Trainer</h3>
              <p className="text-gray-400">
                Transforming lives through intelligent movement and progressive training methods.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/programs" className="hover:text-white cursor-pointer">Programs</Link></li>
                <li><Link href="/about" className="hover:text-white cursor-pointer">About</Link></li>
                <li><Link href="/contact" className="hover:text-white cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Animal Flow</li>
                <li>Kettlebell Training</li>
                <li>Functional Training</li>
                <li>Personal Coaching</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>Email: info@fitflowtrainer.com</p>
                <p>Phone: (555) 123-4567</p>
                <div className="flex space-x-4 mt-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-instagram-fill text-xl hover:text-orange-400 cursor-pointer"></i>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-facebook-fill text-xl hover:text-orange-400 cursor-pointer"></i>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-youtube-fill text-xl hover:text-orange-400 cursor-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitFlow Trainer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
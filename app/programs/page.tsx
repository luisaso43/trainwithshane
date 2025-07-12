'use client';

import Link from 'next/link';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-800 cursor-pointer">
              FitFlow Trainer
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-orange-500 cursor-pointer">Home</Link>
              <Link href="/programs" className="text-orange-500 font-semibold cursor-pointer">Programs</Link>
              <Link href="/about" className="text-gray-600 hover:text-orange-500 cursor-pointer">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-orange-500 cursor-pointer">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Training Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our specialized programs designed to meet your unique fitness goals and experience level
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Animal Flow Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://readdy.ai/api/search-image?query=Animal%20flow%20training%20class%20with%20multiple%20students%20performing%20quadrupedal%20movements%2C%20flowing%20sequences%2C%20bodyweight%20exercises%2C%20modern%20fitness%20studio%2C%20group%20training%20atmosphere&width=400&height=300&seq=animal-flow-program&orientation=landscape"
                  alt="Animal Flow Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Animal Flow Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Learn ground-based movement patterns that improve mobility, stability, and coordination through flowing animal-inspired movements.
                </p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">8 week program</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-group-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Small groups (4-6 people)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-medal-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">All levels welcome</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-4">$299/month</div>
                <Link href="/contact" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer block text-center">
                  Join Program
                </Link>
              </div>
            </div>

            {/* Kettlebell Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://readdy.ai/api/search-image?query=StrongFirst%20kettlebell%20training%20group%20class%20with%20instructor%20demonstrating%20proper%20form%2C%20various%20kettlebell%20exercises%2C%20strength%20training%2C%20professional%20gym%20environment&width=400&height=300&seq=kettlebell-program&orientation=landscape"
                  alt="Kettlebell Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">StrongFirst Kettlebell</h3>
                <p className="text-gray-600 mb-4">
                  Build explosive power, strength, and endurance with proven kettlebell techniques from StrongFirst methodology.
                </p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">12 week program</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-group-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Small groups (3-5 people)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-medal-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Beginner to advanced</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-4">$349/month</div>
                <Link href="/contact" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer block text-center">
                  Join Program
                </Link>
              </div>
            </div>

            {/* Functional Training Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://readdy.ai/api/search-image?query=Functional%20fitness%20training%20session%20with%20compound%20movements%2C%20multi-joint%20exercises%2C%20real%20world%20strength%20building%2C%20modern%20gym%20equipment%2C%20personal%20training&width=400&height=300&seq=functional-program&orientation=landscape"
                  alt="Functional Training Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Functional Movement</h3>
                <p className="text-gray-600 mb-4">
                  Multi-joint movements that translate to real-world activities, improving daily performance and reducing injury risk.
                </p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">10 week program</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-group-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Small groups (4-8 people)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-medal-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">All fitness levels</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-4">$279/month</div>
                <Link href="/contact" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer block text-center">
                  Join Program
                </Link>
              </div>
            </div>

            {/* Personal Training */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://readdy.ai/api/search-image?query=One%20on%20one%20personal%20training%20session%20with%20professional%20trainer%20and%20client%2C%20personalized%20coaching%2C%20individual%20attention%2C%20modern%20fitness%20studio%2C%20motivational%20atmosphere&width=400&height=300&seq=personal-training&orientation=landscape"
                  alt="Personal Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">1-on-1 Personal Training</h3>
                <p className="text-gray-600 mb-4">
                  Completely personalized training sessions designed around your specific goals, limitations, and preferences.
                </p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-user-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Individual sessions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-medal-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Fully customized</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-4">$120/session</div>
                <Link href="/contact" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer block text-center">
                  Book Session
                </Link>
              </div>
            </div>

            {/* Mobility & Recovery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://readdy.ai/api/search-image?query=Mobility%20and%20recovery%20training%20session%20with%20stretching%2C%20foam%20rolling%2C%20movement%20therapy%2C%20rehabilitation%20exercises%2C%20wellness%20focused%20environment&width=400&height=300&seq=mobility-recovery&orientation=landscape"
                  alt="Mobility & Recovery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Mobility & Recovery</h3>
                <p className="text-gray-600 mb-4">
                  Focused sessions on improving range of motion, addressing movement restrictions, and enhancing recovery protocols.
                </p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">6 week program</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-group-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Small groups (6-8 people)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-medal-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Perfect for recovery</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-4">$199/month</div>
                <Link href="/contact" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer block text-center">
                  Join Program
                </Link>
              </div>
            </div>

            {/* Hybrid Program */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://readdy.ai/api/search-image?query=Mixed%20training%20program%20combining%20animal%20flow%2C%20kettlebell%2C%20and%20functional%20movements%2C%20comprehensive%20fitness%20approach%2C%20varied%20exercise%20equipment%2C%20dynamic%20training&width=400&height=300&seq=hybrid-program&orientation=landscape"
                  alt="Hybrid Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Complete
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Complete Hybrid Program</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive program combining all three specialties: Animal Flow, Kettlebell, and Functional Training.
                </p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-time-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">16 week program</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-group-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Small groups (4-6 people)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-medal-line text-orange-500"></i>
                    </div>
                    <span className="ml-2 text-gray-600">Intermediate+</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-500 mb-4">$449/month</div>
                <Link href="/contact" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer block text-center">
                  Join Program
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">What's Included in Every Program</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-user-heart-line text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Assessment</h3>
              <p className="text-gray-600">Comprehensive movement screening and goal setting session</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-calendar-check-line text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexible Scheduling</h3>
              <p className="text-gray-600">Multiple session times to fit your busy lifestyle</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-bar-chart-line text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Progress Tracking</h3>
              <p className="text-gray-600">Regular assessments and program adjustments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-chat-3-line text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Ongoing Support</h3>
              <p className="text-gray-600">Direct access to your trainer between sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Choose Your Program?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss which program is right for you and your goals
          </p>
          <Link href="/contact" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
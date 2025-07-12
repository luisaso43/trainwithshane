'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    goals: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        setSubmitStatus('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          experience: '',
          goals: '',
          message: ''
        });
      } else {
        setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error sending your message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

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
              <Link href="/programs" className="text-gray-600 hover:text-orange-500 cursor-pointer">Programs</Link>
              <Link href="/about" className="text-gray-600 hover:text-orange-500 cursor-pointer">About</Link>
              <Link href="/contact" className="text-orange-500 font-semibold cursor-pointer">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Get Started Today</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your fitness journey? Let's discuss your goals and find the perfect program for you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Message</h2>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${submitStatus.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus}
                </div>
              )}
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-gray-700 font-semibold mb-2">Interested Program</label>
                  <div className="relative">
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm appearance-none bg-white"
                    >
                      <option value="">Select a program</option>
                      <option value="animal-flow">Animal Flow Mastery</option>
                      <option value="kettlebell">StrongFirst Kettlebell</option>
                      <option value="functional">Functional Movement</option>
                      <option value="personal">1-on-1 Personal Training</option>
                      <option value="mobility">Mobility & Recovery</option>
                      <option value="hybrid">Complete Hybrid Program</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2">Fitness Experience Level</label>
                  <div className="relative">
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm appearance-none bg-white"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                      <option value="returning">Returning after break</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="goals" className="block text-gray-700 font-semibold mb-2">Primary Goals</label>
                  <input
                    type="text"
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                    placeholder="e.g., Weight loss, strength building, mobility improvement..."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm resize-vertical"
                    placeholder="Tell us more about your fitness journey and any specific questions you have..."
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-4 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-phone-line text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 7AM-8PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@fitflowtrainer.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-map-pin-line text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">123 Fitness Avenue<br />San Francisco, CA 94105</p>
                    <p className="text-sm text-gray-500">Free parking available</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-time-line text-orange-500 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                      <p>Saturday: 7:00 AM - 6:00 PM</p>
                      <p>Sunday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                    <i className="ri-instagram-fill text-white text-lg"></i>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                    <i className="ri-facebook-fill text-white text-lg"></i>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                    <i className="ri-youtube-fill text-white text-lg"></i>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                    <i className="ri-tiktok-fill text-white text-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit Our Studio</h2>
            <p className="text-gray-600">Conveniently located in the heart of San Francisco</p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.39912368468147!3d37.78808797975792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b8c3b4e1%3A0x4e2c12c7a3d9f5e8!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Do I need prior experience for these programs?</h3>
              <p className="text-gray-600">No prior experience is required! All programs are designed to accommodate different fitness levels, and we provide thorough instruction on proper form and technique.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">What should I wear to training sessions?</h3>
              <p className="text-gray-600">Comfortable athletic wear that allows for full range of motion. For Animal Flow, we recommend form-fitting clothes. Athletic shoes are required for most sessions.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Can I try a session before committing to a program?</h3>
              <p className="text-gray-600">Absolutely! We offer a free consultation and trial session so you can experience our training style and see if it's the right fit for you.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">What if I have an injury or physical limitation?</h3>
              <p className="text-gray-600">We work with clients of all abilities and can modify exercises to accommodate injuries or limitations. Please discuss any concerns during your consultation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import { Truck, Shield, Clock, MapPin, Phone, Mail, CheckCircle, Menu, X, Target, Eye } from 'lucide-react';
import logo from './assets/logo.png';
import trans_truck from './assets/trans-truck.png';

export default function VehicleTransportLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    route: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', vehicle: '', route: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={logo}
                alt="A description of the image"
                style={{ width: '50px', height: 'auto' }}
              />
              <span className="ml-2 text-xl font-bold text-blue-900">Cargo Co. Auto Logistics</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-cyan-400 transition">Services</a>
              <a href="#coverage" className="text-gray-700 hover:text-cyan-400 transition">Coverage</a>
              <a href="#why-us" className="text-gray-700 hover:text-cyan-400 transition">Why Us</a>
              <a href="#contact" className="text-gray-700 hover:text-cyan-400 transition">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-cyan-50">Services</a>
              <a href="#coverage" className="block px-3 py-2 text-gray-700 hover:bg-cyan-50">Coverage</a>
              <a href="#why-us" className="block px-3 py-2 text-gray-700 hover:bg-cyan-50">Why Us</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-cyan-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content stays in the left column */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Vehicle Transport Across the Philippines
              </h1>
              <p className="text-xl text-cyan-100">
                Specializing in door-to-door transport of Toyota imported vehicles with coordinated customs clearance.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-cyan-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
                >
                  Get a Quote
                </a>
                <a
                  href="#services"
                  className="border-2 border-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition"
                >
                  Our Services
                </a>
              </div>
            </div>

            {/* Keep this column empty on large screens */}
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Existing absolutely positioned image for large screens */}
        <div className="absolute inset-y-0 right-0 md:w-1/2 lg:w-3/5 xl:w-1/2 z-0 hidden md:block">
          <img
            src={trans_truck}
            alt="Car carrier truck transporting vehicles"
            className="w-full h-full object-cover"
          />
        </div>

        {/* NEW — small screen truck image (visible only below md) */}
        <img
          src={trans_truck}
          alt="Car carrier truck transporting vehicles"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 block md:hidden w-[90%] sm:w-[80%] object-contain z-0"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive vehicle transport solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 hover:shadow-xl transition">
              <Truck className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Door-to-Door Transport</h3>
              <p className="text-gray-700">
                Complete pickup and delivery service from any location in the Philippines to your destination. Safe and secure handling of your vehicle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-xl transition">
              <Shield className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Customs Clearance</h3>
              <p className="text-gray-700">
                Expert coordination of customs documentation and clearance procedures for imported vehicles. Hassle-free importation process.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 hover:shadow-xl transition">
              <MapPin className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Nationwide Logistics</h3>
              <p className="text-gray-700">
                Reliable truck-based transport across Luzon, Visayas, and Mindanao. We reach even the most remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive grid: 1 column by default, 2 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-blue-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                  <Target className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">MISSION</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Cargo Co. is dedicated to providing fast, secure, and cost-effective delivery services 
                exclusively via specialized car transport trucks. Help dealerships, auctions, and private 
                clients transport their vehicles efficiently and safely across land, prioritizing 
                professionalism, exceptional customer service, and support for the regional economy.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-purple-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-600 transition-colors duration-300">
                  <Eye className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">VISION</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the leading specialized land transport provider for vehicles by offering highly 
                efficient, reliable, and technologically innovative truck delivery solutions. Ensuring 
                absolute customer satisfaction, guaranteeing damage-free delivery, and sustaining long-term 
                business growth through operational excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coverage Area</h2>
            <p className="text-xl text-gray-600">We operate across all major regions of the Philippines</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-cyan-50 rounded-xl border-2 border-cyan-200">
              <MapPin className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Luzon</h3>
              <p className="text-gray-700">Complete coverage from Metro Manila to Northern Luzon and Southern Tagalog regions</p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-xl border-2 border-blue-200">
              <MapPin className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Visayas</h3>
              <p className="text-gray-700">Serving Cebu, Iloilo, Bacolod, and all major Visayan cities and provinces</p>
            </div>

            <div className="text-center p-8 bg-cyan-50 rounded-xl border-2 border-cyan-200">
              <MapPin className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Mindanao</h3>
              <p className="text-gray-700">Comprehensive service to Davao, Cagayan de Oro, Zamboanga, and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-cyan-200">Your trusted partner in vehicle transportation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p className="text-cyan-100">On-schedule transport with real-time tracking</p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-cyan-100">Comprehensive insurance coverage for peace of mind</p>
            </div>

            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-cyan-100">Professional drivers and logistics specialists</p>
            </div>

            <div className="text-center">
              <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-cyan-100">Round-the-clock customer service and updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get a Quote</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you shortly</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Juan Dela Cruz"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="juan@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+63 912 345 6789"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Vehicle Type</label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select vehicle brand</option>
                  <option value="Toyota">Toyota</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Transport Route</label>
              <input
                type="text"
                name="route"
                value={formData.route}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Manila to Davao"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any special requirements or questions?"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-cyan-400 text-blue-900 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition text-lg"
            >
              Submit Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div
                    style={{
                      borderRadius: '50%',         
                      backgroundColor: 'white',    
                      display: 'inline-flex',      
                      justifyContent: 'center',    
                      alignItems: 'center',        
                      padding: '10px',             
                      width: '70px',
                      height: '70px',
                    }}
                  >
                    <img
                      src={logo}
                      alt="A description of the image"
                      style={{ width: '50px', height: 'auto', display: 'block' }}
                    />
                  </div>
                <span className="ml-2 text-xl font-bold">Cargo Co. Auto Logistics</span>
              </div>
              <p className="text-cyan-100">
                Your trusted partner for reliable vehicle transport across the Philippines.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-cyan-100 hover:text-cyan-400 transition">Services</a>
                <a href="#coverage" className="block text-cyan-100 hover:text-cyan-400 transition">Coverage</a>
                <a href="#why-us" className="block text-cyan-100 hover:text-cyan-400 transition">Why Us</a>
                <a href="#contact" className="block text-cyan-100 hover:text-cyan-400 transition">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-cyan-100">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+63 912 345 6789</span>
                </div>
                <div className="flex items-center text-cyan-100">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@cargocoauto.com</span>
                </div>
                <div className="flex items-center text-cyan-100">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Batangas City, Batangas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-800 pt-8 text-center text-cyan-100">
            <p>&copy; 2025 Cargo Co. Auto Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
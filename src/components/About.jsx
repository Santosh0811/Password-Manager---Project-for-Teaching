import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We created a password manager focused on simplicity, privacy, and unmatched security.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4 text-gray-300 text-lg">
              To empower everyone with secure tools that keep personal information protected.
              We believe managing passwords should be safe, simple, and stress-free.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80"
            className="rounded-xl shadow-2xl hover:scale-105 hover:shadow-xl transition-transform duration-500"
            alt="Security"
          />
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12">

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.03] transition duration-300">
            <h3 className="text-2xl font-bold text-white">Encrypted Storage</h3>
            <p className="mt-4 text-gray-300">
              Protecting your data with industry-leading security & zero-knowledge encryption.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.03] transition duration-300">
            <h3 className="text-2xl font-bold text-white">Instant Access</h3>
            <p className="mt-4 text-gray-300">
              Access your vault anywhere—mobile, desktop, or browser—instantly.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-xl hover:scale-[1.03] transition duration-300">
            <h3 className="text-2xl font-bold text-white">Multi-Platform</h3>
            <p className="mt-4 text-gray-300">
              Works across all devices seamlessly with real-time syncing.
            </p>
          </div>

        </div>

        {/* Team Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-white">Meet the Team</h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12">

            {/* Team Member 1 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white/20"
              />
              <h4 className="mt-4 text-xl font-bold text-white">John Carter</h4>
              <p className="text-gray-300">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white/20"
              />
              <h4 className="mt-4 text-xl font-bold text-white">Emily Watson</h4>
              <p className="text-gray-300">Chief Security Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white/20"
              />
              <h4 className="mt-4 text-xl font-bold text-white">Alex Hunter</h4>
              <p className="text-gray-300">Product Manager</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;

import React, { useState } from "react";

export default function RequestCallback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        alert("Thank you! We'll call you back soon.");
        setFormData({ name: "", email: "", phone: "" });
    };

    return (
        <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Full-height section */}
            <div className="min-h-screen max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left column: heading + subtitle */}
                <div className="lg:col-span-6 text-white">
                    <div className="mb-6">

                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mt-4 mb-6">
                            Request A<br />
                            <span className="text-emerald-400">Call Back</span>
                        </h2>
                    </div>

                    <p className="text-gray-300 text-lg max-w-xl mb-8">
                        Need help with your project? Our experts are ready to assist you.
                        Fill out the form and we'll get back to you within 24 hours.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                                <span className="text-emerald-400">✓</span>
                            </div>
                            <span className="text-gray-300">24/7 Customer Support</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                                <span className="text-emerald-400">✓</span>
                            </div>
                            <span className="text-gray-300">Free Consultation</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center">
                                <span className="text-emerald-400">✓</span>
                            </div>
                            <span className="text-gray-300">No Obligation Quote</span>
                        </div>
                    </div>
                </div>

                {/* Right column: form card */}
                <div className="lg:col-span-6 flex justify-end">
                    <div className="w-full max-w-lg bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"></div>

                        <div className="relative z-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-green-500 mb-2">
                                    Get Free Consultation
                                </h3>

                                <p className="text-gray-400">Fill the form below to request a callback</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name <span className="text-green-500">*</span>
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder=" Full Name.."
                                            className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address <span className="text-green-500">*</span>
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="gmail.com"
                                            className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                            Phone Number <span className="text-green-500">*</span>
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 (999) 123-4567"
                                            className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center space-x-3 text-gray-300">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-emerald-500"
                                            required
                                        />
                                        <span className="text-sm">I agree to receive communications and accept the privacy policy</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        REQUEST CALLBACK
                                    </span>
                                </button>
                            </form>

                            <p className="text-center text-gray-400 text-sm mt-6">
                                We respect your privacy.. guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative SVG wave */}

        </section>
    );
}

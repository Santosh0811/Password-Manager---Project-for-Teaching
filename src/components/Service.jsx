import React from "react";

const Service = () => {
    return (
        <div className="min-h-screen bg-[#0F172A] text-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                        Our Services
                    </h1>
                    <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                        Powerful security tools crafted to make your digital life safer, easier, and more secure.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Service 1 */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:scale-[1.03] hover:shadow-xl transition duration-300">
                        <div className="flex justify-center">
                            <div className="bg-indigo-500/20 p-4 rounded-full">
                                <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M16.5 10.5V6.75C16.5 4.67893 14.8211 3 12.75 3C10.6789 3 9 4.67893 9 6.75V10.5M6.75 10.5C5.50736 10.5 4.5 11.5074 4.5 12.75V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75H18.75C19.9926 21.75 21 20.7426 21 19.5V12.75C21 11.5074 19.9926 10.5 18.75 10.5H6.75Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white text-center mt-6">
                            Secure Password Vault
                        </h2>

                        <p className="text-gray-300 mt-4 text-center">
                            Store and encrypt all your passwords using military-grade security with zero-knowledge protection.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:scale-[1.03] hover:shadow-xl transition duration-300">
                        <div className="flex justify-center">
                            <div className="bg-pink-500/20 p-4 rounded-full">
                                <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 6V12L15.5 13.5M12 21C7.30558 21 3.5 17.1944 3.5 12.5C3.5 7.80558 7.30558 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5C20.5 17.1944 16.6944 21 12 21Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white text-center mt-6">
                            Auto Password Generator
                        </h2>

                        <p className="text-gray-300 mt-4 text-center">
                            Generate strong, uncrackable passwords instantly — customized to fit your needs.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:scale-[1.03] hover:shadow-xl transition duration-300">
                        <div className="flex justify-center">
                            <div className="bg-emerald-500/20 p-4 rounded-full">
                                <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9 12H15M9 16H13M7 8H17M21 3H3V21H21V3Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white text-center mt-6">
                            Auto-Fill Everywhere
                        </h2>

                        <p className="text-gray-300 mt-4 text-center">
                            Automatically fill passwords and forms securely across all your devices and browsers.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-lg hover:scale-[1.03] hover:shadow-xl transition duration-300 md:col-span-3">
                        <div className="flex justify-center">
                            <div className="bg-yellow-500/20 p-4 rounded-full">
                                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.75 3.75H14.25L20.25 9.75V20.25A1.5 1.5 0 0 1 18.75 21.75H5.25A1.5 1.5 0 0 1 3.75 20.25V9.75L9.75 3.75Z" />
                                </svg>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white text-center mt-6">
                            Encrypted File Storage
                        </h2>

                        <p className="text-gray-300 mt-4 text-center max-w-2xl mx-auto">
                            Securely store sensitive documents — IDs, recovery codes, private files — with full encryption.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;

import React, { useState } from 'react';


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="text-white text-lg font-semibold">Logo</a>
                </div>
                <div className={`sm:flex sm:flex-grow w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 mx-10 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                    <input type="text" placeholder="Search" className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none" />
                </div>
                <div className={`hidden sm:flex items-center space-x-5 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                </div>
                {/* Mobile Menu Toggler */}
                <div className="sm:hidden">
                    <button onClick={toggleMobileMenu} className="text-white transition duration-300 ease-in-out">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu (hidden by default) */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block transition-all duration-300 ease-in-out' : 'hidden'}`}>
                <div className="block text-white py-2 px-4 text-center">
                    <a href="#" className="block py-1 border-b border-gray-700">Home</a>
                    <a href="#" className="block py-1 border-b border-gray-700">About</a>
                </div>
                <input type="text" placeholder="Search" className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none mt-4" />
            </div>
        </nav>
    );
};

export default Navbar;

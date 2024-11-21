const Footer = () => {
    return (
        <footer className="bg-sky-700 text-white py-6 px-6 lg:px-10 mt-16 ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-4">
                    {/* Logo and Name */}
                    <div className="flex items-center space-x-2">
                        {/* Add your logo image here */}
                        <div className="text-2xl font-bold">ScanRX</div>
                    </div>

                    {/* Navigation Links */}
                    <div className="mt-4 md:mt-0">
                        <nav className="flex space-x-6">
                            <a href="#home" className="text-white-400 hover:text-sky-500">
                                Home
                            </a>
                            <a href="#about" className="text-white-400 hover:text-sky-500">
                                About
                            </a>
                            <a href="#team" className="text-white-400 hover:text-sky-500">
                                Team
                            </a>

                        </nav>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-4 text-center text-sm">
                    <p className="text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} ScanRX. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

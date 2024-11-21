import Link from "next/link";

const Navbar = () => {
    return (
        <nav className=" shadow bg-sky-600 px-6 lg:px-10">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="#home" className="text-xl font-bold text-white-100">
                    ScanRx
                </Link>
                <div className="flex space-x-6">
                    <a href="#home" className="text-white hover:text-blue-900">
                        Home
                    </a>
                    <a href="#about" className="text-white hover:text-blue-900">
                        About
                    </a>
                    <a href="#team" className="text-white hover:text-blue-900">
                        Team
                    </a>
                    {/* <Link href="/contact" className=" text-white-600 hover:text-blue-600">
                        Contact
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

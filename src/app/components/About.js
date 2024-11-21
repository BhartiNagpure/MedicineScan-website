import React from "react";
import Image from "next/image";
import scannerimg from '../assests/mobilescan.png'

const About = () => {
    return (
        <section
            id="about"
            className=" about relative px-6 py-20"
        >
            {/* Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content */}
            <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between sm:px-2 md:px-6 lg:px-10  ">
                {/* Left Section: About Text */}
                <div className=" lg:w-1/2  ">
                    <h2 className="text-4xl font-bold mb-4 text-sky-600 ">ABOUT US</h2>
                    <p className="text-md text-gray-600 leading-relaxed">
                        A ScanRx using AI helps users identify and manage medications by scanning pill barcodes, or packaging. It utilizes image recognition and machine learning to quickly provide information on drug names,  side effects, and interactions. They enhance medication safety, improve adherence, and offer convenience by accessing vast drug databases in real-time, with privacy protections like HIPAA compliance for secure data handling. By integrating AI with modern scanning technology, ScanRx aims to enhance the overall efficiency of healthcare, reduce the chances of medication misuse ,and provide real-time
                        drug-related data at the user's fingertips.

                    </p>
                </div>

                {/* Right Section: Scanner Image */}

                <div className="lg:w-1/2 relative flex justify-center mt-10 lg:mt-0 ">
                    <div
                        className="p-3 border shadow-lg "
                        style={{
                            top: '14.3%',
                            // transform: 'translateY(-14.3%)',
                        }}
                    >
                        <Image
                            src={scannerimg}
                            alt="Scanner"
                            className="w-100 h-auto"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;



// import React from "react";
// import Image from "next/image";
// import scannerimg from '../assests/mobilescan.png'
// import mobilescanimg from '../assests/medicinescan.jpg'

// const About = () => {
//     return (
//         <section className="py-16 bg-gray-100">
//             {/* Title */}
//             <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold text-sky-600">About Us</h2>
//             </div>

//             {/* Content Section */}
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-10">
//                 {/* Left Section: Text */}
//                 <div className="lg:w-1/2 mb-10 lg:mb-0">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                         We are dedicated to providing the highest quality products and services to our customers.
//                         Our mission is to enhance lives through innovative solutions and a commitment to excellence.
//                         With years of experience, we strive to make a meaningful impact in our field.
//                     </p>
//                 </div>

//                 {/* Right Section: Image */}
//                 <div className="lg:w-1/2 flex items-center justify-center p-6">
//                     <Image
//                         src={scannerimg}
//                         alt="About Us"
//                         className="rounded-lg shadow-lg w-100 h-100 "
//                     />
//                 </div>
//             </div>
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-10">
//                 {/* Left Section: Text */}
//                 <div className="lg:w-1/2 flex items-center justify-center p-6">
//                     <Image
//                         src={mobilescanimg}
//                         alt="About Us"
//                         className="rounded-lg h-100 w-100 shadow-lg "
//                     />
//                 </div>


//                 {/* Right Section: Image */}
//                 <div className="lg:w-1/2 mb-10 lg:mb-0">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
//                     <p className="text-gray-600 leading-relaxed">
//                         We are dedicated to providing the highest quality products and services to our customers.
//                         Our mission is to enhance lives through innovative solutions and a commitment to excellence.
//                         With years of experience, we strive to make a meaningful impact in our field.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;



// import React from "react";
// import Image from "next/image";
// import scannerimg from '../assests/mobilescan.png'

// const About = () => {
//     return (
//         <section
//             className="about relative  px-6"
//         >
//             {/* Overlay */}
//             <div className="absolute inset-0  bg-black bg-opacity-70"></div>

//             {/* Content */}
//             <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between sm:px-2 md:px-6 lg:px-10  py-20">
//                 {/* Left Section: About Text */}
//                 <div className="text-white lg:w-1/2">
//                     <h2 className="text-4xl font-bold mb-4">About Us</h2>
//                     <p className="text-md leading-relaxed">
//                         A ScanRx using AI helps users identify and manage medications by scanning pill barcodes, or packaging. It utilizes image recognition and machine learning to quickly provide information on drug names,  side effects, and interactions. They enhance medication safety, improve adherence, and offer convenience by accessing vast drug databases in real-time, with privacy protections like HIPAA compliance for secure data handling. By integrating AI with modern scanning technology, ScanRx aims to enhance the overall efficiency of healthcare, reduce the chances of medication misuse ,and provide real-time
//                         drug-related data at the user's fingertips.

//                     </p>
//                 </div>

//                 {/* Right Section: Scanner Image */}

//                 <div className="lg:w-1/2 flex flex-wrap flex-row justify-center mt-10 lg:mt-0 transform  ">
//                     <div
//                         className=" bg-red-800 border p-3 flex flex-wrap flex-row shadow-lg "
//                         style={{
//                             top: '14.3%',
//                             transform: 'translateY(-14.3%)',
//                         }}
//                     >
//                         <Image
//                             src={scannerimg}
//                             alt="Scanner"
//                             className="w-52 h-auto p-2  "
//                         />
//                         <Image
//                             src={scannerimg}
//                             alt="Scanner"
//                             className="w-52 h-auto p-2"
//                         />
//                         {/* <Image
//                             src={scannerimg}
//                             alt="Scanner"
//                             className="w-100 h-50"
//                         /> */}
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default About;

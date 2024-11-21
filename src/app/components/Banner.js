// import { useState } from "react";
// import Image from "next/image";
// import bannerpng from '../assests/bannerpng.png';
// import dynamic from "next/dynamic";

// // Dynamically import the scanner component to prevent SSR issues
// const ScannerComponent = dynamic(() => import("./Scanner"), { ssr: false });
// const Banner = () => {
//     const [showScanner, setShowScanner] = useState(false);

//     return (
//         <div className="bg-sky-600 relative" style={{
//             borderBottomRightRadius: "130px",
//         }}>
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-10">
//                 {/* Left side content */}
//                 <div className="md:w-1/2 text-left p-4">
//                     <h1 className="text-5xl font-bold text-white-400 ">
//                         ScanRx
//                     </h1>
//                     <p className="mt-4 text-lg text-white-600">
//                         Scan QR codes on medicines to access critical information about usage, side effects, and precautions.
//                     </p>

//                     <button
//                         className="mt-6 px-6 py-3 bg-sky-300 text-white font-semibold rounded hover:bg-blue-700"
//                         onClick={() => setShowScanner(true)}
//                     >
//                         Scan Now
//                     </button>

//                 </div>

//                 {/* Right side image */}
//                 <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
//                     <Image
//                         src={bannerpng}
//                         alt="Banner Image"
//                         width={600}
//                         height={600}
//                     // className="rounded-lg shadow-md"
//                     />
//                 </div>
//                 {showScanner && (
//                     // <div className="absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50">
//                     //     <div className="relative bg-white p-6 rounded shadow-md">
//                     //         <button
//                     //             className="absolute top-2 right-2 text-red-500"
//                     //             onClick={() => setShowScanner(false)}
//                     //         >
//                     //             ✖
//                     //         </button>
//                     //         <h2 className="text-2xl font-semibold mb-4">Start Scanning</h2>
//                     //         <ScannerComponent />
//                     //     </div>
//                     // </div>

//                     <ScannerComponent />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Banner;



import { useState } from "react";
import Image from "next/image";
import bannerpng from "../assests/bannerpng.png";
import dynamic from "next/dynamic";

// Dynamically import the scanner component to prevent SSR issues
const ScannerComponent = dynamic(() => import("./Scanner"), { ssr: false });

const Banner = () => {
    const [showScanner, setShowScanner] = useState(false);



    return (
        <section id="home">
            <div className="bg-sky-600 relative" style={{ borderBottomRightRadius: "130px" }}>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-10">
                    {/* Left side content */}
                    <div className="md:w-1/2 text-left p-4">
                        <h1 className="text-5xl font-bold text-white-400">ScanRx</h1>
                        <p className="mt-4 text-lg text-white-600">
                            Scan QR codes on medicines to access critical information about usage, side effects, and precautions.
                        </p>

                        <button
                            className="mt-6 px-6 py-3 bg-sky-700 text-white font-semibold rounded hover:bg-sky-800"
                            onClick={() => setShowScanner(true)}
                        >
                            Scan Now
                        </button>
                    </div>

                    {/* Right side image */}
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                        <Image src={bannerpng} alt="Banner Image" width={600} height={600} />
                    </div>
                </div>

                {/* Scanner Modal */}
                {showScanner && (
                    < ScannerComponent setShowScanner={setShowScanner} />
                )
                }


            </div >
        </section>
    );
};

export default Banner;

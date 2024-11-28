

// "use client";
// import { Html5Qrcode } from "html5-qrcode";
// import { useEffect, useState, useRef } from "react";

// function Scanner({ setShowScanner }) {
//     const [scanResult, setScanResult] = useState(null);
//     const [isScanning, setIsScanning] = useState(false);
//     const scannerRef = useRef(null);

//     const startCameraScanner = () => {
//         const scanner = new Html5Qrcode("reader");
//         scannerRef.current = scanner;

//         scanner.start(
//             { facingMode: "environment" }, // Use the rear camera
//             {
//                 fps: 10,
//                 qrbox: { width: 250, height: 250 },
//             },
//             (decodedText) => {
//                 console.log("QR code detected:", decodedText);
//                 setScanResult(decodedText);
//                 stopScanning(); // Automatically stop after a successful scan
//             },
//             // (decodedText) => {
//             //     console.log("QR code detected:", decodedText);

//             //     try {
//             //         // Parse the scanned QR code data
//             //         const parsedData = JSON.parse(decodedText);

//             //         // Ensure the data contains the required fields
//             //         if (parsedData.name && parsedData.usage && parsedData.sideEffects && parsedData.moreInfoLink) {
//             //             setScanResult(parsedData);
//             //         } else {
//             //             console.error("Invalid QR data format");
//             //         }
//             //     } catch (error) {
//             //         console.error("Error parsing QR code data:", error);
//             //     }

//             //     stopScanning(); // Automatically stop after a successful scan
//             // },
//             (error) => {
//                 console.warn("QR code scanning error:", error);
//             }
//         ).then(() => {
//             setIsScanning(true);
//         }).catch((err) => {
//             console.error("Unable to start scanning:", err);
//         });
//     };

//     const stopScanning = () => {
//         if (scannerRef.current) {
//             scannerRef.current.stop().then(() => {
//                 scannerRef.current.clear();
//                 setIsScanning(false);
//             }).catch((err) => {
//                 console.error("Error stopping scanner:", err);
//             });
//         }
//     };

//     const scanFromGallery = async (event) => {
//         const file = event.target.files[0];
//         if (!file) return;

//         const scanner = new Html5Qrcode("reader");
//         try {
//             const result = await scanner.scanFile(file, true); // `true` to allow cross-origin images
//             console.log("QR code from file:", result);
//             setScanResult(result);
//         } catch (err) {
//             console.error("Error scanning file:", err);
//         }
//     };

//     useEffect(() => {
//         return () => {
//             // Cleanup when the component unmounts
//             if (scannerRef.current) {
//                 scannerRef.current.stop().catch(console.warn);
//                 scannerRef.current.clear();
//             }
//         };
//     }, []);

//     return (
//         <>
//             <div style={{ display: 'flex' }}>
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
//                     <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-4xl mx-auto">
//                         <button
//                             className="absolute top-2 right-2 text-red-500"
//                             onClick={() => setShowScanner(false)}
//                         >
//                             ✖
//                         </button>
//                         <div className="text-center">
//                             {/* Camera Scanner Controls */}
//                             <div className="mt-4">
//                                 {isScanning ? (
//                                     <button
//                                         onClick={stopScanning}
//                                         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                                     >
//                                         Stop Scanning
//                                     </button>
//                                 ) : (
//                                     <button
//                                         onClick={startCameraScanner}
//                                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                                     >
//                                         Scan with Camera
//                                     </button>
//                                 )}
//                             </div>

//                             {/* Upload File for Gallery Scanner */}
//                             <div className="mt-4">
//                                 <label
//                                     htmlFor="file-upload"
//                                     className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
//                                 >
//                                     Upload from Gallery
//                                 </label>
//                                 <input
//                                     id="file-upload"
//                                     type="file"
//                                     accept="image/*"
//                                     className="hidden"
//                                     onChange={scanFromGallery}
//                                 />
//                             </div>

//                             {/* QR Code Reader Div */}
//                             <div id="reader" className="mt-6"></div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div>
//                 {scanResult && (
//                     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
//                         <div className="bg-white p-6 rounded-lg shadow-lg relative min-w-4xl mx-auto">
//                             <button
//                                 className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//                                 onClick={() => setScanResult(null)}
//                             >
//                                 ✖
//                             </button>
//                             <h3 className="text-xl font-bold mb-2 text-gray-500">Scan Result:</h3>
//                             <p className="text-gray-700">
//                                 <a
//                                     href={scanResult}
//                                     className="text-blue-500 hover:text-blue-700 underline"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     {scanResult}
//                                 </a>
//                             </p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Scanner;


"use client";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState, useRef } from "react";

function Scanner({ setShowScanner }) {
    const [scanResult, setScanResult] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const scannerRef = useRef(null);

    const startCameraScanner = () => {
        const scanner = new Html5Qrcode("reader");
        scannerRef.current = scanner;

        scanner.start(
            { facingMode: "environment" }, // Use the rear camera
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            },
            (decodedText) => {
                console.log("QR code detected:", decodedText);
                setScanResult(decodedText);
            },
            (error) => {
                console.warn("QR code scanning error:", error);
            }
        ).then(() => {
            setIsScanning(true);
        }).catch((err) => {
            console.error("Unable to start scanning:", err);
        });
    };

    const stopScanning = () => {
        if (scannerRef.current) {
            scannerRef.current.stop().then(() => {
                scannerRef.current.clear();
                setIsScanning(false);
            }).catch((err) => {
                console.error("Error stopping scanner:", err);
            });
        }
    };

    const scanFromGallery = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const scanner = new Html5Qrcode("reader");
        try {
            const result = await scanner.scanFile(file, true); // `true` to allow cross-origin images
            console.log("QR code from file:", result);
            setScanResult(result);
        } catch (err) {
            console.error("Error scanning file:", err);
        }
    };

    useEffect(() => {
        return () => {
            // Cleanup when the component unmounts
            if (scannerRef.current) {
                scannerRef.current.stop().catch(console.warn);
                scannerRef.current.clear();
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
            <div className="flex justify-center items-center space-x-4 py-8">
                {/* QR Code Scanner Block */}
                <div className="scanner-container bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                    <button
                        className="absolute top-2 right-2 text-red-500"
                        onClick={() => setShowScanner(false)}
                    >
                        ✖
                    </button>
                    <div className="text-center">
                        {/* Camera Scanner Controls */}
                        <div className="mt-4">
                            {isScanning ? (
                                <button
                                    onClick={stopScanning}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Stop Scanning
                                </button>
                            ) : (
                                <button
                                    onClick={startCameraScanner}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Scan with Camera
                                </button>
                            )}
                        </div>

                        {/* Upload File for Gallery Scanner */}
                        <div className="mt-4">
                            <label
                                htmlFor="file-upload"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
                            >
                                Upload from Gallery
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={scanFromGallery}
                            />
                        </div>

                        {/* QR Code Reader Div */}
                        <div id="reader" className="mt-6"></div>
                    </div>
                </div>

                {/* Result Block */}
                {scanResult && (
                    <div className="result-container bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                        <button
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            onClick={() => setScanResult(null)}
                        >
                            ✖
                        </button>
                        <h3 className="text-xl font-bold mb-2 text-gray-500">Scan Result:</h3>
                        <p className="text-gray-700">
                            <a
                                href={scanResult}
                                className="text-blue-500 hover:text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {scanResult}
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Scanner;

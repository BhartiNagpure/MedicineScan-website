

"use client";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState, useRef } from "react";
import { BrowserMultiFormatReader, mScannerView } from '@zxing/browser';
import { toast } from 'react-hot-toast';
import Tesseract from "tesseract.js";

function Scanner({ setShowScanner }) {
    const [scanResult, setScanResult] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);
    const scannerRef = useRef(null);
// console.log(`Scanner component rendered`, scanResult)

    // const startCameraScanner = () => {
    //     const codeReader = new BrowserMultiFormatReader();
    //     scannerRef.current = codeReader;

    //     codeReader.decodeFromVideoDevice(
    //         undefined, // Use default camera
    //         'reader',
    //         async (result, error) => {
    //             if (result) {
    //                 stopScanning(); 
    //                 console.log("Code detected:", result.text);
    //                 setScanResult(result.text);
    //                // Stop scanning immediately after detection
    //                 await fetchQrData(result.text);
    //             }
    //             if (error && !(error instanceof Error)) {
    //                 console.error("Scanning error:", error);
    //             }
    //         }
    //     ).then(() => {
    //         setIsScanning(true);
    //     }).catch(err => {
    //         setIsScanning(false)
    //         console.error("Camera initialization error:", err);
    //     });
    // };
   

    
    const startCameraScanner = () => {
        return new Promise((resolve, reject) => {
            const codeReader = new BrowserMultiFormatReader();
            scannerRef.current = codeReader;

            codeReader.decodeFromVideoDevice(
                undefined, // Use default camera
                'reader',
                async (result, error) => {
                    if (result) {
                        stopScanning(); 
                        console.log("Code detected:", result.text);
                        setScanResult(result.text);
                        // Stop scanning immediately after detection
                        await fetchQrData(result.text);
                    }
                    if (error && !(error instanceof Error)) {
                        console.error("Scanning error:", error);
                    }
                }
            ).then(() => {
                setIsScanning(true);
                resolve();
            }).catch(err => {
                setIsScanning(false);
                console.error("Camera initialization error:", err);
                reject(err);
            });
        });
    };

    const stopScanning = () => {
        setIsScanning(false);  // Set scanning state to false
    
        // If the scanner has a stop method (e.g., for barcode scanner)
        if (scannerRef.current && typeof scannerRef.current.stop === 'function') {
            scannerRef.current.stop();
        }
    
        // Stopping the video stream if it exists
        const videoElement = document.getElementById('reader');  // Assuming 'reader' is your video element ID
        if (videoElement) {
            const stream = videoElement.srcObject;
            if (stream) {
                stream.getTracks().forEach(track => track.stop());  // Stop all media tracks (video/audio)
            }
            videoElement.srcObject = null;  // Disconnect the video element from the stream
        }
    };
    

    const scanFromGallery = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const codeReader = new BrowserMultiFormatReader();
        try {
            const imageUrl = URL.createObjectURL(file);
            const hints = new Map();
            hints.set(2, true); // Enable try harder mode
            const result = await codeReader.decodeFromImageUrl(imageUrl);
            console.log("QR code from file:", result.text);
            setScanResult(result.text);

            // Fetch data from the scanned QR code
            await fetchQrData(result.text);
        } catch (err) {
            console.error("Error scanning file:", err);
            setScanResult(null);
            alert("No QR code found in the image. Please try another image.");
        } finally {
            codeReader.reset();
            URL.revokeObjectURL(imageUrl);
        }
    };


    const scanTextFromCamera = async () => {
        try {
            // First start the camera
            await startCameraScanner();

            // Create a new Tesseract worker
            const worker = await Tesseract.createWorker('eng');

            // Wait a moment for camera to initialize
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Get video element and create canvas
            const video = document.getElementById('reader');
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            // Set canvas size to video size
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Capture frame from video
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas to blob
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
            const imageUrl = URL.createObjectURL(blob);

            // Recognize text
            const { data: { text } } = await worker.recognize(imageUrl);

            // Clean up
            await worker.terminate();
            URL.revokeObjectURL(imageUrl);
            stopScanning();

            // If text was found, treat it as a barcode and fetch data
            if (text.trim()) {
                setScanResult(text.trim());
                await fetchQrData(text.trim());
            } else {
                toast.error("No text detected");
            }

        } catch (error) {
            console.error('Error scanning text:', error);
            toast.error("Error scanning text");
            stopScanning();
        }
    };


    // const scanFromGallery = async (event) => {
    //     const file = event.target.files[0];
    //     if (!file) return;

    //     const scanner = new Html5Qrcode("reader");
    //     try {
    //         const result = await scanner.scanFile(file, true); // `true` to allow cross-origin images
    //         console.log("QR code from file:", result);
    //         setScanResult(result);
    //     } catch (err) {
    //         console.error("Error scanning file:", err);
    //     }
    // };


     const fetchQrData = async (name) => {
        try {
            if (!name) {
                console.error("Barcode number is empty");
                return;
            }
console.log("name ",name)
            // Sanitize and normalize the text
            // const decodedName = encodeURIComponent(name);
            // console.log("decodenam ",decodedName); // Debugging line
            const extractedName = name.match(/^[a-zA-Z0-9]+/)[0].trim();    console.log("topass name:", extractedName); // Debugging line
            const response = await fetch(`/api/getmedicinename?name=${extractedName}`);

            if (!response.ok) {
                throw new Error("Failed to fetch medicine data");
            }

            const data = await response.json();

            // Set the fetched data to display on the frontend
            setFetchedData(data);
            stopScanning(); // Stop scanning process
            
            // Explicitly stop video tracks
            const videoElement = document.getElementById('reader');
            if (videoElement && videoElement.srcObject) {
                const tracks = videoElement.srcObject.getTracks();
                tracks.forEach(track => track.stop());
                videoElement.srcObject = null;
            }
            
        } catch (error) {
            toast.error("Error fetching medicine data");
            console.error("Error fetching medicine data:", error);
        }
    };


    // const fetchQrData = async (barcodeNumber) => {
    //     try {
    //         if (!barcodeNumber) {
    //             console.error("Barcode number is empty");
    //             return;
    //         }

    //         const response = await fetch(`/api/getmedicine?barcode=${encodeURIComponent(barcodeNumber)}`);

    //         if (!response.ok) {
    //             throw new Error("Failed to fetch medicine data");
    //         }

    //         const data = await response.json();

    //         // Set the fetched data to display on the frontend
    //         setFetchedData(data);
    //         stopScanning(); // Stop scanning process
            
    //         // Explicitly stop video tracks
    //         const videoElement = document.getElementById('reader');
    //         if (videoElement && videoElement.srcObject) {
    //             const tracks = videoElement.srcObject.getTracks();
    //             tracks.forEach(track => track.stop());
    //             videoElement.srcObject = null;
    //         }
            
    //     } catch (error) {
    //         toast.error("Error fetching medicine data");
    //         console.error("Error fetching medicine data:", error);
    //     }
    // };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
            <div className="flex justify-center items-center space-x-4 py-8">
                {/* QR Code Scanner Block */}
                {
                    !fetchedData ? (
                        <div className="scanner-container bg-white p-6 rounded-lg shadow-lg max-w-lg min-w-[400px w-full relative">
                            <button
                                className="absolute top-2 right-2 text-red-500"
                                onClick={() => {setShowScanner(false); stopScanning()}}
                            >
                                ✖
                            </button>
                            <div className="text-center">
                                {/* Camera Scanner Controls */}
                                <div className="mt-4">
                                    {isScanning ? (
                                        <button
                                            onClick={() => stopScanning() }
                                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Stop Scanning
                                        </button>
                                    ) : (
                                        <button
                                        onClick={() => scanTextFromCamera()}
                                            // onClick={startCameraScanner}
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Scan with Camera
                                        </button>
                                    )}
                                </div>

                                {/* /* Upload File for Gallery Scanner */}
                                {/* <div className="mt-4">
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
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                        const preview = document.getElementById('preview');
                                        if (preview) {
                                            preview.src = e.target.result;
                                            preview.classList.remove('hidden');
                                        }
                                    };
                                    reader.readAsDataURL(file);
                                    scanFromGallery(e);
                                }
                            }}
                        />
                    </div> */}

                                {/* Image Preview */}
                                <img id="preview" className="mt-4 max-w-full h-48 object-contain hidden" alt="Preview" />

                                {/* QR Code Reader Video */}
                                <video id="reader" className={`mt-6 w-full ${isScanning ? "block " : "hidden"} `}></video>
                            </div>
                        </div>
                    ) : (
                        <div className="result-container bg-white p-6 rounded-lg shadow-lg min-w-[400px] w-full relative">
                            <button
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                onClick={() => {
                                    setShowScanner(false) ;
                                    stopScanning()
                                    window.location.reload();// Clear the scan result    
                                }}

                            >
                                ✖
                            </button>
                            <h3 className="text-xl font-bold mb-2 text-gray-500">Scan Result:</h3>
                            {fetchedData && (
                                <div>
                                    <div className="space-y-2">
                                        <p><strong>Name:</strong> {fetchedData.name}</p>
                                        <p><strong>Barcode:</strong> {fetchedData.barcode}</p>
                                        <p><strong>Description:</strong> {fetchedData.description}</p>
                                        <p><strong>Dosage:</strong> {fetchedData.dose}</p>
                                        <p><strong>Price:</strong> {fetchedData.price} Rs</p>
                                        <p><strong>Expiration Date:</strong> {new Date(fetchedData.expiration_date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            )}

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

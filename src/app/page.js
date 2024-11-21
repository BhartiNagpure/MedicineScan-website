"use client"

import Navbar from "./layout/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Team from "./components/Team";
import Steps from "./components/Steps";
import Footer from "./layout/Footer";

export default function Home() {
  // useEffect(() => {
  //   if (scannedData) {
  //     fetch(`/api/medicine-details?qrCode=${encodeURIComponent(scannedData)}`)
  //       .then((response) => response.json())
  //       .then((data) => console.log("Medicine Details:", data))
  //       .catch((err) => console.error("Error fetching details:", err));
  //   }
  // }, [scannedData]);

  return (

    <div>
      <Navbar />
      <Banner />
      <About />
      <Steps />
      <Team />
      <Footer />
    </div>
  );
}

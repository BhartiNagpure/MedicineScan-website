import Image from "next/image";
import scanimg from '../assests/scan.png';
import selectimg from '../assests/select.png';
import talkimg from '../assests/talk.png';


const Steps = () => {
    const step = [
        {
            title: "Scan",
            description:
                "Scan your medicine based on QR code and availability. Add filters such as usage, side effects, and location.",
            image: scanimg,
        },
        {
            title: "Select",
            description:
                "With your search complete, select the expert profile that best fits your needs and arrange a time to talk.",
            image: selectimg,
        },
        {
            title: "Speak",
            description:
                "Now it's time to speak with your chosen expert via video call and get the advice you need when you need it.",
            image: talkimg,
        },
    ]
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#7dd3fc" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,85.3C320,107,400,181,480,192C560,203,640,149,720,117.3C800,85,880,75,960,90.7C1040,107,1120,149,1200,165.3C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <div className=" step relative bg-sky-300 px-6 py-10">
                {/* Content */}
                <div className=" ">
                    <h2 className="text-4xl font-bold mb-4 text-white px-4 md:px-8 ">STEPS</h2>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-8">
                        {step.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 text-center"
                            >
                                <div className="flex justify-center mb-4 ">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={250}
                                        height={150}
                                        className="rounded"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-sky-600">{step.title}</h3>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;

{/* Wave background */ }
//   <div className="absolute mt-0 inset-0">
//   <svg
//       className="w-full top-0 left-0 w-full h-[100px]"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 1440 320"
//   >
//       <path
//           fill="#d1f2eb"
//           d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,144C672,139,768,149,864,165.3C960,181,1056,203,1152,218.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//       ></path>
//   </svg>
// </div>
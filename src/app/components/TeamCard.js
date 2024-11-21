// components/TeamCard.js
import Image from 'next/image';

const TeamCard = ({ avatar, name, contact }) => {
    return (
        // <div className="max-w-sm bg-blue-100 rounded-lg shadow-md border border-gray-200 p-4 text-center">
        //     <div className="flex justify-center  "
        //     // style={{
        //     //     top: '14.3%',
        //     //     transform: 'translateY(-14.3%)',
        //     // }}
        //     >
        //         <Image
        //             src={avatar}
        //             alt={`${name}'s avatar`}
        //             width={80}
        //             height={80}
        //             className="rounded-full"
        //         />
        //     </div>
        //     <h2 className="text-lg font-semibold mt-4 text-sky-500">{name}</h2>
        //     <p className="text-sm text-gray-600 mt-2">{contact}</p>
        // </div>
        <div className="max-w-sm m-5 bg-blue-100 rounded-lg shadow-md border border-gray-200 p-4 text-center relative">
            <div
                className="absolute inset-x-0 top-[-40px] flex  justify-center items-center"
            >
                <Image
                    src={avatar}
                    alt={`${name}'s avatar`}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white bg-white"
                />
            </div>
            <div className="mt-12">
                {/* Add the rest of your card content here */}
                <h2 className="text-xl font-semibold text-gray-500">{name}</h2>
                <p className="text-gray-700">{contact}</p>
            </div>
        </div>

    );
};

export default TeamCard;

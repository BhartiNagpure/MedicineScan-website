// pages/team.js
import TeamCard from './TeamCard';
import avtar from '../assests/maleavtar.png';
import femalevatar from "../assests/femaleavtar.png"
const teamMembers = [
    {
        id: 1,
        name: 'Arya Nandu Buradkar',
        branch: "Dept. of Computer Engineering ",
        avatar: femalevatar,
        contact: 'john@example.com',
    },
    {
        id: 2,
        name: 'Krutika Arun Atkare ',
        branch: "Dept. of Computer Engineering ",
        avatar: femalevatar,
        contact: 'jane@example.com',
    },
    {
        id: 3,
        name: 'Shravani Rajesh Meshram ',
        branch: "Dept. of Computer Engineering ",
        avatar: femalevatar,
        contact: 'mike@example.com',
    },
    {
        id: 4,
        name: 'Rakhi Mohan Ardak',
        branch: "Dept. of Computer Engineering ",
        avatar: femalevatar,
        contact: 'emily@example.com',
    },
    {
        id: 5,
        name: 'Tanushree Atul Saudagar',
        branch: "Dept. of Computer Engineering ",
        avatar: femalevatar,
        contact: 'chris@example.com',
    },
    {
        id: 6,
        name: 'Gauri Prashant Nunnewar',
        branch: "Dept. of Computer Engineering ",
        avatar: femalevatar,
        contact: 'sarah@example.com',
    },
];

const Team = () => {
    return (
        <section id="team">
            <div className="container mx-auto mt-16   sm:px-2 md:px-6 lg:px-10">
                <h2 className="text-4xl font-bold mb-6 text-center text-sky-600">OUR TEAM</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            avatar={member.avatar}
                            name={member.name}
                            contact={member.branch}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
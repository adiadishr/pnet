const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'John is the CEO of our company with 10 years of experience in the industry.'
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Jane is our CTO and is passionate about technology and innovation.'
  },
  {
    name: 'Alice Johnson',
    position: 'CFO',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Alice manages our finances and ensures our financial health.'
  },
  {
    name: 'Alice Johnson',
    position: 'CFO',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Alice manages our finances and ensures our financial health.'
  },
  {
    name: 'Alice Johnson',
    position: 'CFO',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Alice manages our finances and ensures our financial health.'
  },
  {
    name: 'Alice Johnson',
    position: 'CFO',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Alice manages our finances and ensures our financial health.'
  },
  // Add more team members as needed
];


const AboutTeam = () => {
  return (
    <section className="py-24 px-[5%]">
      <div className="container mx-auto">
        <h1 className="pb-24 text-center">Meet Our Team</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img className="object-cover w-full h-48" src={member.imageUrl} alt={member.name} />
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">{member.name}</h3>
                <p className="mb-4 text-gray-600">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
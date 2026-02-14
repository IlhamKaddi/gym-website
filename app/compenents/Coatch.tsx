import React from 'react';

interface Coach {
  id: number;
  name: string;
  image: string;
}

const coaches: Coach[] = [
  {
    id: 1,
    name: 'Jane Cooper',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Brooklyn Simmons',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Savannah Nguyen',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=500&fit=crop'
  }
];

const Coach: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="font-orbitron text-white tracking-[1.5px] [text-shadow:0_0_8px_#EB1C22] text-4xl md:text-4xl font-bold text-white mb-4 tracking-wide">
            OUR BEST COACHES
          </h2>
          <p  className="text-gray-300 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Et quis et definiebas sit. Pharetra arcu sed
            diam massa rutrum in elementum arcu cursus.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-lg font-semibold">
                  {coach.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

 
      </div>
    </section>
  );
};

export default Coach;
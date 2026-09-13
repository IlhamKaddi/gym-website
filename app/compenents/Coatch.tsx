import React from 'react';

interface CoachData {
  id: number;
  name: string;
  specialty: string;
  image: string;
}

const coaches: CoachData[] = [
  {
    id: 1,
    name: 'Jane Cooper',
    specialty: 'Coach musculation',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Brooklyn Simmons',
    specialty: 'Coach cardio & endurance',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Savannah Nguyen',
    specialty: 'Coach préparation physique',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    specialty: 'Coach nutrition & perte de poids',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=500&fit=crop',
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Coaches: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="font-orbitron text-white tracking-[1.5px] [text-shadow:0_0_8px_#EB1C22] text-4xl font-bold mb-4">
            Nos meilleurs coachs
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Une équipe de coachs diplômés et passionnés, présents à chaque séance pour vous guider,
            corriger votre technique et vous aider à progresser en toute sécurité.
          </p>
        </div>

        {/* Coaches Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {coaches.map((coach) => (
            <li key={coach.id}>
              <a
                href={`/coachs/${slugify(coach.name)}`}
                className="group relative block overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#EB1C22] focus-visible:outline-offset-2"
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
                  <img
                    src={coach.image}
                    alt={`Portrait de ${coach.name}, ${coach.specialty.toLowerCase()}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Name & specialty overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-12">
                  <h3 className="text-white text-lg font-semibold">{coach.name}</h3>
                  <p className="text-[#EB1C22] text-sm font-medium">{coach.specialty}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Coaches;
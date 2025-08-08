'use client';

import { useRouter } from 'next/navigation';

const MenuPage = () => {
  const router = useRouter();

  const onBack = () => {
    router.push('/');
  };

  const restaurants = [
    { name: "Cafe Nuwara", link: "/cafenuwara/menu/appertizer" },
    { name: "Fabceylon Kurunegala", link: "/fabceylon-kurunegala/menu/appetizers" },
    { name: "Fabceylon Kandy", link: "/fabceylon-kandy/menu/appetizersr" },
    { name: "Fabceylon Grand", link: "/fabceylon-grand/menu/appetizers" }
  ];

  const handleRestaurantClick = (link) => {
    router.push(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <button
          onClick={onBack}
          className="mb-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-white mb-12">
          Our <span className="text-orange-500">Restaurants</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              onClick={() => handleRestaurantClick(restaurant.link)}
              className="cursor-pointer bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold text-orange-500">{restaurant.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

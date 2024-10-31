// SpeciesPage.jsx
import React from "react";

const insects = [
  {
    name: "Monarch Butterfly",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQS0C-RxJzov91sC-Dfq6tSDn2CTCGSKHGITFgo9awMbHeQt5ul", // Replace with a real image URL
    description: "Known for its orange and black wings, the Monarch Butterfly migrates thousands of miles each year."
  },
  {
    name: "Ladybug",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkB3GcQVN_no5Fe0wA7XKGxd4XxBViZE1D2Ges1cUZjhHIL7j2", // Replace with a real image URL
    description: "Ladybugs are beneficial insects that help control pests, especially aphids, in gardens and crops."
  },
  {
    name: "Honey Bee",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXE4dRON-2uJd5i-nW9sK4zISZvZnrYbkh5iYoPiD57f5aWqO", // Replace with a real image URL
    description: "Honey bees are essential pollinators and are known for producing honey and beeswax."
  },
  {
    name: "Praying Mantis",
    image: "https://grangettos.com/cdn/shop/articles/shutterstock_570547306_2700x.jpg?v=1627336842", // Replace with a real image URL
    description: "The Praying Mantis is a carnivorous insect with a unique predatory stance resembling a prayer."
  },
  {
    name: "Dragonfly",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR44aO-Cbrur7dseUxhA7bsnwWQVxLq_74DOULzST0WFSmnJCsS", // Replace with a real image URL
    description: "Dragonflies are fast-flying insects with two pairs of strong, transparent wings and large compound eyes."
  }
];

function SpeciesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Insect Species</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insects.map((insect, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
            <img src={insect.image} alt={insect.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{insect.name}</h2>
              <p className="text-gray-600 mt-2">{insect.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeciesPage;

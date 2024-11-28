// function Featurecard() {
//   const features = [
//     {
//       title: 'Lab Schedule',
//       description: 'Stay updated with the current lab schedule and timings.',
//       link: '/lab-schedule',
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-xl rounded-lg p-8 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-orange-500">{feature.title}</h3>
//             <p className="text-gray-600 mb-6">{feature.description}</p>
//             <a
//               href={feature.link}
//               className="inline-block px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
//             >
//               Learn More
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Featurecard;
function Featurecard() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Welcome to the Dashboard
        </h2>
        <p className="text-gray-600 mb-12">
          Explore the features and tools available for managing your tasks
          efficiently.
        </p>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-8 px-12 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold">Stay Tuned!</h3>
            <p className="mt-4">
              More features and updates are on their way. Stay connected!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featurecard;

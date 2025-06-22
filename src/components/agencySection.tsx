// import Image from "next/image";
// import React from "react";

// const AgencySection = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Refashionistas - premium's first",
//       image: "/api/placeholder/200/250",
//       category: "Fashion",
//     },
//     {
//       id: 2,
//       title: "Onesoft — marketing strategy",
//       image: "/api/placeholder/200/250",
//       category: "Marketing",
//     },
//     {
//       id: 3,
//       title: "TreeHouse — immersive conversation kit",
//       image: "/api/placeholder/200/250",
//       category: "Technology",
//     },
//   ];

//   return (
//     <div className="h-full md:min-h-screen  bg-black text-white p-8">
//       <div className="max-w-7xl mx-auto">
       
//         <div className="grid grid-cols-12 gap-8 mb-16">
//           {/* Projects Section */}
//           <div className="col-span-12 lg:col-span-4 bg-gray-200 text-black rounded-3xl p-8">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold">
//                 Our
//                 <br />
//                 Projects
//               </h2>
//               <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
//                 <span className="text-white text-sm">{projects.length}</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-3 gap-4">
//               {projects.map((project) => (
//                 <div key={project.id} className="relative">
//                   <div className="bg-neutral-900 rounded-lg aspect-[] mb-2 overflow-hidden">
//                     <div className="w-full h-14 bg-gradient-to-br from-gray-300 to-gray-700 flex items-center justify-center text-gray-600">
//                       Project {project.id}
//                     </div>
//                   </div>
//                   <p className="text-xs font-medium leading-tight">
//                     {project.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-span-12 lg:col-span-8 bg-stone-900 rounded-3xl p-8 relative">
//             <div className="flex justify-between">
//               <div className="absolute top-28 right-6">
//                 <div className="flex space-x-1">
//                   <Image src={"./leaf.svg"} alt="leaf" width={50} height={50} />
//                 </div>
//               </div>

//               <div className="mb-8">
//                 <p className="text-lg leading-relaxed text-center pr-10 pl-10 justify-center pt-16">
//                   &quot;An absolute professional who consistently delivers
//                   exceptional work, even under the most demanding deadlines. I
//                   appreciated the insightful feedback and innovative ideas
//                   introduced throughout the design process, which greatly
//                   enhanced the final product.&quot;
//                 </p>

//                 <div className="text-gray-400 text-center pt-3">
//                   <p className="font-medium">
//                     Murshid Pulkkada Founder @Progbiz
//                   </p>
//                 </div>
//               </div>

//               <div className=" absolute md:top-28 lef-6">
//                 <div className="flex space-x-1">
//                   <Image
//                     src={"./leaf2.svg"}
//                     alt="leaf"
//                     width={50}
//                     height={50}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-stone-900 rounded-3xl p-8 h-[350px]">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="font-thin">
//               <a className="text-6xl">
//                 Your dedicated
//                 <br />
//                 in-house design
//                 <br />
//                 team
//               </a>
//             </div>

//             <div className="relative">
//               <div className="absolute md:top-36 right-6">
//                 <Image src={"./leaf.svg"} alt="leaf" width={45} height={45} />
//               </div>

//               <p className="text-lg leading-relaxed mb-8">
//                 We are a global collective of diverse designers and developers,
//                 partnering with brands of all scales. What distinguishes us is
//                 our dedication to crafting memorable, user-friendly, and
//                 captivating experiences — it&apos;s what we excel at. The projects we
//                 deliver combine creative vision with practical execution,
//                 resulting in solutions that are both distinctive and impactful.
//               </p>

//               <div className="absolute ">
//                 <div className="flex items-center space-x-4">
//                   <div className="border border-l-2 border-l-gray-500 h-10"></div>
//                   <div>
//                     <p className="font-medium">Murshid</p>
//                     <p className="text-gray-400 text-sm">Founder and CEO</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgencySection;
import Image from "next/image";
import React from "react";

const AgencySection = () => {
  const projects = [
    {
      id: 1,
      title: "Refashionistas - premium's first",
      image: "/api/placeholder/200/250",
      category: "Fashion",
    },
    {
      id: 2,
      title: "Onesoft — marketing strategy",
      image: "/api/placeholder/200/250",
      category: "Marketing",
    },
    {
      id: 3,
      title: "TreeHouse — immersive conversation kit",
      image: "/api/placeholder/200/250",
      category: "Technology",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Projects Section */}
          <div className="lg:col-span-4 bg-gray-200 text-black rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold leading-tight">
                Our <br /> Projects
              </h2>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">{projects.length}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="relative">
                  <div className="bg-neutral-900 rounded-lg aspect-[4/3] mb-2 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-700 flex items-center justify-center text-gray-600 text-sm">
                      Project {project.id}
                    </div>
                  </div>
                  <p className="text-xs font-medium leading-tight">
                    {project.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="lg:col-span-8 bg-stone-900 rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="hidden md:block absolute top-36 right-6">
              <Image src="/leaf.svg" alt="leaf" width={50} height={50} />
            </div>

            <div className="hidden md:block absolute top-36 left-6">
              <Image src="/leaf2.svg" alt="leaf" width={50} height={50} />
            </div>

            <div className="text-center pt-10 md:pt-20 px-4 md:px-10">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                &quot;An absolute professional who consistently delivers
                exceptional work, even under the most demanding deadlines. I
                appreciated the insightful feedback and innovative ideas
                introduced throughout the design process, which greatly enhanced
                the final product.&quot;
              </p>
              <p className="text-gray-400 font-medium">
                Murshid Pulkkada – Founder @Progbiz
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-stone-900 rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <a className="text-4xl md:text-6xl font-thin leading-tight">
                Your dedicated
                <br />
                in-house design
                <br />
                team
              </a>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-32 right-6">
                <Image src="/leaf.svg" alt="leaf" width={45} height={45} />
              </div>

              <p className="text-base md:text-lg leading-relaxed mb-8">
                We are a global collective of diverse designers and developers,
                partnering with brands of all scales. What distinguishes us is
                our dedication to crafting memorable, user-friendly, and
                captivating experiences — it&apos;s what we excel at. The
                projects we deliver combine creative vision with practical
                execution, resulting in solutions that are both distinctive and
                impactful.
              </p>

              <div className="flex items-center space-x-4 mt-6">
                <div className="border-l-2 border-gray-500 h-10"></div>
                <div>
                  <p className="font-medium">Murshid</p>
                  <p className="text-gray-400 text-sm">Founder and CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySection;

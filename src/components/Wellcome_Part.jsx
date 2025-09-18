import React from "react";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Multi-layered gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-pink-50/30"></div>
            
            {/* Decorative gradient orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
            
            {/* Content container */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Title with gradient text */}
                <div className="mb-6">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Shabd
                        </span>
                        <span className="text-gray-800">-</span>
                        <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Setu
                        </span>
                    </h1>
                </div>
                
                {/* Subtitle with elegant styling */}
                <p className="mt-6 text-2xl md:text-3xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                    Bridge of Words & Ideas
                </p>
                
                {/* Decorative line */}
                <div className="mt-8 flex justify-center">
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full"></div>
                </div>
                
                {/* Main button with sophisticated gradient */}
                <div className="mt-12">
                    <a
                        href="#"
                        className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-white transition-all duration-300 ease-out cursor-pointer"
                    >
                        {/* Button background with gradient */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-2xl shadow-2xl group-hover:shadow-indigo-500/25 transition-all duration-300"></span>
                        
                        {/* Button hover effect */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-700 via-purple-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        
                        {/* Button border glow */}
                        <span className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></span>
                        
                        {/* Button text */}
                        <span className="relative z-10 tracking-wide">
                            Start Writing
                        </span>
                        
                        {/* Arrow icon with gradient */}
                        <span className="relative z-10 ml-3 text-2xl group-hover:translate-x-1 transition-transform duration-300">
                            →
                        </span>
                    </a>
                </div>
                
                {/* Additional subtle text */}
                <p className="mt-8 text-sm text-gray-500 font-light tracking-wider uppercase">
                    Express • Create • Inspire
                </p>
            </div>
            
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
}

export default Hero;





// import react from "react";

// function Hero() {
//     return (
//         <section className="bg-sky-50 py-20">
//             <div className="container mx-auto px-6 text-center">
//                 {/* Title logo */}
//                 <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 ">
//                     Shabd-Setu
//                 </h1>
//                 {/* somthing motivation line */}
//                 <p className="mt-4 text-xl text-gray-600">
//                     Bridge of Words & Ideas
//                 </p>
//                 {/* main butten for writing blog */}
//                 <a
//                     href="#"
//                     className="mt-8 inline-block bg-sky-600 text-white text-lg font-semibold py-4 px-8 rounded-full coursor-pointer hover:bg-sky-700 transition duration-300 shadow-xl"
//                 >
//                     Start Writing
//                 </a>

//             </div>
//         </section>
//     );
// }

// export default Hero;
